import styled from "styled-components"


const MainTitle = styled.h2`
  text-align:center;
  font-weight: 700;
  font-size: 70px;
  color: #ED9B13;
  background-color: #fff;
  padding: 50px;
  margin: 0px;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`

const HistoriaContainer1 = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  height: 500px;
  font-size: 20px;
  padding: 0 4em;
  color: #fff;
  text-shadow: 1px 1.2px rgba(0, 0, 0, 0.5);
  font-size: 25px;
  background-color: #ED9B13;
  margin: 0px;
`
const HistoriaContainer2 = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  height: 300px;
  font-size: 20px;
  padding: 0 4em;
  color: #1f1f1f;
  text-shadow: 1px 1.2px rgba(0, 0, 0, 0.5);
  font-size: 25px;
  background-color: #fff;
  margin: 0px;
`
const HistoriaContainer3 = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  height: 300px;
  font-size: 20px;
  padding: 0 4em;
  color: #fff;
  text-shadow: 1px 1.2px rgba(0, 0, 0, 0.5);
  font-size: 25px;
  background-color: #ED9B13;
  margin: 0px;
`
const HistoriaContainer4 = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  height: 300px;
  font-size: 20px;
  padding: 0 4em;
  color: #1f1f1f;
  text-shadow: 1px 1.2px rgba(0, 0, 0, 0.5);
  font-size: 25px;
  background-color: #fff;
  margin: 0px;
`
function NossaHistoria() {
    return (
        <div>
          <MainTitle>NOSSA HISTÓRIA</MainTitle>
          <HistoriaContainer1>
            O Projeto Neemias teve início em 2005, dentro da Igreja Comunhão Cristã, onde seus frequentadores, 
            na maioria, viviam em uma situação de risco social. Com o tempo, as necessidades foram aumentando e 
            entendemos que havia uma urgência em criar um novo ministério, focado em transformar a realidade das 
            famílias da Igreja Comunhão Cristã, com o objetivo de formar homens e mulheres capazes de contribuir com a sociedade.
          </HistoriaContainer1>  
          <HistoriaContainer2>
            Com o núcleo de movimentos sociais, a ONG conseguiu o CMDCA (Conselho Municipal dos Direitos da Criança e do Adolescente). 
            O objetivo e ra oferecer à comunidade um projeto focado no desenvolvimento infantil e juvenil, daí surgiu o nome ONG – CENTRO 
            DE CAPACITAÇÃO PARA A VIDA (Projeto Neemias).
          </HistoriaContainer2>
          <HistoriaContainer3>
            Depois desse processo obtivemos no NCI CALBE (núcleo de convivência do idoso) que funciona desde 2014 e atende mais de 80 idosos 
            em situação de risco, com o apoio financeiro do Governo do Estado. Apoiando crianças desde 2016, o CCPV também administra projetos 
            com CNPJ próprio. A ONG apoia famílias da Igreja Comunhão Cristã e de outras regiões como na formação de adolescentes e na promoção 
            de um futuro de paz, garantindo seu desenvolvimento psicossocial com o apoio de empresas parceiras. Em 2018 o Centro de Capacitação 
            para Vida (CCPV) expandiu e obteve os alvarás e funcionamento da unidade do AME LAR, projeto voltado para reintegração familiar, 
            com mais de 20 crianças reintegradas com sucesso ao lar familiar.
          </HistoriaContainer3>
          <HistoriaContainer4>
            Hoje a organização atende mais de 1.000 pessoas por dia, proporcionando às crianças a oportunidade de serem transformadas e voltarem 
            à sua família de origem com dignidade e cuidados, independente da situação de vulnerabilidade em que viviam.
          </HistoriaContainer4>
        </div>
    )
}

export default NossaHistoria