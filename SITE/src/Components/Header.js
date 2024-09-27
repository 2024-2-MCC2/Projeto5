import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'
import Logo from '../Assets/Quadrado-removebg-preview.png'

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
    padding: 1em 5em;
    top: 0;
    z-index: 1000;
    background-color: transparent;
    transition: 0.5s ease;
`

const Rolagem = styled(HeaderContainer)`
    background-color: #fff;
    padding: 0.5em 5em;
`
    


function Header (){
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const funcaoScroll = () => {
            setIsScrolled(window.scrollY > 500);
        };

        window.addEventListener('scroll', funcaoScroll);

        // Limpar o evento ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', funcaoScroll);
        };
    }, []);


    return(
        <>{isScrolled ? (
            <Rolagem>
                <LogoNav src={Logo} alt="Logo CCPV" />
                <NavBar />
            </Rolagem>
        ) : (
            <HeaderContainer>
                <LogoNav src={Logo} alt="Logo CCPV" />
                <NavBar />
            </HeaderContainer>
        )}</>
    )
}

export default Header