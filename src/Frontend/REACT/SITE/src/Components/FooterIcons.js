import React from 'react';
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const IconsContainer = styled.h1`
    font-size: 35px;
    color: #1f1f1f;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`

function FooterIcons(){
    return(
        <IconsContainer>
            <FaInstagram />
            <FaFacebook />
        </IconsContainer>
    )
}




export default FooterIcons