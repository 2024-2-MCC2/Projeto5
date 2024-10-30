import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";


const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DoeAgora = styled.h2`
    color: #ED9B13;
    font-size: 30px;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
`

const H1 = styled.h1`
    color: #1f1f1f;
    font-size: 40px;
    text-align: center;
`

const Texto = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 235px;
`

const Como = styled.h1`
    color: #1f1f1f;
    font-size: 25px;
    text-align: left;
`

const Link = styled.a`
    color: #ED9B13;
    font-size: 20px;
    text-align: left;
`

const Textinho = styled.p`
    color: #1f1f1f;
    font-size: 20px;
    text-align: justify;
`
const Map = styled.iframe`
    width: 100%;
    max-width: 750px;
    height: 398px;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    display: flex;
    margin: 10px auto;
`;

const Endereco = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`

const EnderecoDados = styled.div`


`

const IconsContainer = styled.h1`
    font-size: 35px;
    color: #1f1f1f;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`



function Doe(){
    return(
        <>
        <TitleContainer>
            <DoeAgora>Doe Agora</DoeAgora>
            <H1>Toda ajuda é apreciada!</H1>
        </TitleContainer>
        <Texto>
            <Como>Como doar?</Como>
            <Textinho>Aceitamos doação de alimentos, que serão destinados para a comunidade carente.</Textinho>
            <Textinho>Também aceitamos doação de roupas, calçados, eletrodomésticos e móveis, que serão destinadas a pessoas necessitadas, ou vendidos em nosso bazar beneficente <Link href="https://www.instagram.com/bazarccpv/" target="_blank" rel="noopener noreferrer">@bazarccpv</Link>.</Textinho>
            <Textinho>Toda arrecadação é revertida para a manutenção de nossos projetos sociais.</Textinho>
            <H1>Ponto de Entrega</H1>
        </Texto>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6359744187903!2d-46.646216025419726!3d-23.617384863651285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a45267434d7%3A0x92f3ff71cf19356f!2sAv.%20Jos%C3%A9%20Maria%20Whitaker%2C%202000%20-%20Planalto%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004057-000!5e0!3m2!1spt-BR!2sbr!4v1727788289544!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Endereco>
            <IconsContainer><FaMapMarkerAlt/></IconsContainer>
            <EnderecoDados>
                <Textinho>Avenida José Maria Whitaker, 2000 - Planalto Paulista</Textinho>
            </EnderecoDados>


        </Endereco>
        </>
    )
}

export default Doe;