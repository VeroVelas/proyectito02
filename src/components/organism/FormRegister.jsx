import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";

function FormRegister() {
    const formRegister = useRef();
    const navigate = useNavigate();
    const endPoint ='http://34.225.239.102/api/registrar/usuario';
   
    const handlerClick = (event) => {
        event.preventDefault();
        const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/g;
        const register = new FormData(formRegister.current);
        let name = register.get("name");
        let user = register.get("user");
        let email = register.get("email");
        let password = register.get("password");
        let passwordConfirmation = register.get("password2");
        let phone = register.get("phone");
        
        if(emailRegex.test(email)){
            console.log("Email correcto");
           
            if(password == passwordConfirmation){
                console.log("Password correcto");
                console.log("Name: " + name + " Email: " + email + " Password: " + password + " Password Confirmation: "+ passwordConfirmation + " Phone: " + phone);
                /* navigate("/") */
                const options = {
                        method:"POST",
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "nombre":name,
                            "usuario": user,
                            "correo": email,
                            "contrasenia": password
                        })
                    }

                    fetch(endPoint, options) 
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.status);
                        alert(JSON.stringify(data))
                        navigate("/")
                    })



            }else{
                console.log("Password incorrecto");
                alert("Password incorrecto")
            }
        }else{
            console.log("Email incorrecto");
        }
    }

    const handlerClickRegister = (event) => {
        navigate("/login");
    }

    return ( 
        <>
        <div class="background1">
        <div class="shape1"></div>
        <div class="shape1"></div>
        </div>
        <form ref={formRegister} id="formulario">
            <div id="textregisterdiv">
                <h1 id="textregister">Register</h1>
            </div>
            <Input type={"text"} id={"name"} inputName={"name"} textLabel={"Name: "} divClassName=""/>
            <Input type={"text"} id={"lastname"} inputName={"user"} textLabel={"User: "} divClassName=""/>
            <Input type={"email"} id={"email"} inputName={"email"} textLabel={"Email: "} divClassName=""/>
            <Input type={"password"} id={"password"} inputName={"password"} textLabel={"Password: "} divClassName=""/>
            <Input type={"password"} id={"password2"} inputName={"password2"} textLabel={"Confirm password: "} divClassName=""/>

            <button type="button" onClick={handlerClick} id="btn">Register Now!!</button>
            <h3>You've an account?</h3>
            <button onClick={handlerClickRegister} id="btn2">Log In</button>
        </form>
        </>
     );
}
export default FormRegister;