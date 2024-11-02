import React from 'react';
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const IconsContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4px;
    color: #1f1f1f;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    height: 10px;
    background-color:   #ED9B13;
`

function FooterIcons(){
    return(
        <>
            <IconsContainer>
                <FaInstagram />
                <FaFacebook />
            </IconsContainer>
        </>      
    )
}




export default FooterIcons