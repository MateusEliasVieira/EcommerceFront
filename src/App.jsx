import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home.jsx";
import Cart from "./views/cart/Cart.jsx";
import Login from "./views/login/Login.jsx";
import {cart, home, login} from "./urls/Urls.js";

function App() {

    return (
        <BrowserRouter basename="">
            <Routes>
                <Route path={home} element={<Home/>}/>
                <Route path={cart} element={<Cart/>}/>
                <Route path={login} element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
