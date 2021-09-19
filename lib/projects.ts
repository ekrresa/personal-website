import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjects() {
	const filesInMarkdown = fs
		.readdirSync(projectsDirectory)
		.filter(fileName => fileName.endsWith('.md'));

	const allProjects = filesInMarkdown.map(fileName => {
		const filePath = path.join(projectsDirectory, fileName);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const fileData = matter(fileContents);

		return fileData.data as ProjectType;
	});

	return allProjects.sort((a, b) => a.order - b.order);
}

export type ProjectType = {
	description: string;
	stack: string[];
	title: string;
	order: number;
	project_link?: string;
	github_link?: string;
	image: string;
};
