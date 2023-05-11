import styled from "styled-components"

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
    padding: 1.5rem 3rem;
    background-color: ${(props) => props.theme.secondary};

    @media only screen and (max-width: 768px) {
        padding: 2rem;
    }
    

    button {
        border: transparent;
        background-color: inherit;
        cursor: pointer;
        font-weight: 800;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        @media only screen and (max-width: 768px) {
            font-size: 0.75rem;
        }
    }

    h1 {
        font-size: 1.5rem;

        @media only screen and (max-width: 768px) {
            font-size: 1.25rem;
        }
    }
`