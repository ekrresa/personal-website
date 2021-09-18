import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostBySlug(slug: string) {
	const fullPath = path.join(postsDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const matterResult = matter(fileContents);

	return {
		slug,
		content: matterResult.content,
		...matterResult.data,
		date: JSON.stringify(matterResult.data.date),
	};
}

export function getSortedPostsData() {
	const filesInMarkdown = fs
		.readdirSync(postsDirectory)
		.filter(fileName => fileName.endsWith('.md'));

	const allPostsData = filesInMarkdown.map(fileName => {
		const slug = fileName.replace(/\.md$/, '');
		const filePath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const matterResult = matter(fileContents);

		return {
			slug,
			...matterResult.data,
			date: JSON.stringify(matterResult.data.date),
		} as PostFrontMatter;
	});

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export type PostFrontMatter = {
	date: string;
	slug: string;
	summary: string;
	tags: string[];
	title: string;
	published: boolean;
};

export type BlogPost = {
	content: string;
} & PostFrontMatter;
