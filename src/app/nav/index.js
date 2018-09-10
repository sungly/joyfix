import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: baseline;

    border-bottom: 1px solid #000;
`; 

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 100px;
    justify-content: space-between;
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

const Logo = styled.p`
    font-size: 30px;
    font-weight: 700; 
`;

const NavBar = () => {
    return (
        <Container>
            <Link to="/"><Logo>Joyfix</Logo></Link>
            <Menu>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </Menu>
        </Container>
    )
}

export default NavBar;