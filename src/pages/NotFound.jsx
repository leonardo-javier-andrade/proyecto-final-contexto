import logonotfound from "../assets/image-notfound.png"



const NotFound =()=>{
    return(
    <section className="cont-not-found"> 
    <h1>404 -La Pagina no se encuentra</h1>
    <img src={logonotfound} alt="Imagen de página no encontrada" /> 
     <a href="/">Ir al home</a>
    </section>
    )
}

export {NotFound}