import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Hamburger } from '../Hamburger';
import Logo from '../../public/logo.svg';

type NavProps = {
	homeUrl: string;
	navList: {
		url: string;
		text: string;
	}[];
};

const listVariant = {
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
			staggerChildren: 0.1,
		},
	},
};

const itemVariant = {
	hidden: { opacity: 0, y: -30 },
	visible: { opacity: 1, y: 0, transition: { type: 'tween' } },
};

export function NavBar(props: NavProps) {
	const [nav, toggleNav] = React.useState(false);

	const { homeUrl, navList } = props;

	return (
		<StyledHeader className="nav__container">
			<div className="logo">
				<Link href={homeUrl} passHref>
					<a>
						<Logo className="logo__icon" />
					</a>
				</Link>
			</div>

			{/* Mobile menu */}
			<div className="hamburger__btn" onClick={() => toggleNav(!nav)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<Hamburger navStatus={nav} handleNav={() => toggleNav(!nav)} navList={navList} />
			{/* Mobile menu */}

			<motion.nav
				initial="hidden"
				animate="visible"
				variants={listVariant}
				className="nav"
			>
				{navList.map(item => (
					<motion.div variants={itemVariant} key={item.url} className="nav__item">
						<Link href={item.url}>{item.text}</Link>
					</motion.div>
				))}
			</motion.nav>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1.5em;
	padding-bottom: 1.5em;

	.logo {
		a {
			font-weight: 700;
			font-family: var(--font-fam-text);
			color: inherit;
			-webkit-text-stroke-width: 1.5px;

			&:hover {
				--d: none;
			}
		}

		.logo__icon {
			width: 3.5rem;
		}
	}

	.nav {
		display: none;
		align-items: center;
		color: #0e5e97;
		text-transform: uppercase;

		.nav__item {
			margin-right: 2em;

			a {
				color: inherit;
				font-family: var(--font-fam-text);
			}

			&:last-child {
				margin-right: 0;
			}
		}

		@media (min-width: 546px) {
			display: flex;
		}
	}

	/* Hamburger Styles */
	.hamburger__btn {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-between;
		width: 2.9em;
		height: 1.4em;
		cursor: pointer;
		padding: 0px 8px;

		span {
			display: block;
			border-radius: 10px;
			background: #0e5e97;
			padding: 1.5px;

			&:nth-of-type(1) {
				width: 100%;
			}

			&:nth-of-type(2) {
				width: 80%;
			}

			&:nth-of-type(3) {
				width: 65%;
			}
		}

		@media (min-width: 546px) {
			display: none;
		}
	}
`;
