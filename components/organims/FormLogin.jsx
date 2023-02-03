import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import Input from "../atoms/Input";
import '../../assets/styles/Login.css'
import Button from "../atoms/Button";
function FormLogin() {
    return (
        <>
            <div className='form-login'>
                <Logo/>
            </div>
            <form>
                <Input msn="Username" />
                <Input msn="Password" />
                <Button msj="Log in" />
            </form>
            <div>
                <Link to="/register">You don´t have acount? ¡Register now!</Link>
            </div>
        </>
    );
}

export default FormLogin;