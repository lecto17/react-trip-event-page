import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Card from '../components/Card';
import home from '../img/home.png';

const Home = () => {
    return (
        <div>
            <IMG src={home}/>
            {/* <Button/>
            <Card/> */}
        </div>
    )
}

const IMG = styled.img`
    max-width: 100%;
    height: auto;
`;

export default Home;