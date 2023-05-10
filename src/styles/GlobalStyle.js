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