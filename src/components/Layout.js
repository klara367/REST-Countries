import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "../styles/GlobalStyle"
import { HiOutlineMoon } from "react-icons/hi"
import { HeaderStyle } from "../styles/HeaderStyle"

const Layout = () => {
    const [activeTheme, setActiveTheme] = useState(lightTheme)

    const switchTheme = () => {
        activeTheme === lightTheme ? setActiveTheme(darkTheme) : setActiveTheme(lightTheme)
    }

    return (
        <ThemeProvider theme={activeTheme}>
            <GlobalStyle />
            <HeaderStyle>
                <h1>Where in the world?</h1>
                <button onClick={switchTheme}><HiOutlineMoon />Dark Mode</button>
            </HeaderStyle>
            <Outlet />
        </ThemeProvider>
    )
}

export default Layout