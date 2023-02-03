import Input from "../atoms/Input";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function FormBus() {
    const formRegister2 = useRef();
    const navigate = useNavigate();
    const endPoint = 'http://34.225.239.102/api/autobus/register';
    const dateLong = Date.now();
    const today = new Date(dateLong);
    const todayValue = today.toLocaleString();
    console.log(todayValue);
    let random = Math.random();
    let randomValue = Math.round(random * 10000 * 2);
    console.log(Math.round(random * 10000 + 2));
    let generatedID = Math.random().toString(36).substring(2, 18);
    console.log(generatedID);

    const handlerClick = (e) => {
        e.preventDefault();
        const register = new FormData(formRegister2.current);
        let id = register.get("idBus");
        let busPlate = register.get("busPlate");
        let seats = register.get("seats");
        let dateValue = register.get("date");
        let type = register.get("type");
        let name = register.get("name");
        let licenceValue = register.get("licence");
        console.log(seats)
        if (seats > 0) {
            alert("datos correctos");
            alert(" Date: " + dateValue + " licence: " + licenceValue + " id Nave: " + id + " asientos: " + seats)
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "clave": id,
                    "placa": busPlate,
                    "numasientos": seats,
                    "fecha": dateValue,
                    "tipo": type,
                    "nombre": name,
                    "licencia": licenceValue
                })
            }

            fetch(endPoint, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data.status);
                    alert(JSON.stringify(data))
                    navigate("/")
                })
        } else {
            alert("datos incorre tos");
        }
    }
    return (
        <form action="" id="formulario2" ref={formRegister2}>
            <h3>Alta Bus</h3>

            <Input type={"hidden"} id={"id"} inputName={"idBus"} textLabel={"Id bus: "} value={generatedID} />
            <Input type="text" value={generatedID} disabled />
            <Input type={"text"} id={"plate"} inputName={"busPlate"} textLabel={"Bus plate: "} divClassName="" />
            <Input type={"number"} id={"seats"} inputName={"seats"} textLabel={"Number of seats: "} />
            <Input type={"text"} id={"date"} inputName={"date"} textLabel={"Discharge date: "} value={todayValue} />
            <div>
                <label htmlFor="">Type: </label> <br />
                <select name="type" id="sats">
                    <option value="Turismo">Turismo</option>
                    <option value="Lujo">escolar</option>
                </select>
            </div>
            <Input type={"text"} id={"name"} inputName={"name"} textLabel={"Driver's name: "} divClassName="" />
            <Input type={"hidden"} id={"number"} inputName={"licence"} textLabel={"License number: "} value={randomValue} />
            <Input type="text" value={randomValue} disabled />
            <button type="button" id="btnB" onClick={handlerClick}>Register</button>
        </form>

    );
}

export default FormBus;