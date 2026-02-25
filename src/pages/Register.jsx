import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {

        const navigate = useNavigate()
        const handleback = () => {
            navigate("/login")
        }
const[ firstName, setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [ city,setCity] = useState("")
const [ email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [ password2, setPassword2] = useState("")
const [error, setError] = useState(null)


const handleChangeFirstname =(e) =>{
    setFirstName(e.target.value)
}

const handleChangeLastName = (e) =>{
    setLastName(e.target.value)
}

const handleChangeCity = (e)=>{
    setCity(e.target.value)
}

const handleChangeEmail = (e)=> {
    setEmail(e.target.value)
}

const handleChangePassword = (e)=>{
    setPassword(e.target.value)
}

const handleChangePassword2 = (e) =>{
    setPassword2(e.target.value)
}

const SendForm = (e)=>{
    e.preventDefault()
    console.log({firstName, lastName, city, email, password, password2})


    if (password === password2) {
        setError(null)
    }
    else {
        setError (true)
    }
        console.log(error, "valor del error")
    }


    return (
        <section className="register">
            <h1>Bienvenido al registro de usuarios</h1>
            <form className="form-register">
                <div>
                    <p>Nombre: </p>
                    <input type="text" placeholder="Ingrese su nombre" onChange={handleChangeFirstname}/>
                </div>
               <div>
                <p>Apellido: </p>
                <input type="text" placeholder ="Ingrese su apellido" onChange={handleChangeLastName} />
               </div>
               <div>
                <p>Ciudad: </p>
                <input type="text" placeholder="Ingrese su Ciudad" onChange={handleChangeCity} />
               </div>
               <div>
                <p>Email: </p>
                <input type="email" placeholder="Ingrese su e-mail"  onChange={handleChangeEmail}/>
               </div>
               <div>
                <p>Contraseña: </p>
                <input type="password" placeholder="Ingrese su password" onChange={handleChangePassword} />

               </div>
               <div>
                <p>Reingrese su contraseña: </p>
                 <input type="password" placeholder="Reingrese su password" onChange={handleChangePassword2}/>
               {error && <p className="error-password">Las contraseñas no son iguales</p>}
               </div>
                
                <button onClick={SendForm}>Enviar</button>

            </form>

            <button className="volverlogin" onClick={handleback}>Volver</button>
        </section>

    )
}


export {Register  }