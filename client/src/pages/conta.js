import { useState } from "react";
import axios from "axios";
import { useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
export const Conta = () => {
    return (
        <div className="conta">
            <Login />
            <Cadastro />
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/conta/login', { username, password });

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Form 
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
        />
    );
};

const Cadastro = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost:3001/conta/cadastro', { username, password });
            alert("Cadastro completado, faça o Login.");
        }catch (err){
            console.error(err);
        }
    };

    return (
        <Form 
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Cadastro"
        onSubmit={onSubmit}
        />
    );
};

const Form = ({username, setUsername, password, setPassword, label, onSubmit}) => {
    return (
        <div className="conta-container">
            <form onSubmit={onSubmit}>
                <h2> {label} </h2>
                <div className="form-grupo">
                    <label htmlFor="username"> Usuário: </label>
                    <input 
                    type="text" 
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="password"> Senha: </label>
                    <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button type="submit"> {label}</button>
            </form>
        </div>
    );
};