import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'



const NavBarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`

const Menu = styled(Link)`
  display: flex;
  align-items: center; 
  font-weight: bold;
  font-size: 18px;
  padding: 0.5em;
  position: relative;
  color: #1f1f1f;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1f1f1f; /* Use uma cor padrão */
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.35s ease;
    top: 30px;

  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }

`



function NavBar(){
    return(
      <div>
        <gridContainer/>
        <NavBarContainer>
            <Menu to="/">Home</Menu>
            <Menu to="/sobre-nos">Sobre Nós</Menu>
            <Menu to="/projetos">Nossos Projetos</Menu>
            <Menu to="/doar">Doar</Menu>
            <Menu to="/junte-se">Junte-se a Nós</Menu>
            <Menu to="/contato">Contato</Menu>
        </NavBarContainer>
        </div>
    )
}




export default NavBar;