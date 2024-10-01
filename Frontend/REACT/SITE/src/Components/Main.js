import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import GeracaoSamuel from '../Assets/imagem_02.png'
import GeracaoFuturo from '../Assets/imagem_01.png'

//se nao for util pode apagar
// const gridContainer = styled.nav`
//     font-family: Arial, Helvetica, sans-serif;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     grid-template-rows: 0fr 0.6fr 0.4fr 0.5fr;

//     grid-template-areas: "h h h h"
//                      "m m m m"
//                      "ar ar ar ar"
//                      "f f f f";

//     max-width: 100%;
//     gap: 0.3em;
//     margin: 0 auto;  
//     background-color: gray  ;
// `

//SÓ NAO SABIA CRIAR VARIAVEIS PARA CORES

const ButtonLink = styled(Link)`
    text-decoration: none;
`

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
const Image = styled.img`
    width: 550px;
    height: 367px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
    background-color: #fff;
`

const FormContainer = styled.form`
    display: flex;
    justify-content: space-evenly;
    margin: 15px 50px;
`

const VerProjetos = styled.button`
    /* color: #1f1f1f;
    border: 2px solid #1f1f1f;
    background: none;
    padding: 8px;
    display:flex;
    justify-content:center;
    text-decoration: none;*/

    display: flex;
    border: 2px solid #1f1f1f;
    border-radius: 30px;
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

const ArticleTexth1 = styled.h1`
    font-size: 35px;
    color: #1f1f1f;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`

const ArticleTexth2 = styled.h2`
    font-size: 30px;
    color: #ED9B13;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    margin-top: -10px;

`

const ArticleTextP = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    padding: 0 20px;
    color: #1f1f1f;
    text-shadow: 1px 1.15px rgba(0, 0, 0, 0.3);
    margin-top: -5px;

`

const ArticleText = styled.article`
    background-color: #fff; 
    display: flex;
    justify-content: space-evenly;
    margin: auto;
`

const SectionText = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
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
            
            <FormContainer>
                <Image src={GeracaoFuturo} alt="Geração Futuro"/>
                <Image src={GeracaoSamuel} alt="Geração Samuel"/>
            </FormContainer>
            
            <ButtonLink to="/projetos">
                <VerProjetos>VER OS PROJETOS</VerProjetos>
            </ButtonLink>

            <ArticleText>
                {/* Texto1 */}
                <SectionText>
                    <ArticleTexth1>7</ArticleTexth1>
                    <ArticleTexth2>Projetos Sociais</ArticleTexth2>
                    <ArticleTextP>3 Centro de Crianças e Adolescentes, 3 Centros Temporários de Acolhimento e 1 Centro de Desenvolvimento Social e Produtivo.</ArticleTextP>
                </SectionText>

                {/* Texto2 */}
                <SectionText>
                    <ArticleTexth1>5</ArticleTexth1>
                    <ArticleTexth2>Comunidades</ArticleTexth2>
                    <ArticleTextP>Os Projetos estão situados na região Norte, Sul e Centro de São Paulo,nos bairros da Mooca,Pirituba,Planalto Paulista,Jaraguá e Jardim Vivian.</ArticleTextP>
                </SectionText>

                 {/* Texto3 */}
                <SectionText>
                    <ArticleTexth1>199</ArticleTexth1>
                    <ArticleTexth2>Colaboradores</ArticleTexth2>
                    <ArticleTextP>A organização ainda gera centenas de empregos, prezando sempre a qualidade do atendimento prestado as comunidades.</ArticleTextP>
                </SectionText>

                {/* Texto4 */}
                <SectionText>
                    <ArticleTexth1>1220</ArticleTexth1>
                    <ArticleTexth2>Pessoas Atendidas</ArticleTexth2>
                    <ArticleTextP>Mais de mil pessoas, são atendidas diariamente, centenas de famílias são assistida, fazendo valer os direitos sociais.</ArticleTextP>,
                </SectionText>
            </ArticleText>
        </div>
    )
}

export default Main;