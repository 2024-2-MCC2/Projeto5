import React from "react";
import styled from "styled-components"
import imagem from '../Assets/ProjetoNemias.png'
import { FaEye } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Container = styled.div`
    background-color:#eff1f3;

`

const MainContainer1 = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3em;
    color: #1f1f1f;
    font-size: 20px;
    text-align: justify;
`
const Container1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 60px;
    padding: 60px 125px;
`

const TitulosContainer1 = styled.h1`
    font-size: 30px;
    color: #ED9B13;
`

const ImageContainer1 = styled.img`
    width:500px;
    height:auto;
    border-radius: 30px;
`

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
    background-color: #fff;
    margin: 25px auto;
    border-radius: 30px;
    font-size: 12px;
    width: 320px;
    height: 320px;
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
    font-size: 18px;
    padding: 0 60px;
    width: 260px;
    color: #1f1f1f;
    margin-top: -5px;
    margin: 0px 22px;
`
const Textos = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    padding: 0 60px;
    color: #1f1f1f;
`

const IconsContainer = styled.h1`
    font-size: 35px;
    color: #1f1f1f;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`


function Main() {
    return (
        <Container>
            <Container1>
                <ImageContainer1 src = {imagem} alt = "Projeto Nemias" title = "Projeto Nemias"/>
                <MainContainer1>
                    <TitulosContainer1>Projeto Nemias</TitulosContainer1>
                    Tem como objetivo promover a assistência social, através do desenvolvimento de projetos, desportivos, culturais, artísticos e educacionais. Priorizando o atendimento de crianças, adolescentes, jovens e adultos, em vulnerabilidade social. Oferecendo acolhimento provisório e excepcional para adultos, possibilitando a reinserção no mercado de trabalho e núcleo familiar.
                </MainContainer1>
            </Container1>
            
            <Textos>
            <MainContainer>
                <IconsContainer><MdRocketLaunch/></IconsContainer>
                <TitulosContainer>Missão</TitulosContainer>
                <TextContainer>
                Contribuir para a transformação de cidadãos, por intermédio da Educação e Ações Socioeducativas que possibilitem a apropriação de autonomia de vida.
                </TextContainer>
            </MainContainer>

            <MainContainer>
                <IconsContainer><FaEye/></IconsContainer>

                <TitulosContainer>Visão</TitulosContainer>
                <TextContainer>
                Princípios e valores cristãos, no acesso e informações de direito, gerando inclusão social, o despertar de potenciais e autonomia.
                </TextContainer>
            </MainContainer>

            <MainContainer>
                <IconsContainer><BsFillPatchCheckFill/></IconsContainer>
                <TitulosContainer>Valores</TitulosContainer>
                <TextContainer>
                Contribuir como agentes transformadores na educação, sociabilizando e vínculos interpessoais e familiares, de crianças, jovens e adultos.
                </TextContainer>
            </MainContainer>
            </Textos>
        </Container>
    )
}

export default Main;