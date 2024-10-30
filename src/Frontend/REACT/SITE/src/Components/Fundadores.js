import styled from "styled-components";

const TitleContainer = styled.h1`
    display: flex;
    align-items:center;
    justify-content: center;
    font-weight: bold;
    font-size: 70px;
    color: #fff;
    background-color: #ED9B13;
    padding: 50px;
    margin: 0px;
    height: 40px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`

const PageContainer = styled.main`
    background-color:#fff;
    display: flex;
    justify-content:space-evenly;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width:1000px;
    margin: auto;
`

const ImageCard = styled.main`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 20px;
`

const StyledImage = styled.img`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
border-radius: 100%;
padding-top: 20px;
height: 200px;
width: 200px;
`

const SubTitle = styled.h2`
    text-align: center;
    color: #ED9B13;
    margin: 0 0 5px 0;
    font-weight: bold;
    font-size: 19px;
`
const Description = styled.h3`
    text-align: center;
    color: #ED9B13;
    margin: 0 0 5px 0;
    font-weight: bold;
    font-size: 18px;
`

function Fundadores({FundFotos}){
  return(
      <div> 
          <TitleContainer>Fundadores</TitleContainer>
          <PageContainer>
          {FundFotos.map((FundFotos, index) =>(
                  <ImageCard key={index}>
                      <StyledImage src={FundFotos.src} alt={FundFotos.alt}/>
                      <SubTitle>{FundFotos.title}</SubTitle>
                      <Description>{FundFotos.description}</Description>
                  </ImageCard>
              ))}
          </PageContainer>
      </div>
  )
}

export default Fundadores