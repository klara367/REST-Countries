import styled from "styled-components"

export const SearchFilterStyle = styled.div`
    padding: 3rem 3rem 3.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1.5rem 2.5rem 1.5rem;
        align-items: flex-start;
    }

    div {
        box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
        background-color: ${(props) => props.theme.secondary};
        border-radius: 3px;
        display: flex;
        align-items: center;
        padding-left: 1rem;

        @media only screen and (max-width: 768px) {
            width: 75%;
        }

        @media only screen and (max-width: 480px) {
            width: 100%;
        }
    }

    input {
        border: none;
        padding: 1rem;
        background-color: ${(props) => props.theme.secondary};
        font-size: 1rem;
        border-radius: 3px;
        outline: transparent;
        width: 25rem;

        ::placeholder {
            color: ${(props) => props.theme.text};
        }

        @media only screen and (max-width: 768px) {
            width: 75%;
        }

        @media only screen and (max-width: 480px) {
            width: 100%;
        }
    }

    select {
        border: none;
        outline: transparent;
        padding: 1rem;
        border-radius: 3px;
        background-color: ${(props) => props.theme.secondary};
        box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
        font-size: 1rem;
        width: 12rem;
    }
`