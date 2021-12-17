import Link from "next/link";
import styled from 'styled-components'

const LinksContainer = styled.div`
width: 50%;
display: flex;
margin: 2rem auto;
justify-content: center;
a{
    color: crimson;
    padding: 2rem;
}

`;

function index(props) {


    return(
        <>
        <header>
            <h1>To Do List App</h1>
            <LinksContainer>
                <Link href="/login">
                    <a>Login</a>
                    </Link>
                <Link href="/login">
                    <a>Sign Up</a>
                </Link>
            </LinksContainer>
        </header>
        </>
    );
}

export default index;