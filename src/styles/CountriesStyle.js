import styled from "styled-components"

export const CountriesStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    background-color: ${(props) => props.theme.primary};
    font-size: 14px;
    font-weight: 300;

    @media only screen and (max-width: 768px) {
        gap: 2rem;
    }
`