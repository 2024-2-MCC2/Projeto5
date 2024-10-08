import Header from '../Components/Header'
import Main from '../Components/Main';
import ArticleInformations from '../Components/ArticleInformations';
import Logo from '../Components/Logo';
import Footer from '../Components/Footer';

function Home(){
    return(
        <div>
            <Header/>
            <Logo/>
            <Main/>
            <ArticleInformations/>
            <Footer/>
        </div>
    )
}
export default Home;