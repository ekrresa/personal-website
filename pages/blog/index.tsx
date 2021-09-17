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
						<h1 className="heading">Hey, I'm Ochuko Ekrresa</h1>
						<p className="heading__text">
							I'm a software engineer based in Lagos, Nigeria. This is where I write about
							things I'm interested in.
						</p>
					</main>

					<section className="container">
						<h2 className="article__heading">Articles</h2>
						<ul className="articles">
							{allPostsData.map(data => (
								<li key={data.id} className="post__card">
									<Link href={`/blog/${data.id}`} passHref>
										<div>
											<p className="post__date">
												{format(new Date(JSON.parse(data.date)), 'MMMM d, yyyy')}
											</p>
											<h3>{data.title}</h3>
											<p>{data.summary}</p>
										</div>
									</Link>
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
		margin-top: 13em;

		.heading {
			font-size: 3rem;
			font-weight: 600;
			color: #094067e6;
			margin-bottom: 0;
		}

		.heading__text {
			font-size: 1.2rem;
			color: #094067e6;
			max-width: 44em;
			line-height: 1.6;
		}
	}

	.article__heading {
		font-size: 2rem;
		margin-top: 3em;
		margin-bottom: 1em;
		color: #094067e6;
		font-weight: 600;
	}

	.articles {
		display: grid;
		grid-template-columns: auto auto;
		gap: 3em;
		list-style: none;
		padding-left: 0;
	}

	.post__card {
		border-radius: 4px;
		margin-bottom: 3em;
		cursor: pointer;
		color: #094067;

		.post__date {
			margin: 0;
			font-size: 0.85rem;
			font-weight: 500;
		}

		h3 {
			font-size: 1.2rem;
			color: #ee495c;
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
