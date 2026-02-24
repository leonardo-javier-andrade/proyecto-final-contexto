import { useState } from "react"


const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const handleChangeEmail = (e) => {
       setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: " + email + "; Password: " + password)}

    return (
            <section className="login">
                <h1>Bienvenido, inicia seción</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Ingrese su email"
                    onChange={handleChangeEmail}
                    />
                    <input type="password" placeholder="Ingrese su contraseña" onChange={handleChangePassword}/>
                    <button>Iniciar sesión</button>
                </form>


            </section>
    )
}

export { Login }