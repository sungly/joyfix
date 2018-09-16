import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 50px;

    font-size: 22px;
`;


const Link = styled(RouterLink)`
    text-decoration: none;
    &:visited {
        color: #000;
    }
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const Footer = () => {
    return (
       <Container>
           <Link to="/">Joyfix</Link>
           <Link to="/signup">Sign up</Link>
           <Link to="/contact">Contact us</Link>
       </Container>
    )
}

export default Footer;