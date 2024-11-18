import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'
import Logo from '../Assets/Quadrado-removebg-preview.png'
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
    text-decoration: none;
`

const LogoNav= styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
`

const HeaderContainer = styled.header`
    position: sticky;
    display: flex;
    justify-content:space-around;
    align-items: center;
    background-color: #fff;
    padding: 0.5em 5em;
    top: 0;
    z-index: 1000;
    transition: 0.5s ease;
`

    


function HeaderWithout (){
    return(
        <HeaderContainer>
            <LogoLink to="/">
                <LogoNav src={Logo} alt="Logo CCPV" />
            </LogoLink> 
            <NavBar />
        </HeaderContainer>
    )
}

export default HeaderWithout