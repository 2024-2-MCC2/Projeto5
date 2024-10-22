import React from "react";
import styled from "styled-components"
import imagem from '../Assets/ProjetoNemias.png'

const MainContainer1 = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow:1;
    justify-content: center;
    font-size: 20px;
    padding: 0 3em;
    background-color: #eff1f3; 
    color: #1f1f1f;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.5);
    font-size: 25px;
`
const Container1 = styled.div`
    display:flex;
    flex-grow:1;
    background-color:#eff1f3;
`

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
    background-color: #fff;
    margin: 25px auto;
    border-radius: 30px;
    width: 350px;
    height: 350px;
`

const TitulosContainer1 = styled.h1`
    font-size: 40px;
    /* text-shadow: 2px 2px rgba(0, 0, 0, 0.5); */
    color: #ED9B13;
`
const ImageContainer1 = styled.img`
    width:500px;
    height:426px;
    margin: 45px 90px;
    background-color:#eff1f3;
`
const TitulosContainer = styled.div`
    font-size: 30px;
    color: #ED9B13;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    margin-top: -10px;
    margin: 15px 0px;
    font-weight:bold;
`
const TextContainer = styled.p`
    display: flex;
    text-align: center;
    font-size: 20px;
    padding: 0 60px;
    width: 260px;
    color: #1f1f1f;
    text-shadow: 1px 1.15px rgba(0, 0, 0, 0.3);
    margin-top: -5px;
    margin: 0px 22px;
`
const Textos = styled.div`
    display: flex;
    justify-content: center;
    background-color: #eff1f3;
    text-align: center;
    font-size: 20px;
    padding: 0 60px;
    color: #1f1f1f;
    text-shadow: 1px 1.15px rgba(0, 0, 0, 0.3);
`

const IconsContainer = styled.h1`
    font-size: 35px;
    color: #1f1f1f;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`


function Main() {
    return (
        <div>
            <Container1>
            <ImageContainer1 src = {imagem} alt = "Projeto Nemias" title = "Projeto Nemias"/>
            <MainContainer1>
                <TitulosContainer1>Projeto Nemias</TitulosContainer1>
                Tem como objetivo promover a assistência social, através do desenvolvimento de projetos, desportivos, culturais, artísticos e educacionais. Priorizando o atendimento de crianças, adolescentes, jovens e adultos, em vulnerabilidade social. Oferecendo acolhimento provisório e excepcional para adultos, possibilitando a reinserção no mercado de trabalho e núcleo familiar.
            </MainContainer1>
            </Container1>
            
            <Textos>
            <MainContainer>
                <IconsContainer>Icon</IconsContainer>
                <TitulosContainer>Missão</TitulosContainer>
                <TextContainer>
                Contribuir para a transformação de cidadãos, por intermédio da Educação e Ações Socioeducativas que possibilitem a apropriação de autonomia de vida.
                </TextContainer>
            </MainContainer>

            <MainContainer>
                <IconsContainer>Icon</IconsContainer>
                <TitulosContainer>Visão</TitulosContainer>
                <TextContainer>
                Princípios e valores cristãos, no acesso e informações de direito, gerando inclusão social, o despertar de potenciais e autonomia.
                </TextContainer>
            </MainContainer>

            <MainContainer>
                <IconsContainer>Icon</IconsContainer>
                <TitulosContainer>Valores</TitulosContainer>
                <TextContainer>
                Contribuir como agentes transformadores na educação, sociabilizando e vínculos interpessoais e familiares, de crianças, jovens e adultos.
                </TextContainer>
            </MainContainer>
            </Textos>
        </div>
    )
}

export default Main;