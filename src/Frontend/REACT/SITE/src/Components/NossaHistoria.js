import styled from "styled-components"
import mao from '../Assets/Mão 70.png'

const Mao = styled.div`
  background-image: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%),
                    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%),
                    url('${mao}');
  background-size: cover;
  background-position: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  background-color: #fff;
`

const Title = styled.h1`
  color: #ED9B13; 
  display: flex;
  margin-top: 80px;
`

const TextContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  border-left: 5px solid orange;
  border-radius: 5%;
  position: relative;
`

const TextContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 75px;
`

const Dots = styled.p`
  font-size: 30px;
  text-align: center;
  margin: auto;
  background: radial-gradient(circle, rgba(237, 155, 19, 1) 0%, rgba(237, 155, 19, 0) 100%);
  background-clip: text; 
  color: transparent; 
`

const DotEnd = styled.p`
  font-size: 30px;
  text-align: center;
  background: radial-gradient(circle, rgba(237, 155, 19, 1) 0%, rgba(237, 155, 19, 0) 100%);
  background-clip: text; 
  color: transparent; 
  margin: 15px 0 50px;  
`


const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #1f1f1f;
  text-align: justify;
  padding: 0 20px;
  font-size:17px;
  &::before{
    content: '➔';
    position: absolute;
    left: 0;
    color: orange;
    font-size: 1.8em;
  }
`

const Text2 = styled.p`
  color: #1f1f1f;
  text-align: justify;
  font-size:17px;
`



function NossaHistoria() {
  return (
    <Mao>
    <Container>
      <Title>NOSSA HISTÓRIA</Title>
        <Dots>• • • • • • • • • • • • • • • • • • • • •</Dots>
      <TextContainer>
        <Text>O Projeto Neemias teve início em 2005, na Igreja Comunhão Cristã, onde os frequentadores notaram o crescente número de crianças nas ruas ao redor. Essas crianças eram vítimas de trabalho infantil e evasão escolar. Esse cenário sensibilizou os membros, que formaram o 'Ministério de Ação Social da Comunhão Cristã', com o objetivo de auxiliar não somente as crianças, mas também suas famílias.</Text>
        <Dots>• • • • • • • • • • • • • • • • • • • • •</Dots>
        <Text>
          <TextContainer2>
          <Text2>Com o crescimento dos movimentos sociais, houve a necessidade de formalizar esse trabalho, dando origem à ONG Centro de Capacitação para a Vida (Projeto Neemias).</Text2>
          <Text2>A ONG obteve o registro no CMDCA (Conselho Municipal dos Direitos da Criança e do Adolescente) e o COMAS, e firmou seu primeiro convênio com a prefeitura de São Paulo, no programa 'Ação Família: Viver em Comunidade'.</Text2>
          </TextContainer2>
        </Text>
        <Dots>• • • • • • • • • • • • • • • • • • • • •</Dots>
        <Text>
          <div>
            <Text2>Depois desse processo obtivemos: • NCI CALEBE (núcleo de convivência de idosos) (encerrou em 2017) • 3 CCAs (centro da criança e do adolescente) GERAÇÃO FUTURO/ GERAÇÃO SAMUEL / JARDIM PANAMERICANO • CEDESP (Centro de Desenvolvimento Social e Produtivo) • SAICA BEITH SHALOM (Serviço de Acolhimento Institucional para Crianças e Adolescentes) (encerrou em 2021). E mais...</Text2>
            <Text2>•NCASR ESTALAGEM (núcleo de convivência para adultos em situação de rua) que se tornou o CTA VILA MARIANA (centro temporário de acolhida) • 2 CAs (MOOCA) Refúgio I e II (centros de acolhida).</Text2>
          </div>
        </Text>
        <Dots>• • • • • • • • • • • • • • • • • • • • •</Dots> 
        <Text>Hoje, a organização atende mais de 1.000 pessoas por dia, proporcionando às crianças e adolescentes o desenvolvimento socioemocional, e, aos jovens e adultos em situação de rua, uma oportunidade de reinserção no núcleo familiar e no mercado de trabalho.</Text>
      </TextContainer>
      <DotEnd>• • • • • • • • • • • • • • • • • • • • •</DotEnd>

    </Container>
    </Mao>
  )
}

export default NossaHistoria