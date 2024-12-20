import React from "react";
import styled from "styled-components"

const TitleContainer = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #fff;
    background-color: #ED9B13;
    padding: 40px;
    margin: 0px;
    height: 25px;    
    /* transform: translate(50%,-50%); */
    text-transform: uppercase;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
`

const PageContainer = styled.main`
    background-color:#fff;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1300px;
    margin: auto;
`

const ImageCard = styled.main`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin: 35px;
`

const StyledImage = styled.img`
    width: 520px;
    height: 320px;
    border-radius:35px;
    object-fit: cover;
    margin-bottom: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
`

const SubTitle = styled.h2`
    text-align: center;
    color: #ED9B13;
    margin: 0 0 5px 0;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-top: 8px;
    border: none;
    border-radius:35px;
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


function ProjectImage({fotos, navigate}){
    return(
        <> 
            <TitleContainer>Nossos Projetos Sociais</TitleContainer>
            <PageContainer>
                {fotos.map((foto, index) =>(
                    <ImageCard key={index}>
                        <StyledImage src={foto.src} alt={foto.alt}/>
                        <SubTitle>{foto.title}</SubTitle>
                        <Button onClick={() => navigate(`/projeto/${foto.id}`)}>Saiba Mais</Button>
                        {/* <Description>{foto.description}</Description> */}
                    </ImageCard>
                ))}
            </PageContainer>
        </>
    )
}

export default ProjectImage