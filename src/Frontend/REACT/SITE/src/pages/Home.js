import Header from '../Components/Header'
import Main from '../Components/Main';
import ArticleInformations from '../Components/ArticleInformations';
import Logo from '../Components/Logo';
import Footer from '../Components/Footer';
import ProjectImage from '../Components/ProjectImage';
import GeracaoSamuel from '../Assets/imagem_02.png'
import GeracaoFuturo from '../Assets/imagem_01.png'

function Home(){
    return(
        <div>
            <Header/>
            <Logo/>
            <Main/>
            <ProjectImage
                images={[
                    {src: GeracaoFuturo, alt:"Imagem do projeto Geração Futuro", text: "GERAÇÃO FUTURO"},
                    {src: GeracaoSamuel, alt:"Imagem do projeto Geração Samuel", text: "GERAÇÃO SAMUEL"},
                ]}
            />
            <ArticleInformations/>
            <Footer/>
        </div>
    )
}
export default Home;