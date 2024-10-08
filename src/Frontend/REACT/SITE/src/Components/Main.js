import React from "react";
import styled from "styled-components"


//SÓ NAO SABIA CRIAR VARIAVEIS PARA CORES

const MainContainer13 = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
    height: 300px;
    font-size: 20px;
    padding: 0 4em;
    background-color: #ED9B13;
    color: #fff;
    text-shadow: 1px 1.2px rgba(0, 0, 0, 0.5);
    font-size: 25px;

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

`

const TitulosContainer13 = styled.h1`
    font-size: 40px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`

const TitulosContainer2 = styled.h1`
    font-size: 40px;
    color: #ED9B13;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`





function Main() {
    return (
        <div>
            <MainContainer13>
                <TitulosContainer13>Projeto Nemias</TitulosContainer13>
                Tem como objetivo promover a assistência social, através do desenvolvimento de projetos, desportivos, culturais, artísticos e educacionais. Priorizando o atendimento de crianças, adolescentes, jovens e adultos, em vulnerabilidade social. Oferecendo acolhimento provisório e excepcional para adultos, possibilitando a reinserção no mercado de trabalho e núcleo familiar.
            </MainContainer13>
            
            <MainContainer2>
                <TitulosContainer2>Nossa Missão</TitulosContainer2>
                Contribuir para a transformação de cidadãos, por intermédio da Educação e Ações Socioeducativas que possibilitem a apropriação de autonomia de vida, na construção de vínculos interpessoais e familiares, além de despertar de capacidades de realização pessoal e social.
            </MainContainer2>

            <MainContainer13>
                <TitulosContainer13>Visão e Valores</TitulosContainer13>
                Contribuir como agentes transformadores na educação, sociabilizando e vínculos interpessoais e familiares, de crianças, jovens e adultos, pautados em princípios e valores cristãos, no acesso e informações de direito, gerando inclusão social, o despertar de potenciais e autonomia.
            </MainContainer13>
            
            

        
        </div>
    )
}

export default Main;