import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import { Body } from '../components/Body';
import { NavBar } from '../components/NavBar';
import { Project } from '../components/Project';
import { Footer } from '../components/Footer';
import EntryWay from '../public/entryway.svg';

const navList = [
	{ text: 'blog', url: '/blog' },
	{ text: 'projects', url: '#projects' },
	{ text: 'about', url: '#about' },
	{ text: 'contact', url: '#contact' },
];

const mainVariant: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
			delayChildren: 1,
			type: 'tween',
		},
	},
};

const itemVariant: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut' } },
};

const leftButtonVariant: Variants = {
	hidden: { opacity: 0, x: '-100%' },
	visible: { opacity: 1, x: 0 },
};

const rightButtonVariant: Variants = {
	hidden: { opacity: 0, x: '100%' },
	visible: { opacity: 1, x: 0 },
};

export default function Homepage() {
	const isNotMobile = useMediaQuery({ minWidth: 546 });

	return (
		<>
			<Head>
				<title>Ochuko Ekrresa: Software Engineer, Frontend Developer</title>
				<meta
					name="description"
					content="Ochuko Ekrresa is a software engineer with great skills in building experiences for the web"
				/>

				{/* Open Graph */}
				<meta
					property="og:title"
					content="Ochuko Ekrresa: Software Engineer, Frontend Developer"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ekrresaochuko.com/" />
				<meta
					property="og:image"
					content="https://res.cloudinary.com/chuck-huey/image/upload/v1621260122/personal/ochuko_ekrresa_portfolio_social_a6ph76.png"
				/>
				<meta
					name="og:description"
					content="Ochuko Ekrresa is a software engineer with great skills in building experiences for the web"
				/>

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Ochuko Ekrresa: Software Engineer, Frontend Developer"
				/>
				<meta name="twitter:creator" content="@chukky_ekrresa" />
				<meta
					name="twitter:description"
					content="Ochuko Ekrresa is a software engineer with great skills in building experiences for the web"
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/chuck-huey/image/upload/v1621260122/personal/ochuko_ekrresa_portfolio_social_a6ph76.png"
				/>
				<meta name="twitter:url" content="https://ekrresaochuko.com/" />
			</Head>
			<Body>
				<Main>
					<NavBar homeUrl="/" navList={navList} />

					<div className="background">ekrresa</div>

					<motion.main
						initial="hidden"
						animate="visible"
						variants={mainVariant}
						className="main container"
					>
						<motion.h1 variants={itemVariant} className="name">
							Ochuko Ekrresa
						</motion.h1>
						<motion.h2 variants={itemVariant} className="title">
							Software Engineer
						</motion.h2>
						<motion.div variants={itemVariant} className="skills">
							<div className="skill__item">REACT</div>
							<div className="skill__item">NODEJS</div>
							<div className="skill__item">TYPESCRIPT</div>
							<div className="skill__item">GRAPHQL</div>
						</motion.div>
						<motion.div variants={itemVariant} className="bio">
							I am a software engineer, experienced with building systems, and comfortable
							solving problems on the frontend and backend. I currently work at{' '}
							<a href="https://utu.io/" target="_blank" rel="noreferrer noopener">
								Utu Technologies
							</a>
							, focused on making improvements to their ride infrastructure. I write{' '}
							<Link href="/blog">here.</Link> Also, check out my{' '}
							<a
								href="https://github.com/chukky-ekrresa"
								target="_blank"
								rel="noreferrer noopener"
							>
								GitHub
							</a>{' '}
							for cool stuff. For more on my work history, visit my{' '}
							<a
								href="https://www.linkedin.com/in/ochuko-ekrresa/"
								target="_blank"
								rel="noreferrer noopener"
							>
								LinkedIn
							</a>{' '}
							page.
						</motion.div>
						<motion.div variants={itemVariant} className="actions">
							<motion.a variants={leftButtonVariant} className="btn" href="#projects">
								{isNotMobile ? 'View my Projects' : 'Projects'}
							</motion.a>
							<motion.a
								variants={rightButtonVariant}
								className="btn"
								href="https://drive.google.com/file/d/1KdcDdmWYL87CHy2Q-2DGCS01FRIh_-cW/view?usp=sharing"
								target="_blank"
							>
								{isNotMobile ? 'Get my Resumé' : 'Resumé'}
							</motion.a>
						</motion.div>
					</motion.main>
				</Main>

				<Section id="about" className="about__section">
					<div className="container">
						<h2 className="section__header">About Me</h2>

						{/* https://www.drawkit.io/illustrations/entryway-monochrome */}
						<EntryWay className="about__background" />
						<div className="text">
							<p>
								Hi, I'm Ochuko Ekrresa, a software engineer currently based in Lagos,
								Nigeria. I have over two years experience of working in engineering teams,
								building world class products. I am highly proficient at writing
								well-designed, testable and efficient code using current best practices in
								web development.
							</p>
							<p>
								I also have some leadership experience training/mentoring engineers in the
								Decagon fellowship program who have gone on to world class engineers.
							</p>
							<p>
								I currently work with an engineering team at{' '}
								<a href="https://utu.io/" target="_blank" rel="noreferrer noopener">
									UTU Technologies
								</a>{' '}
								in Kenya, where I work on improving their ride hailing service.
							</p>
						</div>
					</div>
				</Section>

				<Section id="projects" className="projects__section">
					<div className="container">
						<h2 className="section__header">Projects</h2>

						<Project
							alignment="left"
							projectTitle="ANAP Foundation Admin Portal"
							imageAlt="star wars directory homepage"
							imagePublicID="v1620831017/personal/portfolio/kayzQTL_cnbpvx"
							projectDesc="An admin dashboard for monitoring activities on ANAP Foundation's Covid-19 project."
							stack={['React', 'PostgreSQL', 'Redux', 'React Testing Library']}
						/>

						<Project
							alignment="right"
							imageAlt="star wars directory homepage"
							imagePublicID="v1620830802/personal/portfolio/kH5eM1v_e4mkrd"
							projectDesc="A web app to explore the star wars mythology."
							projectLink="https://star-wars-five.now.sh/"
							projectTitle="Star Wars Directory"
							stack={['React', 'React Query', 'React Testing Library']}
							links={[
								{ url: 'https://star-wars-five.now.sh/', Icon: FiExternalLink },
								{
									url: 'https://github.com/chukky-ekrresa/star-wars-app',
									Icon: AiOutlineGithub,
								},
							]}
						/>
					</div>
				</Section>

				<Section id="contact" className="contact__section">
					<div className="container">
						<h2 className="section__header">contact me</h2>
						<div className="background">contact</div>

						<div className="text">
							<p>
								I'm currently on the lookout for new opportunities. Feel free to shoot me
								an email!. Whether you want to hire me, have a question or just want to
								say hi, I'll get back to you as soon as i can!
							</p>
						</div>
						<div style={{ marginTop: '2em' }}>
							<a className="btn contact__btn" href="mailto:ekrresaochuko@gmail.com">
								Say hi
							</a>
						</div>
					</div>
				</Section>
			</Body>

			<Footer />
		</>
	);
}

const Section = styled.section`
	position: relative;
	overflow: hidden;

	.background {
		color: rgba(91, 79, 79, 0.02);
		text-transform: uppercase;
		position: absolute;
		z-index: -10;
		top: -0.2em;
		font-size: 10rem;
		font-weight: 700;
	}

	.about__background {
		position: absolute;
		right: 0;
		top: 0;
		width: 28em;
		display: none;

		@media (min-width: 880px) {
			display: block;
		}
	}

	.section__header {
		font-size: 1.9rem;
		color: #006ccc;
		display: inline-block;
		text-transform: uppercase;
		border-bottom: 3px solid #006ccc;
	}

	.text {
		margin-top: 3em;
		max-width: 41em;

		p {
			line-height: 1.7;
			color: #094067;
			font-size: 1.1rem;
		}
	}

	.contact__btn {
		font-weight: 600;
		font-family: var(--font-fam-text);
		width: 11em;
		text-transform: uppercase;
		background: #006ccc;
		color: #fff;
		border-color: #006ccc;
		font-size: 0.9rem;
		padding: 0.9em 1.5em;
	}
`;

const Main = styled.section`
	min-height: 100vh;
	position: relative;
	overflow: hidden;

	.background {
		color: rgba(91, 79, 79, 0.02);
		text-transform: uppercase;
		font-size: 18rem;
		font-weight: 600;
		position: absolute;
		z-index: -10;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.main {
		margin-top: 5.5em;

		@media (min-width: 546px) {
			text-align: center;
		}

		.name {
			color: #006ccc;
			font-size: 2.8rem;
			font-weight: 600;
			margin: 0;
			line-height: 1.1;

			@media (min-width: 800px) {
				font-size: 4rem;
			}

			@media (min-width: 1000px) {
				font-size: 4.5rem;
			}
		}

		.title {
			color: #094067d6;
			font-size: 1.9rem;
			font-weight: 500;
			margin-top: 0.2em;
			margin-bottom: 0.7em;

			@media (min-width: 800px) {
				font-size: 2.5rem;
			}
		}

		.skills {
			display: flex;
			flex-wrap: wrap;
			line-height: 1.8;
			margin-bottom: 2em;
			font-family: var(--font-fam-heading);
			font-weight: 600;
			text-transform: uppercase;
			font-size: 1.2rem;
			color: #094067d6;
			text-shadow: 0px 4px 4px rgb(55 57 187 / 25%);

			@media (min-width: 546px) {
				justify-content: center;
			}

			.skill__item {
				margin-right: 1.5em;
				font-size: 1.1rem;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		.bio {
			line-height: 1.7;
			max-width: 50em;
			margin: auto;
			font-size: 1.1rem;
			color: #094067;
		}

		.actions {
			display: grid;
			grid-template-columns: auto auto;
			justify-content: flex-start;
			grid-gap: 1em;
			margin-top: 3.5em;

			@media (min-width: 546px) {
				justify-content: center;
			}

			a {
				font-weight: 600;
				font-family: var(--font-fam-text);
				width: 11em;
				text-transform: uppercase;
				background: #006ccc;
				color: #fff;
				border-color: #006ccc;
				font-size: 0.9rem;
				padding: 0.9em 1.5em;

				@media (min-width: 546px) {
					width: 14em;
				}
			}
		}

		@media (min-width: 880px) {
			margin-top: 7em;
		}
	}
`;
