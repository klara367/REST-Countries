import { Outlet } from "react-router-dom"

const Layout = () => {

    return (

            <header>
                <h1>Where in the world?</h1>
                <button>Dark Mode</button>
                <Outlet />
            </header>

    )
}

export default Layout