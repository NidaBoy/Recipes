import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <div className="navbar">
            <Link to="/"> Inicial</Link>
            <Link to="/criar-receita"> Criar Receita</Link>
            <Link to="/receitas-salvas"> Receitas Salvas</Link>
            <Link to="/conta"> Login/Cadastro</Link>
        </div>
    );
};