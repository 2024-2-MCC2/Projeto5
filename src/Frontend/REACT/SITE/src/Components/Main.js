import React from "react";
import styled from "styled-components"
import imagem from '../Assets/ProjetoNemias.png'

//SÓ NAO SABIA CRIAR VARIAVEIS PARA CORES


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
const MainContainer2 = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    justify-content: center;
    height: 300px;
    font-size: 20px;
    padding: 0 4em;
    background-color: #fff;
    color: #1f1f1f;
    text-shadow: 1px 1.15px rgba(0, 0, 0, 0.3);
    font-size: 25px;
    margin: 0px;
`
const MainContainer3 = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    text-align: justify;
    height: 300px;
    font-size: 20px;
    padding: 0 4em;
    background-color: #ED9B13;
    color: #fff;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.5);
    font-size: 25px;
    margin: 0px;
`

const TitulosContainer1 = styled.h1`
    font-size: 40px;
    /* text-shadow: 2px 2px rgba(0, 0, 0, 0.5); */
    color: #ED9B13;
`

const TitulosContainer2 = styled.h1`
    font-size: 40px;
    color: #ED9B13;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`
const TitulosContainer3 = styled.h1`
    font-size: 40px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
    color: #ED9B13;
`
const ImageContainer1 = styled.img`
    width:500px;
    height:426px;
    margin: 45px 90px;
    background-color:#eff1f3;

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
            
            <MainContainer2>
                <TitulosContainer2>Nossa Missão</TitulosContainer2>
                Contribuir para a transformação de cidadãos, por intermédio da Educação e Ações Socioeducativas que possibilitem a apropriação de autonomia de vida.
            </MainContainer2>

            <MainContainer3>
                <TitulosContainer3>Visão e Valores</TitulosContainer3>
                Contribuir como agentes transformadores na educação, sociabilizando e vínculos interpessoais e familiares, de crianças, jovens e adultos, pautados em princípios e valores cristãos, no acesso e informações de direito, gerando inclusão social, o despertar de potenciais e autonomia.
            </MainContainer3>
            
            

        
        </div>
    )
}

export default Main;