import styled from "styled-components";

const TitleContainer = styled.h1`
    text-align:center;
    font-weight: bold;
    font-size: 70px;
    color: #fff;
    background-color: #ED9B13;
    padding: 80px;
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
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
    display: flex;
    justify-content:space-evenly;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
`

const ImageCard = styled.main`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 30px;
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