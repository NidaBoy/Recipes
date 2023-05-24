import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TelaInicial } from "./pages/tela-inicial";
import { Conta } from "./pages/conta";
import { CriarReceita } from './pages/criar-receita';
import { ReceitasSalvas } from "./pages/receitas-salvas";
import { NavBar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<TelaInicial />}/>
          <Route path="/conta" element={<Conta />}/>
          <Route path="/criar-receita" element={<CriarReceita />}/>
          <Route path="/receitas-salvas" element={<ReceitasSalvas />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
