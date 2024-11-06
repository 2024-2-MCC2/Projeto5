import GlobalStyle from "./Styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"
import Doar from "./pages/Doar"
import Juntar from "./pages/Juntar"
import Contato from "./pages/Contato"
import ProjetosDesc from "./pages/ProjetosDesc"

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/sobre-nos' element = {<Sobre/>}/>
          <Route path='/projetos' element = {<Projetos/>}/>
          <Route path='/doar' element = {<Doar/>}/>
          <Route path='/contato' element = {<Contato/>}/>
          <Route path='/projeto/:id' element = {<ProjetosDesc/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
