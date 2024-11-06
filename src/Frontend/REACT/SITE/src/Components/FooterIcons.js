import React from 'react';
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const IconsContainer = styled.a`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 65px;
    font-size: 15px;
    color: #1f1f1f;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    height: 10px;
    background-color: #ED9B13;
`
const Reservados = styled.p`
    display:flex;
    flex-direction: column;
`
const Nomes = styled.p`
    display: flex;
    flex-Direction : column;
    justify-content:left;
    font-Size : 15px;
    color : black;
    background-color:#ED9B13;

`
const Link = styled.a`
    color: #1f1f1f;
    font-size: 15px;
    text-align: left;
`

const INSTAGRAM_URL = "https://www.instagram.com/bazarccpv/";

const FACEBOOK_URL = "https://www.facebook.com/capacitacaoparavida/";

const Icones = styled.b`
    display:flex;
    color: #1f1f1f;
    gap: 5px;
    font-size:35px;
`



function FooterIcons(){
    return(
        <>
        <IconsContainer>
                <Reservados>
                    © Direitos Reservados por CCPV
                    <Nomes>
                    <span><Link href="https://github.com/AntonioPetri" target="_blank" rel="noopener noreferrer">Antônio Petri Moraes</Link></span>
                    <span><Link href="https://github.com/danmoribe" target="_blank" rel="noopener noreferrer">Daniel Kyoshi Moribe</Link></span>
                    <span><Link href="https://github.com/paschoalha" target="_blank" rel="noopener noreferrer">Gabrel Higobassi Paschoal</Link></span>
                    <span><Link href="https://github.com/ThiagoAkira0" target="_blank" rel="noopener noreferrer">Thiago Akira Higa Mitami</Link></span>
                    <span><Link href="https://github.com/vitorzoken" target="_blank" rel="noopener noreferrer">Vitor Kenzo Kanashiro</Link></span>
                    
                </Nomes> 
                </Reservados> 
                
            <Icones>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <FaFacebook/>
                </a>
            </Icones>
        </IconsContainer>
        
        
            
        </>      
    )
}




export default FooterIcons