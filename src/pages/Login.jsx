import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext.jsx"

const Login = ()=>{
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("")
    const [error, setError] = useState(null)

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

        if (!response){
            setError(true)
            return
        }

        if (response) {
            handleUser({email, password})
            navigate("/")
        }
    }
const handleClick =() =>{
    navigate ("/Register")
}
    return (
            <section className="login">
                <h1>Bienvenido, inicia sesión</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Ingrese su email" onChange={handleChangeEmail}/>
                    <input type="password" placeholder="Ingrese su contraseña" onChange={handleChangePassword}/>
                    <button>Iniciar sesión</button>
                   {error && <p className="Error-login">Error al iniciar sesion</p>}
                </form>
                <p>No tienes usuario??</p>
                <button onClick={handleClick}> Ir a Registrarse</button>

            </section>
    )
}

export { Login }