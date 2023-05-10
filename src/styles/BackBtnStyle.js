import styled from "styled-components"
import { Link } from "react-router-dom"

export const BackBtnStyle = styled(Link)`
    padding: 0.7rem 1rem;
    box-shadow: 0 0 0.5rem 0.25rem ${(props) => props.theme.shadow};
    background-color: ${(props) => props.theme.secondary};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover,
    &active {
        box-shadow: 0 0 0.7rem 0.5rem ${(props) => props.theme.shadow};
    }

    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`

export const BtnWrapperStyle = styled.div`
    padding: 4.5rem 3rem;
    width: 13rem;

    @media only screen and (max-width: 768px) {
        padding: 3rem 1.5rem;
        width: 10rem;
    }
`