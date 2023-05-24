import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {

    const [cookies, setCookies] = useCookies(["access_token"]);
    const Navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        Navigate("/conta")
    };

    return(
        <div className="navbar">
            <Link to="/"> Inicial</Link>
            <Link to="/criar-receita"> Criar Receita</Link>
            <Link to="/receitas-salvas"> Receitas Salvas</Link>
            {!cookies.access_token ? (<Link to="/conta"> Login/Cadastro</Link>) 
            : (<button onClick={logout}> Logout </button>)}
        </div>
    );
};