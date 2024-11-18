import React from "react";
import styled from "styled-components";
import LogoGrande from '../Assets/Thumbnail.png'

// AQUI VAI SER SUBSTITUIDO PELO CARROSSEL


const LogoPágina= styled.img`
    background: url(${LogoGrande});
    width: 1200px;
    height: 519px;
    opacity: 50%;
    
`

function Logo(){
    return(
        <LogoPágina/>
    )
}

export default Logo;