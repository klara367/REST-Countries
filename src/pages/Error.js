import { BackBtnStyle } from "../styles/BackBtnStyle"
import { ErrorStyle } from "../styles/ErrorStyle"

const Error = () => {
    return (
        <ErrorStyle>
            <div>
                <p>Page not found</p>
                <h2>404</h2>
                <BackBtnStyle to={"/"}>Back to homepage</BackBtnStyle>
            </div>
        </ErrorStyle>
    )
}

export default Error