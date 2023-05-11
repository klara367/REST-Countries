import styled from "styled-components"

export const SearchFilterStyle = styled.div`
    padding-block: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        padding-block: 2rem 2.5rem;
        align-items: flex-start;
    }

    div, input, select {
        background-color: ${(props) => props.theme.secondary};
    }

    div, input {
        @media only screen and (max-width: 768px) {
            width: 75%;
        }

        @media only screen and (max-width: 480px) {
            width: 100%;
        }
    }

    div, select {
        box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
    }
    
    select, input {
        border: none;
        padding: 1rem;
        outline: transparent;
        border-radius: 3px;
        font-size: 1rem;
    }

    div {
        border-radius: 3px;
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }

    input {
        width: 25rem;
    }

    select {
        width: 12rem;
    }
`