import styled from 'styled-components';

export const Article = styled.article`
	margin: auto;
	color: #374151;
	font-weight: 400;
	margin-top: 5em;
	padding-bottom: 10em;
	display: grid;
	grid-template-columns: 1fr min(80ch, 100%) 1fr;

	h2 {
		font-size: 2rem;
		font-weight: 500;
		color: #094067;
		font-family: var(--font-fam-text);

		strong {
			font-size: 2rem;
			font-weight: 600;
			color: #094067;
		}
	}

	.back__to__articles {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin-bottom: 0.4em;
		color: #094067;
		cursor: pointer;
	}

	.heading {
		font-size: 2.5rem;
		font-weight: 600;
		margin-top: 0;
		margin-bottom: 0.4em;
		color: #094067;
		font-family: var(--font-fam-text);
	}

	.post__date {
		margin-bottom: 5em;
		color: rgb(156, 163, 175);
	}

	.body {
		max-width: 68ch;
		margin: auto;
		line-height: 1.6;
		font-size: 1.15rem;

		a {
			color: #4f46e5;
			font-weight: 500;
		}

		blockquote {
			font-size: 1.4rem;
			margin: 50px auto;
			font-style: italic;
			color: #555555;
			padding: 0.4em 0.4em 0.4em 0.8em;
			border-left: 8px solid #7389ae;
			line-height: 1.6;
			position: relative;
			background: #ededed;
		}

		code {
			background: #f3f3f3;
			font-family: var(--font-fam-code);
			border-radius: 6px;
			padding: 0.2em 0.4em;
		}
	}
`;
