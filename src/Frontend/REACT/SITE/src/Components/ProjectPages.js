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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`

function ProjectPages(){   
    const { id } = useParams()
    const navigate = useNavigate()
    const [projeto, setProjeto] = useState(null)

    useEffect(() => {
        const mockData = [
            { id: '1', nome: 'CCA Geração de Samuel', texto: 'AAAAAAAAAAAAAAAAAAAA', foto: ImagemSamuel },
            { id: '2', nome: 'CCA Geração Futuro', texto: 'AAAAAAAAAAAAAAAAAAAA', foto: ImagemFuturo },
            { id: '3', nome: 'CCA Jd. Panamericanos', texto: 'AAAAAAAAAAAAAAAAAAAA', foto: ImagemPanamericano },
            { id: '4', nome: 'CEDESP Kairós', texto: 'AAAAAAAAAAAAAAAAAAAA', foto: ImagemKairos },
            { id: '5', nome: 'CTA Vila Mariana', texto: 'AAAAAAAAAAAAAAAAAAAA', foto: ImagemVMariana },
            { id: '6', nome: 'CA Refúgio I', texto: 'AAAAAAAAAAAAAAAAAAAA', foto: ImagemRefugio1 },
            { id: '7', nome: 'CA Refúgio II', texto: 'AAAAAAAAAAAAAAAAAAAA', foto: ImagemRefugio2 },
            { id: '8', nome: 'NÃO TEM!!', texto: 'AAAAAAAAAAAAAAAAAAAANÃOTEM!', foto: ImagemSamuel }
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
                <Content>
                    <Image src={projeto.foto} alt={projeto.nome} />
                    <TextContainer>
                        <Title>{projeto.nome}</Title>
                        <Text>{projeto.texto}</Text>
                        <Button onClick={handleBack}>Voltar</Button>
                    </TextContainer>
                </Content>
            </Container>
        </>
    )
}

export default ProjectPages