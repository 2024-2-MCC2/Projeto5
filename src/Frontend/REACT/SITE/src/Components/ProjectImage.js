import React from "react";
import styled from "styled-components"

const TitleContainer = styled.h1`
    text-align:center;
    font-weight: 700;
    font-size: 70px;
    color: #fff;
    background-color: #ED9B13;
    padding: 50px;
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
    
    /* transform: translate(50%,-50%); */
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
`

const PageContainer = styled.main`
    background-color:#fff;
    display: grid;
    justify-content:space-around;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
`

const ImageCard = styled.main`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin: 40px;
`

const StyledImage = styled.img`
    width: 520px;
    height: 320px;
    border-radius:10%;
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