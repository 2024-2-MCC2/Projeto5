import GlobalStyle from "./Styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"
import Apoiar from "./pages/Apoiar"
import Contato from "./pages/Contato"
import ProjetosDesc from "./pages/ProjetosDesc"
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/sobre-nos' element = {<Sobre/>}/>
          <Route path='/projetos' element = {<Projetos/>}/>
          <Route path='/apoiar' element = {<Apoiar/>}/>
          <Route path='/contato' element = {<Contato/>}/>
          <Route path='/projeto/:id' element = {<ProjetosDesc/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/cadastro' element = {<Cadastro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
