import Header from '../Components/HeaderWithout'
import Footer from '../Components/Footer';
import NossaHistoria from '../Components/NossaHistoria';
import Fundadores from '../Components/Fundadores';

function Sobre(){
    return(
        <div>
            <Header/>
            <NossaHistoria/>
            <Fundadores/>
            <Footer/>
        </div>
    )
}
export default Sobre;