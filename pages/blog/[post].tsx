import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import { Article } from '../../components/Article';
import { Body } from '../../components/Body';
import { Footer } from '../../components/Footer';
import { BlogPost, getPostBySlug, getSortedPostsData } from '../../lib/posts';
import { NavBar } from '../../components/NavBar';
import { format } from 'date-fns';
import React from 'react';

const navList = [
	{ text: 'portfolio', url: '/' },
	{ text: 'contact', url: '/#contact' },
];

type PostProps = { post: BlogPost };

const renderers = {
	code: ({ value }: any) => (
		<SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers>
			{value}
		</SyntaxHighlighter>
	),
};

export default function Post(props: PostProps) {
	return (
		<>
			<Head>
				<title>{props.post.title}</title>
			</Head>

			<Body>
				<NavBar homeUrl="/blog" navList={navList} />
				<div className="container">
					<Article>
						<div></div>
						<div>
							<Link href="/blog" passHref>
								<div className="back__to__articles">
									<HiArrowNarrowLeft />
									<span>Articles</span>
								</div>
							</Link>

							<h1 className="heading">{props.post.title}</h1>
							<p className="post__date">
								Published on{' '}
								{format(new Date(JSON.parse(props.post.date)), 'MMMM d, yyyy')}
							</p>

							<section className="body">
								<ReactMarkdown linkTarget="_blank" renderers={renderers}>
									{props.post.content}
								</ReactMarkdown>
							</section>
						</div>
						<div></div>
					</Article>
				</div>
			</Body>

			<Footer />
		</>
	);
}

export async function getStaticProps({ params }: { params: Params }) {
	const post = (await getPostBySlug(params.post)) as any;

	return { props: { post } };
}

export async function getStaticPaths() {
	const allPosts = getSortedPostsData();

	const paths = allPosts.map(post => ({
		params: { post: post.slug },
	}));

	return { paths, fallback: false };
}

type Params = { post: string };
