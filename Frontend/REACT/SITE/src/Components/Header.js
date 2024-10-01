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
    position: fixed;
    display: flex;
    justify-content:space-around;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: 0.5s ease;
    background-color: ${({ isRolagem }) => (isRolagem ? '#fff' : 'transparent')};
    padding: ${({ isRolagem }) => (isRolagem ? '0.5em 5em' : '1em 5em')};
`

    


function Header() {
    const [isRolagem, setIsRolagem] = useState(false);
  
    function handleScroll(){
      if (window.scrollY > 500) {
        setIsRolagem(true);
      } else {
        setIsRolagem(false);
      }
    };
  
    useEffect(function(){
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div>
        <HeaderContainer isRolagem={isRolagem}>
            <LogoLink to="/">
                <LogoNav src={Logo} alt="Logo CCPV" />
            </LogoLink> 
            <NavBar />
        </HeaderContainer>
      </div>
    );
  }

export default Header