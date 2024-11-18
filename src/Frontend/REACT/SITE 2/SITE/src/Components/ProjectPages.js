import React, { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImagemSamuel from '../Assets/CCA GERACAO DE SAMUEL.jpg'
import ImagemFuturo from '../Assets/CCA GERACAO FUTURO.jpg'
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


const Image = styled.img`
  flex-shrink: 0;
  width: 400px;
  height: auto;
  border-radius:35px;
`;

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



const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius:35px;
    background-color: #007BFF;
    color: white;
    transition: all 0.3s ease;
    margin: 10px 5px;
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
            { id: '1', nome: 'CCA Geração de Samuel', descricao:'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças e Adolescentes de 6 a 14 anos.', foto: ImagemSamuel},
            { id: '2', nome: 'CCA Geração Futuro', descricao:'É um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.', foto: ImagemFuturo},
            { id: '3', nome: 'CCA Jd. Panamericanos', descricao:'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.',  foto: ImagemPanamericano },
            { id: '4', nome: 'CEDESP Kairós', descricao:'Tem como objetivo ofertar proteção social, por meio do fortalecimento de vínculos familiares e comunitários, assegurando espaços de referência para o convívio grupal, comunitário e social, oportunizando o desenvolvimento de relações de afetividade, solidariedade e respeito mútuo, para adolescentes, jovens e adultos (de 15 a 59 anos) em situação de vulnerabilidade e risco social. Propicia o desenvolvimento da autonomia, do protagonismo social e da formação cidadã, e ainda contribui para o reconhecimento do trabalho e da formação profissional como um direito de cidadania.', foto: ImagemKairos },
            { id: '5', nome: 'CTA Vila Mariana', descricao:'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.', foto: ImagemVMariana },
            { id: '6', nome: 'CA Refúgio I', descricao:'AAAAAAAAAAAAAAAAAAAA', foto: ImagemRefugio1 },
            { id: '7', nome: 'CA Refúgio II', descricao:'O Centro para Crianças e Adolescentes é um espaço de referência para o desenvolvimento de ações socioeducativas com crianças e adolescentes, visa assegurar o fortalecimento dos vínculos familiares e o convívio grupal, comunitário e social. Atende Crianças de 6 a 11 anos e Adolescentes de 12 a 14 anos.', foto: ImagemRefugio2 },
            { id: '8', nome: 'NÃO TEM!!', descricao:'AAAAAAAAAAAAAAAAAAAANÃOTEM!', foto: ImagemSamuel }
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
                    <Text>{projeto.descricao}</Text>
                  </TextContainer>
                </Content1>
                <Button onClick={handleBack}>Voltar</Button>
              </ContentAll>
            </Container>
        </>
    )
}

export default ProjectPages