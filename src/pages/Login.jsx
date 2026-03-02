import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext.jsx"

const Login = ()=>{
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("")
    const [error, setError] = useState(null)
    const [mensajeErrorLogin, setMensajeErrorLogin] = useState("")

    const {login, handleUser} = useContext(ChatContext)

    const navigate = useNavigate()



    const handleChangeEmail = (e) => {
       setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        const response = login({email, password})
        console.log(response)



        if (!response.value){
            setError(true)
            setMensajeErrorLogin(response.message)
            return
        }

        if (response.value) {
            handleUser({email, password})
            console.log(response.message, "mensaje de bienvenida")
            navigate("/")
        }
    }
const handleClick =() =>{
    navigate ("/Registro")
}
    return (
            <section className="login">
                <h1>Bienvenido, inicia sesión</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Ingrese su email" onChange={handleChangeEmail}/>
                    <input type="password" placeholder="Ingrese su contraseña" onChange={handleChangePassword}/>
                    <button>Iniciar sesión</button>
                   {error && <p className="Error-login">{mensajeErrorLogin}</p>}
                </form>
                <p>No tienes usuario??</p>
                <button onClick={handleClick}> Ir a Registrarse</button>

            </section>
    )
}

export { Login }