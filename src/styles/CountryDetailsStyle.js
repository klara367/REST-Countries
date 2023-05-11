import styled from "styled-components"
import { Link } from "react-router-dom"

export const CountryDetailsStyle = styled.div`
    span {
        font-weight: 600;
    }

    h2 {
        font-size: 2rem;
        padding-bottom: 1.5rem;

        @media only screen and (max-width: 1024px) and (min-width: 768px) {
            text-align: center;
        }
    }
`

export const ShowDetailsStyle = styled.div`
    display: flex;
    gap: 7rem;
    align-items: center;

    @media only screen and (max-width: 1023px) {
        flex-direction: column;
        gap: 2rem;
    }

    img {
        width: 550px; 
        height: 350px;

        @media only screen and (max-width: 768px) {
            max-width: 100%;
            height: inherit;
        }
    }
`

export const FlexInfoStyle = styled.div`
    display: flex;
    gap: 7rem;
    line-height: 2rem;

    @media only screen and (max-width: 1279px) {
        flex-direction: column;
        gap: 1rem;
    }

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 5rem;
    }
`

export const BorderCountriesWrapperStyle = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 4.5rem;

    ul {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;   
    }
`

export const BorderBtnsStyle = styled(Link)`
    padding: 0.5rem 1.25rem;
    box-shadow: 0 0 0.5rem 0.25rem ${(props) => props.theme.shadow};
    background-color: var(--white);
    border-radius: 5px;

    &:hover,
    &:active {
        box-shadow: 0 0 0.7rem 0.5rem ${(props) => props.theme.shadow};
    }
`