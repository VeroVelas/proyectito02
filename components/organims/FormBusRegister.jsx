import Logo from "../atoms/Logo";
import Input from "../atoms/Input";
import Button from "../atoms/Button"
function FormBusRegister() {
    return (
        <>
            <div>
                <Logo/>
            </div>
            <form>
                <Input msn="Bus key"/>
                <Input msn="Bus plate"/>
                <Input msn="Seat number"/>
                <Input msn="Discharge date"/>
                <Input msn="Type"/>
                <Input msn="Driver's name"/>
                <Input msn="License number"/>
                <Button msj="Register bus"/>
            </form>
        </>
    );
}

export default FormBusRegister;