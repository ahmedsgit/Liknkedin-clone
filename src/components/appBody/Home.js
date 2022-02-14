import React from 'react'
import styled from 'styled-components';
import Advertise from './Advertise';
import Layout from './Layout';
import Header from './Header';

function Home() {
    return (
        <Feeds>
            <Header/>
            <Advertise />
            <Layout />
        </Feeds>

    )
}

const Feeds = styled.div`
    position:relative;
    background-color: #f5f5f5;
    height: 100vh;
    min-width:100%;
`;
export default Home