import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ed9b13; 
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #1F1F1F;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
`
const FormContainer = styled.form`
    display: inline-flex;
    justify-content: center;
    margin: 15px 50px;
`

const Buttons = styled.button`
    border: 2px solid #fff;
    background: #fff;
    border-radius: 30px;
    border-width: 2.5px;
    margin: 30px auto;
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #1f1f1f;
    font-weight: bold;
    font-size: 30px;
    
    &:hover{
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); 
    transform: translateY(-2px);
    }
`
const Agora = styled.p`
    display: flex;
    justify-content:center;
    margin-top: 30px;
    padding: auto;
    color: #1f1f1f;
    font-size: 30px;
    font-weight: bold;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
`
const Apoie = styled.p`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #1f1f1f;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.3);
    margin: 35px 0;
    font-size: 45px;
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
                        <Link to="/doar">
                            <Buttons>Doação</Buttons>
                        </Link>
                        <Link to="/junte-se">
                            <Buttons>Voluntariado</Buttons>
                        </Link>
                    </FormContainer>
            </FooterContainer>
        </div>
    )
};


export default Footer
