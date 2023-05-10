import styled from "styled-components"

export const CardStyle = styled.article`
    background-color: ${(props) => props.theme.secondary};
    width: 16.5rem;
    border-radius: 5px;
    box-shadow: 0 0 1rem ${(props) => props.theme.shadow};

    div {
        padding: 2rem 1.75rem 2rem 1.75rem;
        line-height: 1.5rem;
    }

    span {
        font-weight: 600;
    }

    p:first-child {
        font-weight: 800;
        font-size: 1.25rem;
        padding-bottom: 1.15rem;
    }

    img {
        width: 100%;
        display: block;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
    }
`