import React, { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImagemSamuel from '../Assets/CCA GERACAO DE SAMUEL.jpg'
import ImagemSamuel2 from '../Assets/ImagemSamuel2.png'
import ImagemFuturo from '../Assets/CCA GERACAO FUTURO.jpg'
import Taekowndo from '../Assets/Taekwondo.png'
import ImagemPanamericano from '../Assets/CCA JG PANAMERICANO.jpg'
import ImagemKairos from '../Assets/CEDESP KAIRÓS.jpg'
import ImagemVMariana from '../Assets/CTA VILA MARIANA.jpg'
import ImagemRefugio1 from '../Assets/CA REFÚGIO I.jpg'
import ImagemRefugio2 from '../Assets/CA REFÚGIO II.jpg'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

const Content1 = styled.div`
  width: 950px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  
`;

const Content2 = styled.div`
  margin: auto;
  width: 900px;
  justify-content: center;
`

const Image = styled.img`
  flex-shrink: 0;
  width: 400px;
  height: auto;
  border-radius: 10px;
`;

const Image2 = styled.img`
  display:flex;
  width: 500px;
  height: auto;
  border-radius: 10px;
  margin:auto;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  text-align: justify;
`;

const Title = styled.h2`
  text-align: left;
`;

const SubTitle = styled.h3`
  text-align: left;
  color: #ED9B13;
`

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    background-color: #007BFF;
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: #394c73;
        transition: all 0.3s ease;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); 
        transform: translateY(-2px);
    }
`

function ProjectPages(){   
    const { id } = useParams()
    const navigate = useNavigate()
    const [projeto, setProjeto] = useState(null)

    useEffect(() => {
        const mockData = [
            { id: '1', nome: 'CCA Geração de Samuel', desc:'Centro para Crianças e Adolescentes', texto: 'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças e Adolescentes de 6 a 14 anos.', texto2:'No CCA Geração de Samuel são realizadas oficinas desportivas, culturais, tecnológicas, gastronômicas e artísticas.', pegunta:'Você sabe qual é o seu poder?', texto3:'No CCA a criança/adolescente tem a oportunidade para realizar esta e muitas outras descobertas, a exemplo, o poder da sua atuação, o poder de falar e expressar posicionamentos por meio da dança, do esporte, da manifestação por causas sociais e por meio do Brincar para construir significado.', texto4:'Livres para sorrir, para brincar, para criar o espaço com pertencimento; aqui o grupo coloca a mão na massa para deixar cada cantinho com sua marca, com a participação em oficinas de artesanato para decoração em datas festivas e a decoração dos espaços.', texto5:'Além das propostas de oficinas internas, buscamos conhecer mais espaços do território que ofereçam lazer a comunidade. Nas atividades externas, o grupo tem a oportunidade de realizar piqueniques e recreação, além de poder explorar ambientes, observar suas qualidades e necessidades. Esta vivência promove reflexões na construção de seres pensantes e cidadãos atuantes.', foto: ImagemSamuel, foto2:ImagemSamuel2},
            { id: '2', nome: 'CCA Geração Futuro', desc:'Centro para Crianças e Adolescentes', texto: 'É um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.', texto2:'No CCA Geração Futuro são realizadas oficinas desportivas, culturais, tecnológicas, gastronômicas e artísticas.' , pegunta:'TAEKWONDO', texto3:'Taekwondo é uma arte marcial sul-coreana que originou um esporte de combate. Hoje em dia, é um desporto difundido em todos os continentes. O taekwondo é um esporte integrante dos Jogos Olímpicos, trabalha a parte física e mental do praticante, desenvolve a coordenação motora, a memória, ensina disciplina e valores, bem como noções de hierarquia e respeito.', texto4:'', texto5:'',  foto: ImagemFuturo, foto2: Taekowndo},
            { id: '3', nome: 'CCA Jd. Panamericanos', desc:'Centro para Crianças e Adolescentes', texto: 'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.', texto2:'No CCA Geração de Samuel são realizadas oficinas desportivas, culturais, tecnológicas, gastronômicas e artísticas.' , pegunta:'', texto3:'', texto4:'', texto5:'',  foto: ImagemPanamericano },
            { id: '4', nome: 'CEDESP Kairós', desc:'Centro de Desenvolvimento Social e Produtivo, para Adolescentes, Jovens e Adultos', texto: 'Tem como objetivo ofertar proteção social, por meio do fortalecimento de vínculos familiares e comunitários, assegurando espaços de referência para o convívio grupal, comunitário e social, oportunizando o desenvolvimento de relações de afetividade, solidariedade e respeito mútuo, para adolescentes, jovens e adultos (de 15 a 59 anos) em situação de vulnerabilidade e risco social. Propicia o desenvolvimento da autonomia, do protagonismo social e da formação cidadã, e ainda contribui para o reconhecimento do trabalho e da formação profissional como um direito de cidadania.', texto2:'' , pegunta:'O percurso formativo é organizado em três módulos semestrais. Divididos em convívio, Mundo do Trabalho e Formação Inicial e Continuada.', texto3:'', texto4:'', texto5:'',  foto: ImagemKairos },
            { id: '5', nome: 'CTA Vila Mariana', desc:'Centro para Crianças e Adolescentes', texto: 'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.', texto2:'No CCA Geração de Samuel são realizadas oficinas desportivas, culturais, tecnológicas, gastronômicas e artísticas.' , pegunta:'', texto3:'', texto4:'', texto5:'',  foto: ImagemVMariana },
            { id: '6', nome: 'CA Refúgio I', desc:'Centro de Acolhida, para Adultos em situação de rua.', texto: 'AAAAAAAAAAAAAAAAAAAA', texto2:'' , pegunta:'', texto3:'', texto4:'', texto5:'',  foto: ImagemRefugio1 },
            { id: '7', nome: 'CA Refúgio II', desc:'Centro de Acolhida para Adultos', texto: 'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.', texto2:'No CCA Geração de Samuel são realizadas oficinas desportivas, culturais, tecnológicas, gastronômicas e artísticas.' , pegunta:'', texto3:'', texto4:'', texto5:'',  foto: ImagemRefugio2 },
            { id: '8', nome: 'NÃO TEM!!', desc:'', texto: 'AAAAAAAAAAAAAAAAAAAANÃOTEM!', texto2:'' , pegunta:'', texto3:'', texto4:'', texto5:'',  foto: ImagemSamuel }
        ]
        const fetchedProject = mockData.find(proj => proj.id === id)
        setProjeto(fetchedProject)
    }, [id])
    const handleBack = () => {
        navigate(-1)
    }
    if (!projeto) {
        return <div>PROJETO NÃO ENCONTRADO</div>
    }
    return(
        <>
            <Container>
              <ContentAll>
                <Content1>
                  <Image src={projeto.foto} alt={projeto.nome} />
                  <TextContainer>
                    <Title>{projeto.nome}</Title>
                    <SubTitle>{projeto.desc}</SubTitle>
                    <Text>{projeto.texto}</Text>
                  </TextContainer>
                </Content1>
                <Content2>
                  <Text>{projeto.texto2}</Text>
                  <SubTitle>{projeto.pegunta}</SubTitle>
                  <Text>{projeto.texto3}</Text>
                  <Text>{projeto.texto4}</Text>
                  <Image2 src={projeto.foto2}/>
                  <Text>{projeto.texto5}</Text>
                  <Button onClick={handleBack}>Voltar</Button>
                </Content2>
              </ContentAll>
            </Container>
        </>
    )
}

export default ProjectPages