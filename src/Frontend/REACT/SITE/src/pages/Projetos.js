import Header from '../Components/HeaderWithout'
import Footer from '../Components/Footer';
import ProjectPage from '../Components/ProjectPage'
import ImagemSamuel from '../Assets/CCA GERACAO DE SAMUEL.jpg'
import ImagemFuturo from '../Assets/CCA GERACAO FUTURO.jpg'
import ImagemPanamericano from '../Assets/CCA JG PANAMERICANO.jpg'
import ImagemKairos from '../Assets/CEDESP KAIRÓS.jpg'
import ImagemVMariana from '../Assets/CTA VILA MARIANA.jpg'
import ImagemRefugio1 from '../Assets/CA REFÚGIO I.jpg'
import ImagemRefugio2 from '../Assets/CA REFÚGIO II.jpg'
import ImagemVago from '../Assets/CA REFÚGIO II.jpg'

function Projeto(){
    return(
        <div>
            <Header/>
            <ProjectPage
                fotos={[
                    {src:ImagemSamuel, alt: 'Geracao Samuel', title:"CCA Geração de Samuel", description: "CCA Geração de Samuel"},
                    {src:ImagemFuturo, alt: 'GeracaoFuturo', title:"CCA Geração Futuro", description: "CCA Geração Futuro"},
                    {src:ImagemPanamericano, alt: 'GeracaoPanamericano', title:"CCA Jd.Panamericano", description: "CCA Jd.Panamericano"},
                    {src:ImagemKairos, alt: 'GeracaoKairos', title:"CEDESP Kairós", description: "CEDESP Kairós"},
                    {src:ImagemVMariana, alt: 'GeracaoVMariana', title:"CTA Vila Mariana", description: "CTA Vila Mariana"},
                    {src:ImagemRefugio1, alt: 'GeracaoRefugio1', title:"CA Refúgio I", description: "CA Refúgio I"},
                    {src:ImagemRefugio2, alt: 'GeracaoRefugio2', title:"CA Refúgio II", description: "CA Refúgio II"},
                    {src:ImagemVago, alt: 'GeracaoVago', title:"Vago (Preencher)", description: "Vago (Preencher)"}
                ]}
            />
            <Footer/>
        </div>
    )
}
export default Projeto;