import Header from '../Components/HeaderWithout'
import Footer from '../Components/Footer';
import NossaHistoria from '../Components/NossaHistoria';
import Fundadores from '../Components/Fundadores';
import Lillian from '../Assets/Lillian.jpg'
import Arles from '../Assets/Arles.jpg'
import Angelica from '../Assets/Angelica.jpg'

function Sobre(){
    return(
        <div>
            <Header/>
            <NossaHistoria/>
            <Fundadores
          FundFotos = {[
            {src:Lillian, alt: 'Lillian Ballester Marques', title: "Lillian Ballester Marques", description: "Pastora Presidente da Igreja Comunhão Cristã"}, 
            {src:Arles, alt: 'Arles Conde Marques', title: "Arles Conde Marques", description: "Apóstolo fundador da Igreja Comunhão Cristã"}, 
            {src:Angelica, alt: 'Angélica Cabral Alencar', title: "Angélica Cabral Alencar", description: "Pastora da Igreja Comunhão Cristã (Jaraguá)"}, 
          ]}
          />
            <Footer/>
        </div>
    )
}
export default Sobre;