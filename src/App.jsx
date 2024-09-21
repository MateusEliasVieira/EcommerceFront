import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home.jsx";
import Cart from "./views/cart/Cart.jsx";
import Login from "./views/login/Login.jsx";
import {cart, home, login, newuser} from "./urls/Urls.js";
import NewUser from "./views/newuser/NewUser.jsx";

function App() {

    return (
        <BrowserRouter basename="">
            <Routes>
                <Route path={home} element={<Home/>}/>
                <Route path={cart} element={<Cart/>}/>
                <Route path={login} element={<Login/>}/>
                <Route path={newuser} element={<NewUser/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
