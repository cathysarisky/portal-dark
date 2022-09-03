export const GlobalStyles = `
    /* Colors
    /* ----------------------------------------------------- */
    :root {

        --red: #f02525;
        --yellow: #FFDC15;
        --green: #7FC724;
        --black: #fff!important;
        --grey0: #fbfbfb!important;
        --grey1: #f9f9f9!important;
        --grey2: #eaeaea!important;
        --grey3: #e1e1e1!important;
        --grey4: #dcdcdc!important;
        --grey5: #c5c5c5!important;
        --grey6: #aeaeae!important;
        --grey7: #979797!important;
        --grey8: #7f7f7f!important;
        --grey9: #686868!important;
        --grey10: #515151!important;
        --grey11: #3d3d3d!important;
        --grey12: #474747!important;
        --grey13: #333!important;
        --grey14: #1d1d1d!important;
        --white: #000!important;
    }

    /* Globals
    /* ----------------------------------------------------- */
    html {
        font-size: 62.5%;
        height: 100%;
    }

    body {
        margin: 0px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 1.6rem;
        height: 100%;
        line-height: 1.6em;
        font-weight: 400;
        font-style: normal;
        color: var(--grey2);
        box-sizing: border-box;
        overflow: hidden;
    }

    button,
    button span {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p {
        line-height: 1.15em;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 35px;
        font-weight: 700;
        letter-spacing: -0.022em;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.021em;
    }

    h3 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.019em;
    }

    p {
        font-size: 15px;
        line-height: 1.5em;
        margin-bottom: 24px;
    }

    strong {
        font-weight: 600;
    }

    a,
    .gh-portal-link {
        cursor: pointer;
    }

    svg {
        box-sizing: content-box;
    }

    input,
    textarea {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 1.5rem;
    }

    textarea {
        padding: 10px;
        line-height: 1.5em;
    }

    @media (max-width: 1440px) {
        h1 {
            font-size: 32px;
            letter-spacing: -0.022em;
        }

        h2 {
            font-size: 28px;
            letter-spacing: -0.021em;
        }

        h3 {
            font-size: 26px;
            letter-spacing: -0.02em;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 30px;
            letter-spacing: -0.021em;
        }

        h2 {
            font-size: 26px;
            letter-spacing: -0.02em;
        }

        h3 {
            font-size: 24px;
            letter-spacing: -0.019em;
        }
    }
`;

export default GlobalStyles;