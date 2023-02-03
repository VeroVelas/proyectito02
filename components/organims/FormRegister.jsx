import Logo from "../atoms/Logo";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
function FormRegister() {
    return (
        <>
            <div>
                <Logo/>
            </div>
            <form>
                <Input msn="Name"/>
                <Input msn="E-mail"/>
                <Input msn="Username"/>
                <Input msn="Password"/>
                <Button msj="Sing in"/>
            </form>
        </>
    );
}

export default FormRegister;