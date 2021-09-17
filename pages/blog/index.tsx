import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { format } from 'date-fns';

import { Body } from '../../components/Body';
import { NavBar } from '../../components/NavBar';
import { getSortedPostsData, PostFrontMatter } from '../../lib/posts';
import { Footer } from '../../components/Footer';

const navList = [
	{ text: 'portfolio', url: '/' },
	{ text: 'contact', url: '/#contact' },
];

export default function BlogHome(props: { allPostsData: PostFrontMatter[] }) {
	const { allPostsData } = props;
	return (
		<>
			<Head>
				<title>Blog - Ochuko Ekrresa</title>
			</Head>

			<Body>
				<StyledContainer>
					<NavBar homeUrl="/blog" navList={navList} />
					<main className="main container">
						<h1 className="heading">Ekrresa's Blog</h1>
						<p className="heading__text">
							I'm a software engineer based in Lagos, Nigeria. This is where I write about
							things that catch my interest.
						</p>
					</main>

					<section className="container">
						<h2 className="article__heading">Articles</h2>
						<ul className="articles">
							{allPostsData.map(data => (
								<li key={data.slug} className="post__card">
									<div className="post__header">
										<p className="post__date">
											{format(new Date(JSON.parse(data.date)), 'MMMM d, yyyy')}
										</p>

										<span className="hyphen">&#8211;</span>

										<div className="post__tags">
											{data.tags.map(tag => (
												<span key={tag} className="tag">
													{tag}
												</span>
											))}
										</div>
									</div>

									<Link href={`/blog/${data.slug}`} passHref>
										<a className="title">{data.title}</a>
									</Link>

									<p>{data.summary}</p>
								</li>
							))}
						</ul>
					</section>
				</StyledContainer>
			</Body>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();

	return { props: { allPostsData } };
}

const StyledContainer = styled.section`
	position: relative;

	.main {
		margin-top: 6em;

		.heading {
			font-size: 3rem;
			font-weight: 600;
			color: #094067;
			margin-bottom: 0;
		}

		.heading__text {
			font-size: 1.2rem;
			color: #094067;
			max-width: 44em;
			line-height: 1.6;
		}
	}

	.article__heading {
		font-size: 2rem;
		margin-top: 3em;
		margin-bottom: 1em;
		color: #094067;
		font-weight: 600;
	}

	.articles {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3em;
		list-style: none;
		padding-left: 0;
		margin-bottom: 3em;
	}

	.post__card {
		color: #094067;

		.post__header {
			display: flex;
			align-items: baseline;

			.post__date {
				margin: 0;
				font-size: 0.85rem;
				font-weight: 500;
			}

			.hyphen {
				margin: 0 0.5em;
			}

			.post__tags {
				text-transform: uppercase;

				.tag {
					margin-right: 0.7em;
					font-size: 0.9rem;
					text-transform: lowercase;

					&:last-child {
						margin-right: 0;
					}
				}
			}
		}

		a {
			color: inherit;

			&:hover {
				--d: none;
			}
		}

		.title {
			display: inline-block;
			font-size: 1.7rem;
			color: #b14949;
			margin-top: 0.3em;
			font-weight: 600;
		}

		p {
			font-size: 0.95rem;
			opacity: 0.8;
			font-weight: 500;
		}
	}
`;
