import imageApp from "../assets/image-app.png"
import imageLogin from "../assets/image-login.png"
import imageRegister from "../assets/image-register.png"

import { useNavigate } from "react-router-dom"

const Acerca = () => {
    const navigate = useNavigate()
    const handleback = () => {
        navigate("/")
    }
    return (
        <section>
            <h1>AAP- TP Final</h1>

            <article className="Introduccion">

                <div>
                    <h2>Información del Proyecto</h2>
                    <p>Es una aplicacion de mensajeria inspirado en la plataforma de "Whatsapp". El objetivo principal del proyecto es llevar adelante los conocimientos aprendidos a lo largo del presente curso, poder detectar errores y soluciones practicas a los diferentes desafios que se fueron presentando.</p>
                </div>
                <aside>
                    <h2>Tecnologias Utilizadas</h2>
                    <ul>
                        <li>Html</li>
                        <li>Js</li>
                        <li>React</li>
                        <li>Vite</li>
                    </ul>
                </aside>
            </article>
            <article className="partesApp">
                <h2>Partes Principales del Proyecto</h2>
                <div className="descriptionApp">
                    <span>
                        <h3>Aside</h3>
                        <p>Es la parte del proyecto donde se encuentran los contactos, el buscador y el boton de cerrar sesion</p>
                    </span>

                    <img src={imageApp} alt="APP descripta Aside/Chat" className="image-app" />
                    <span>
                        <h3>Chat</h3>
                        <p>Es la parte del proyecto donde se encuentran los mensajes, el input para escribir y el boton de enviar</p>
                    </span>
                </div>

                <div className="descriptionLogin">
                    <img src={imageLogin} alt="Imagen Login" className="image-login" />
                    <p>Es la parte del proyecto donde se encuentra el login de usuarios</p>
                </div>
                <div className="descriptionRegister">
                    <img src={imageRegister} alt="Imagen Register" className="image-register"/>
                    <p>Es la parte del proyecto donde se encuentra el registro de usuarios</p>
                </div>            
            </article>
            <article className="deciciones">
                <h2>Decisiones de Diseño</h2>
                <p>En cuanto a las decisiones de diseño, se opto por una paleta de colores neutros y suaves para crear un ambiente agradable y relajante. Se utilizo una tipografia clara y legible para facilitar la lectura de los mensajes. En cuanto a la estructura, se dividio la aplicacion en componentes reutilizables para mejorar la mantenibilidad y escalabilidad del proyecto.</p>
            </article>
            <article className="Observaciones-Dificultades">
                <div className="observaciones">
                    <h2>Observaciones Personales</h2>
                    <p>En lo personal, el proyecto me parecio un desafio interesante y enriquecedor. Me permitio aplicar los conocimientos adquiridos a lo largo del curso y enfrentarme a situaciones reales de desarrollo. A pesar de las dificultades que surgieron en el camino, logre superarlas y completar el proyecto con exito.</p>
                </div>
                <div className="dificultades">
                    <h2>Dificultades Encontradas</h2>
                    <p>Una de las principales dificultades que se presento durante el desarrollo del proyecto fue la gestion del estado y la comunicacion entre componentes. Para solucionar esto, se utilizo el Context API de React para compartir el estado global entre los componentes y evitar el prop drilling. Otra dificultad fue la implementacion de la funcionalidad de registro y login, ya que se tuvo que manejar la validacion de los datos ingresados por el usuario y la gestion de errores.</p>
                </div>
            </article>
                        <button className="volverlogin" onClick={handleback}>Volver</button>

        </section>
    )
}


export { Acerca }