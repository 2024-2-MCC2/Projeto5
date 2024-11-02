import Header from '../Components/Header'
import Main from '../Components/Main';
import ArticleInformations from '../Components/ArticleInformations';
import Logo from '../Components/Logo';
import Footer from '../Components/Footer';
import ProjectImageHome from '../Components/ProjectImageHome';
import GeracaoSamuel from '../Assets/imagem_02.png'
import GeracaoFuturo from '../Assets/imagem_01.png'
import FooterIcons from '../Components/FooterIcons'

function Home(){
    return(
        <div>
            <Header/>
            <Logo/>
            <Main/>
            <ProjectImageHome
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