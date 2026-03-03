import imageApp from "../assets/image-app.png"
import imageLogin from "../assets/image-login.png"
import imageRegister from "../assets/image-register.png"
import tecnologies from "../assets/tecnologias.png"

import { useNavigate } from "react-router-dom"

const Acerca = () => {
    const navigate = useNavigate()
    const handleback = () => {
        navigate("/")
    }
    return (
        <section>
            <h1>APP- TP Final</h1>

            <article className="Introduccion">

                <div>
                    <h2>Información del Proyecto</h2>
                    <p>Es una aplicacion de mensajeria inspirado en la plataforma de "Whatsapp". El objetivo principal del proyecto es llevar adelante los conocimientos aprendidos a lo largo del presente curso, poder detectar errores y soluciones practicas a los diferentes desafios que se fueron presentando.</p>
                    <p>
                       <br/><strong>Gestión de Estado Global con React Context:</strong> Para garanizar una gestion de datos entre paginas se incorporaron herramientas de react como "Context" , permitiendo un flujo de información bidireccional (envío y recepción) entre las diferentes páginas de la aplicación para diferentes funciones.<br/>
                        <br/><strong>Enrutamiento Dinámico:</strong> Utilizando React Router DOM, se gestionó la navegación de la SPA (Single Page Application), permitiendo una experiencia de navegación  y la protección de rutas mediante hooks como useNavigate.<br/>
                        <br/><strong>Persistencia de Datos con LocalStorage:</strong> Se utilizó el almacenamiento local para la persistencia de la información y la simulación de una base de datos, asegurando que las sesiones de usuario y los nuevos registros  incluso tras recargar el navegador.<br/>


                    </p>
                </div>
                <aside>

                    <h2>Tecnologias Utilizadas</h2>
                    <img src={tecnologies} alt="logos de tecnologias" className="tecnology" />
                    <ul>
                        <li><a href="https://es.wikipedia.org/wiki/HTML" target="_blank">Html</a></li>
                        <li><a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank">Js</a></li>
                        <li><a href="https://es.wikipedia.org/wiki/CSS" target="_blank">Css</a></li>
                        <li><a href="https://es.wikipedia.org/wiki/React" target="_blank">React</a></li>
                    </ul>
                </aside>
            </article>
            <article className="partesApp">
                <h2>Partes Principales del Proyecto</h2>
                <div className="descriptionApp">
                    <span>
                        <h3>Aside</h3>
                        <p>Es la parte del proyecto donde se encuentran los contactos, el buscador y el boton de cerrar sesion</p>
                        <p>
                        <br/><strong>Gestión de Sesión y Navegación:</strong> Incluye un botón para cerrar sesión y un encabezado institucional con enrutamiento dinámico hacia la sección informativa. <br/>
                        <br/><strong>Buscador:</strong> Campo de entrada que filtra contactos en tiempo real para encontrarlos rápidamente.<br/>
                        <br/><strong>Visualización de Contactos:</strong> Muestra una lista de contactos con información relevante, como nombre, apellido, ciudad y foto de perfil.
                        </p>
                    </span>

                    <img src={imageApp} alt="APP descripta Aside/Chat" className="image-app" />
                      <span>
                        <h3>Chat</h3>
                        <p>Componente principal de comunicación que permite la interaccion con la mensajería</p>
                        <p>
                        <br/><strong>Header:</strong> Muestra foto, nombre y ciudad del contacto seleccionado desde el "Aside". <br/>
                        <br/><strong>Visualizacion de Mensajes:</strong> Renderiza el historial del chat y actualiza automáticamente los mensajes enviados.<br/>
                        <br/><strong>Interfaz de mensajes:</strong> Campo de texto para redactar y enviar mensajes, integrándolos de forma inmediata a la conversación.
                        </p>
                    </span>
                </div>

                <div className="descriptionLogin">
                    <img src={imageLogin} alt="Imagen Login" className="image-login" />
                    <span>
                        <h3>Login</h3>
                        <p>Puerta de acceso a la aplicación, encargada de validar credenciales y gestionar la navegación inicial.</p>
                        <p>
                            <br/><strong>Campos de entrada:</strong>Inputs para Email y Password.<br/>
                            <br/><strong>Validación de Credenciales:</strong> Verifica la autenticidad de los datos ingresados, mostrando mensajes de error en caso de ser necesario.<br/>
                            <br/><strong>Navegación Condicional:</strong> Redirige a la página principal tras un inicio de sesión exitoso o a la página de registro para nuevos usuarios.
                        </p>
                    </span>                </div>
                <div className="descriptionRegister">
                    <img src={imageRegister} alt="Imagen Register" className="image-register"/>
                    <span>
                        <h3>Registro</h3>
                        <p>Es la sección de la incorporación para la creacion de nuevos perfiles a la base de datos de la aplicación</p>
                        <p>
                            <br/><strong>Inputs de entradas:</strong>Son los encargados de ingresar los datos del usuario que se encuentran en la base de datos (nombre, apellido, email,etc)<br/>
                            <br/><strong>Validación de contraseña:</strong> Campos de contraseña con requerimiento minimo de caracteres y reingreso de contraseña.<br/>
                            <br/><strong>Personalizacion:</strong> Accion opcional que le permite al usuario agregar una imagen de perfil (solo url de imagen) <br/>
                            <br/><strong>Boton Enviar:</strong> Accion que le permite enviar los datos a la base de datos y mantener logueado.<br/>
                        </p>
                    </span>
                    
                </div>            
            </article>
            <article className="deciciones">
                <h2>Decisiones de desarrollo tomadas</h2>
                <p>En este sector se encontraran las principales deciciones tomadas en cuanto al desarrolo de la app</p>
                <p>
                            <br/><strong>Login:</strong>Se decidio que para una mejor experiencia de usuario, en caso de error  que el mismo se vea detalaldo (siendo que si es email o contraseña)<br/>
                            <br/><strong>Persistencia de la data:</strong> Se utiliza el localStorage para almacenar los datos de usuario y poder mantener la sesion activa y luego para crear una nueva API la cual simula una base de datos y que la app pueda acceder a los datos, todo ello independientemente que se actualice la pagina o no.<br/>
                            <br/><strong>Diseño:</strong> se opto por colores suaves y neutros para un ambiente agradable a todos. <br/>
                            <br/><strong>Imagen de perfil:</strong> En cuanto a la imagenes de perfil, se opto por la carga de una direccion url siendo que el localStorage solo admite strings.<br/>
                        </p>
            </article>
            <article className="Observaciones-Dificultades">
                <div className="observaciones">
                    <h2>Observaciones Personales</h2>
                    <p>En lo personal, el proyecto me parecio un desafio interesante y enriquecedor. Me permitio aplicar los conocimientos adquiridos a lo largo del curso y enfrentarme a situaciones reales de desarrollo. A pesar de las dificultades que surgieron en el camino, logre superarlas y completar el proyecto con exito.</p>
                </div>
                <div className="dificultades">
                    <h2>Dificultades Encontradas</h2>
                    <p>Una de las principales dificultades que se presento durante el desarrollo del proyecto fue la gestion del estado y la comunicacion entre componentes. Para solucionar esto, se utilizo el Context API de React para compartir el estado global entre los componentes. Otra dificultad fue la implementacion de la funcionalidad de registro y login, ya que se tuvo que manejar la validacion de los datos ingresados por el usuario y la gestion de errores.</p>
                </div>
            </article>
                        <button className="volverlogin" onClick={handleback}>Volver</button>

        </section>
    )
}


export { Acerca }