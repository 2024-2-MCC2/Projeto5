import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Image from "../Assets/Pattern mão-50.png"



const BackgroundImage = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    background-image: url('${Image}');
    background-size: 2000px;
    padding: 10px;
`



const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 2em;
    margin-bottom:50px;
    margin-top: 20px;
`

const ImageContainer = styled.main`
    width: 550px;
    height: 367px;
    margin: 0 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius:35px;
    img{
        width:100%;
        height:100%;
        border-radius: 35px;
        object-fit: cover;
    }
`

const Text = styled.p`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #1f1f1f;
    margin: 10px 0;
`


const VerProjetos = styled.button`
    border: 2px solid #1f1f1f;
    border-radius: 30px;
    margin: 30px;
    padding: 12px 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #1f1f1f;
    font-weight: bold;
    font-size: 25px;
    text-decoration: none;
    background-color: #fff;
    
    &:hover{
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); 
    transform: translateY(-2px);
    }
`

function ProjectImageHome({images}){
    const navigate = useNavigate();
    return(
        <BackgroundImage>
            <Container>
            {images.map((image, index) => (
                <ImageContainer Key={index}>
                    <img src={image.src} alt={image.alt}/>
                    <Text>{image.text}</Text>
                </ImageContainer>
            ))}
            </Container>
            <VerProjetos onClick={() => navigate("/projetos")}>VER OS PROJETOS</VerProjetos>
        </BackgroundImage>        
    )
}

export default ProjectImageHome
