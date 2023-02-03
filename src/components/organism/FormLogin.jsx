import { useRef } from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Input from "../atoms/Input"

function FormLogin() {
    const navigate = useNavigate()
    const form = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        const endPoint = "http://34.225.239.102/api/iniciar"
        const updateForm = new FormData(form.current);
        let updateUser = updateForm.get('username');
        let updatePassword = updateForm.get('password');
        console.log(updateUser + " " + updatePassword);


        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "usuario": updateUser,
                "contrasenia": updatePassword
            })
        }

        fetch(endPoint, options)
            .then(response => response.json())
            .then(data => {
                if (data.status === true) {
                    alert("Datos correctoss");
                    navigate("/bus");
                } else {
                    alert("Error, " + data.message);
                }

            })

    }

    const handlerClickRegister = () => {
        navigate("/register");
    }
    return (
        <>

            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form ref={form}>
                <div id="textlogindiv">
                    <h1 id="logo">Login</h1>
                </div>
                <Input type={"text"} textLabel={"Username: "} inputName={"username"} id={"username"} divClassName="" />
                <Input type={"password"} textLabel={"Password: "} inputName={"password"} id={"psw"} divClassName="" />
                <button onClick={handleClick} id="boton">Login</button>
                <h3>Haven't account?</h3>
                <button onClick={handlerClickRegister} id="botonL">Register Now!!</button>
            </form>
            <link rel="stylesheet" href="" />
        </>
    );
}

export default FormLogin;