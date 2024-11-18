import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/HeaderWithout'
import Footer from '../Components/Footer';
import ProjectImage from '../Components/ProjectImage'
import imageSamuel from '../Assets/CCA GERACAO DE SAMUEL.jpg'
import ImagemFuturo from '../Assets/CCA GERACAO FUTURO.jpg'
import ImagemPanamericano from '../Assets/CCA JG PANAMERICANO.jpg'
import ImagemKairos from '../Assets/CEDESP KAIRÓS.jpg'
import ImagemVMariana from '../Assets/CTA VILA MARIANA.jpg'
import ImagemRefugio1 from '../Assets/CA REFÚGIO I.jpg'
import ImagemRefugio2 from '../Assets/CA REFÚGIO II.jpg'
import ImagemVago from '../Assets/CA REFÚGIO II.jpg'

function Projeto() {
    const navigate = useNavigate()
    const fotos = [
        { id: '1', src: imageSamuel, alt: 'Geracao Samuel', title:"CCA Geração de Samuel", description: "CCA Geração de Samuel"},
        { id: '2', src: ImagemFuturo, alt: 'GeracaoFuturo', title:"CCA Geração Futuro", description: "CCA Geração Futuro"},
        { id: '3', src: ImagemPanamericano, alt: 'GeracaoPanamericano', title:"CCA Jd.Panamericano", description: "CCA Jd.Panamericano"},
        { id: '4', src: ImagemKairos, alt: 'GeracaoKairos', title:"CEDESP Kairós", description: "CEDESP Kairós"},
        { id: '5', src: ImagemVMariana, alt: 'GeracaoVMariana', title:"CTA Vila Mariana", description: "CTA Vila Mariana"},
        { id: '6', src: ImagemRefugio1, alt: 'GeracaoRefugio1', title:"CA Refúgio I", description: "CA Refúgio I"},
        { id: '7', src: ImagemRefugio2, alt: 'GeracaoRefugio2', title:"CA Refúgio II", description: "CA Refúgio II"},
        { id: '8', src: ImagemVago, alt: 'GeracaoVago', title:"Vago (Preencher)", description: "Vago (Preencher)"}
    ]
    return(
        <>
            <Header/>
            <ProjectImage fotos={fotos} navigate={navigate}/>
            <Footer/>
        </>
    )
}
export default Projeto