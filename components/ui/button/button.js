import styled from "styled-components"

const ButtonBase = styled.button`
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.125);
    background-color: transparent;
    border:none;
    border-radius:4px;
    padding:0.25rem 1rem;
    color: #444;
    font-weight: bold;
    margin: 2rem;
    display:block;
`


function Button ({children, ...props}){
    return(
        <ButtonBase>{children}</ButtonBase>
    )
}

export default Button