import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Cor = styled.div`
    background-color: #ed9b13; 
`

const Container = styled.div`
    display: flex;
    padding: 5px;
    justify-content: space-between;
    margin: auto;
`

const ButtonLink = styled(Link)`
    text-decoration: none;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-right:150px;
    color: #1F1F1F;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
`

const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 6em;
`

const Buttons = styled.button`
    border: 2px solid #fff;
    border-radius: 30px;
    border-width: 2.5px;
    margin: 30px auto;
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #1f1f1f;
    font-weight: bold;
    font-size: 20px;
    background-color: #fff;

    
    &:hover{
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); 
    transform: translateY(-2px);
    }
`
const Agora = styled.p`
    color: #1f1f1f;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
`
const Apoie = styled.p`
    color: #1f1f1f;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
    margin: 0;
    font-size: 35px;
    color: #fff;
`

const Reservados = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

const Nomes = styled.p`
    display: flex;
    flex-Direction : column;
    justify-content:left;
    font-Size : 16px;
    color : black;
    background-color:#ED9B13;

`


const Links = styled.a`
    color: #1f1f1f;
    font-size: 17px;
    text-align: left;
`
const IconsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: end;
    font-size: 15px;
    color: #1f1f1f;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`

const INSTAGRAM_URL = "https://www.instagram.com/bazarccpv/";

const FACEBOOK_URL = "https://www.facebook.com/capacitacaoparavida/";


const IconesLink = styled.a`
    text-decoration: none;
    color: #1f1f1f;
    font-size:35px;

`

const Icones = styled.div`
    display:flex;
    gap: 5px;
`



function Footer(){
    return(
        <Cor>
            <Container>
                <Reservados>            
                <Nomes>
                    <Links href="https://github.com/AntonioPetri" target="_blank" rel="noopener noreferrer">Antônio Petri e Oliveira</Links>
                    <Links href="https://github.com/danmoribe" target="_blank" rel="noopener noreferrer">Daniel Kyoshi Moribe</Links>
                    <Links href="https://github.com/paschoalha" target="_blank" rel="noopener noreferrer">Gabrel Higobassi Paschoal</Links>
                    <Links href="https://github.com/ThiagoAkira0" target="_blank" rel="noopener noreferrer">Thiago Akira Higa Mitami</Links>
                    <Links href="https://github.com/vitorzoken" target="_blank" rel="noopener noreferrer">Vitor Kenzo Kanashiro</Links>     
                </Nomes> 
                    © Direitos Reservados por CCPV
                </Reservados> 
                <FooterContainer>
                    <Agora>E AGORA? </Agora>
                    <Apoie>Apoie Nossa Missão</Apoie>
                    <FormContainer>
                        <ButtonLink to="/apoiar">
                            <Buttons>Apoiar</Buttons>
                        </ButtonLink>
                    </FormContainer>
                </FooterContainer>
                <IconsContainer>       
                    <Icones>
                        <IconesLink href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                        <FaInstagram/>
                        </IconesLink>
                        <IconesLink href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                        <FaFacebook/>
                        </IconesLink>
                    </Icones>
                </IconsContainer>
            </Container>
        </Cor>
    )
};


export default Footer
