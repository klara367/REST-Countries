import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: ${(props) => props.theme.text};
        font-family: 'Nunito Sans', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.primary};
    }

    main {
        padding-inline: 3rem;
        padding-bottom: 2.5rem;

        @media only screen and (max-width: 768px) {
            padding-inline: 2rem;
        }
    }

    li {
        list-style-type: none;
    }
`

export const darkTheme = {
    primary: "#202c37",
    secondary: "#2b3945",
    text: "#fafafa",
    shadow: "#19232b",
}

export const lightTheme = {
    primary: "#fafafa",
    secondary: "#fff",
    text:"#202c37",
    shadow: "#e8e8e8",
}