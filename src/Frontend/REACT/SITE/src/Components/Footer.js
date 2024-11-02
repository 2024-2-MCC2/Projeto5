import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import FooterIcons from './FooterIcons'

const ButtonLink = styled(Link)`
    text-decoration: none;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ed9b13; 
    align-items: center;
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
    padding: auto;
    color: #1f1f1f;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
`
const Apoie = styled.p`
    text-align: center;
    color: #1f1f1f;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
    margin: 0;
    font-size: 35px;
    color: #fff;
    text-align: center;
`

function Footer(){
    return(
        <div>
            <FooterContainer>
                <Agora>E AGORA? </Agora>
                <Apoie>Apoie Nossa Missão</Apoie>
                <FormContainer>
                    <ButtonLink to="/doar">
                        <Buttons>Doação</Buttons>
                    </ButtonLink>
                    <ButtonLink to="/junte-se">
                        <Buttons>Voluntariado</Buttons>
                    </ButtonLink>
                </FormContainer>
            </FooterContainer>
            <FooterIcons/>  
        </div>
    )
};


export default Footer
