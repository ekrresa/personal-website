import { useEffect } from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

interface Props {
	navStatus: boolean;
	handleNav: () => void;
	navList: Array<{
		url: string;
		text: string;
	}>;
}

export function Hamburger({ navStatus = false, handleNav, navList }: Props) {
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;

		if (navStatus) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = originalStyle;
		}

		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [navStatus]);

	return (
		<StyledHamburger navOpen={navStatus}>
			<CgClose className="close" onClick={() => handleNav()} />

			<ul className="menu__list">
				{navList.map(navItem => (
					<li key={navItem.text}>
						<a href={navItem.url} onClick={() => handleNav()}>
							{navItem.text}
						</a>
					</li>
				))}

				<li>
					<a
						className="btn resume__btn"
						href="https://drive.google.com/file/d/1KdcDdmWYL87CHy2Q-2DGCS01FRIh_-cW/view?usp=sharing"
						target="_blank"
						rel="noreferrer noopener"
					>
						Resumé
					</a>
				</li>
			</ul>
		</StyledHamburger>
	);
}

const StyledHamburger = styled.aside<{ navOpen: boolean }>`
	width: 100%;
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	background: #d8eefe;
	box-shadow: -8px 0 21px 0px #1f404c4f;
	margin-block-start: 0;
	transition: clip-path 1s ease-out;
	clip-path: ${({ navOpen }) =>
		navOpen ? 'circle(120vh at 90% 12%)' : 'circle(81px at 90% -20%)'};
	z-index: 5;

	.close {
		font-size: 2.5rem;
		margin-left: auto;
		display: block;
		margin-right: 0.5em;
		margin-top: 0.6em;
		color: #232946;
		cursor: pointer;
	}

	.menu__list {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		padding: 0;

		li {
			padding: 0.5em;
			margin-bottom: 1em;
			font-size: 1.1rem;
			text-transform: uppercase;

			&:last-child {
				margin-bottom: 0;
			}

			a {
				color: #094067;
				font-family: var(--font-fam-text);
				font-weight: 500;
			}
		}

		.resume__btn {
			font-weight: 700;
			font-family: var(--font-fam-text);
			width: 11em;
			text-transform: uppercase;
			background: #006ccc;
			color: #fff;
			border-color: #006ccc;
			font-size: 0.9rem;
			padding: 0.9em 1.5em;
		}
	}
`;
