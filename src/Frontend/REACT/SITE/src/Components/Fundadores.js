import styled from "styled-components";
import Lillian from '../Assets/Lillian.jpg'
import Arles from '../Assets/Arles.jpg'
import Angelica from '../Assets/Angélica.jpg'

const FundadoresImg = styled.img`
display: block;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
width: calc(33.333% - 20px);
border-radius: 100%;
`

const TituloFundador = styled.h2`
display: flex;
align-items: center;
`
function Fundadores() {
    return(
        <div>
        <TituloFundador>Conheça nossos Fundadores</TituloFundador>
        <div className="fundador">
          <FundadoresImg src={Arles} alt="Arles Conde Marques"/>
          <p><strong>Arles Conde Marques</strong>: Presidente do Centro de Capacitação para Vida (Igreja Comunhão Cristã)</p>
        </div>
        <div className="fundador">
          <FundadoresImg src={Lillian} alt="Lilian Balbester Marques"/>
          <p><strong>Lilian Balbester Marques</strong>: Diretora do Centro de Capacitação para Vida (Igreja Comunhão Cristã)</p>
        </div>
        <div className="fundador">
          <FundadoresImg src={Angelica} alt="Angélica Cabral Alencar"/>
          <p><strong>Angélica Cabral Alencar</strong>: Coordenadora Pedagógica do Centro de Capacitação para Vida (Igreja Comunhão Cristã)</p>
        </div>
        </div>
    )
}

export default Fundadores