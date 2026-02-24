import { Fragment } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"   
import {Home} from '../pages/Home.jsx' 
import{NotFound} from'../pages/NotFound.jsx'
import { Login } from "../pages/Login.jsx"

const RouterApp =() =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/"  element={<Home/>}/>             
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export {RouterApp}