import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bus from "../pages/Bus";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="bus" element = {<Bus/>} />
                <Route path="/" element = {<Login/>} />
                <Route path="/register" element = {<Register/>} />
                <Route path="/*" element = {<NotFound/>} />
            </Routes>
        </BrowserRouter>
     );
}

export default App;
