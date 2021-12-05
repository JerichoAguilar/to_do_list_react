import styled from "styled-components"

const Button = styled.button`
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.125);
    background-color: ${props => props.bgcolor || "transparent"};
    border:none;
    border-radius:4px;
    padding:0.25rem 1rem;
    color: ${props => props.textcolor || "black"};
    font-weight: bold;
    margin: 2rem;
    display:block;
`

const ProviderButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:0.5rem;
    img{
        border: 1px solid grey;
    }
`

export {Button, ProviderButton}