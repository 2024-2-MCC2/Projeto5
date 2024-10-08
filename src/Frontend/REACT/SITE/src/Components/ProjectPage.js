import React from "react";
import styled from "styled-components"

const TitleContainer = styled.h1`
    text-align:center;
    font-weight: bold;
    font-size: 70px;
    color: #fff;
    background-color: #ED9B13;
    padding: 40px;
`

const PageContainer = styled.main`
    background-color:#fff;
`
const ImageCard = styled.main`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 30px;
    width: calc(50% - 5px);
`

const StyledImage = styled.img`
    width: 550px;
    height: 350px;
    border-radius:10%;
    object-fit: cover;
    margin-bottom: 10px;
`

const SubTitle = styled.h2`
    text-align: center;
    color: #ED9B13;
    margin: 0 0 5px 0;
`

// const Description = styled.p`
//     color: #ED9B13;;
// `


// {fotos}
function ProjectPage({fotos}){
    return(
        <div> 
            <TitleContainer>Nossos Projetos Sociais</TitleContainer>
            <PageContainer>
            {fotos.map((foto, index) =>(
                    <ImageCard key={index}>
                        <StyledImage src={foto.src} alt={foto.alt}/>
                        <SubTitle>{foto.title}</SubTitle>
                        {/* <Description>{foto.description}</Description> */}
                    </ImageCard>
                ))}
            </PageContainer>
        </div>
    )
}

export default ProjectPage