import React from 'react';
import styled from 'styled-components';

import Register from '../images/registration.png'
import RequestService from '../images/video-conference.png'
import FixCar from '../images/lift.png'
import Pay from '../images/credit-card.png'

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.p`
    font-size: 50px;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;

    margin-bottom: 120px;
`;

const Image = styled.img`
    width: 80%;
    height: 200px;
`;

const P = styled.p`
    font-size: 30px;
`;

const GetStarted = () => {
    return (
        <React.Fragment>
            <Title>How To Get Started</Title>

            <Container>
                <ImageContainer>
                    <Image src={Register} alt="register for an account"/>
                    <P>Register</P>
                </ImageContainer>
                <ImageContainer>
                    <Image src={RequestService} alt="request a service"/>
                    <P>Request a service</P>
                </ImageContainer>
                <ImageContainer>
                    <Image src={FixCar} alt="service fix"/>
                    <P>Wait for a mechanic to fix your car</P>
                </ImageContainer>
                <ImageContainer>
                    <Image src={Pay} alt="pay when done"/>
                    <P>Pay when you're happy!</P>
                </ImageContainer>
            </Container>
        </React.Fragment>
        
    )
}

export default GetStarted;