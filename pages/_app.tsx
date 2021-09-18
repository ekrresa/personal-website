import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: inherit;
    font-size: inherit;
    box-sizing: inherit;
    text-decoration: none;
    line-height: inherit;
  }

  html {
    box-sizing: border-box;
		scroll-behavior: smooth;
		--font-fam-heading: 'Work Sans', sans-serif;
		--font-fam-code: 'Source Code Pro', monospace;
		--font-fam-text: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
		"Helvetica Neue", Arial, sans-serif;

		--body-background:#fffffe;
		--color-link:#6366f1;
		--dull-blue:#094067;
		--article-text:#374151
		--bright-blue:#d8eefe
		--burnt-red:#ee495c;
  }

  body {
    font-family: var(--font-fam-text);
		background: var(--body-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
		overflow-x: hidden;
  }

	h1,h2,h3,h4,h5,h6 {
		font-family: var(--font-fam-heading)
	}

  img {
    max-width: 100%;
		height: auto;
    object-fit: cover;
  }

	a {
		color: var(--color-link);
		font-weight: 600;
		font-family: var(--font-fam-heading);
		text-decoration:none;
		background: linear-gradient(currentColor 0 0) bottom /var(--d, 0) 2px no-repeat;
		transition:0.5s;
		padding-bottom: 1px;

		&:hover{
			 --d: 100%;
		}
	}

	a.btn {
		background: inherit;
		color: var(--dull-blue);
		font-family: var(--font-fam-text);
		padding: 0.7em;
		border-radius: 5px;
		border: 1px solid;
		cursor: pointer;
		display: inline-block;
		text-align: center;

		&:hover {
			box-shadow: none;
		}

		:last-child {
			margin-right: 0;
		}
	}

  .container {
    width: 100%;
    max-width: 82em;
    margin: 0 auto;
    padding-left: 1em;
    padding-right: 1em;
		position: inherit;
  }

	.nav__container {
		width: 100%;
    max-width: 82em;
    margin: 0 auto;
    padding-left: 1em;
    padding-right: 1em;
	}
`;
