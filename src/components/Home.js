import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Home = () => (
    <Link to={'/1'}>
        <h1>Home</h1>
    </Link>
)

export default Home;