#  App - Proyecto Final 

Esta es una aplicación de mensajería instantánea inspirada en la plataforma **WhatsApp**. El objetivo principal es consolidar los conocimientos avanzados de React, enfrentando desafíos de arquitectura, gestión de flujos de datos y persistencia en el navegador.

---

## 🚀 Información del Proyecto

Es una aplicacion de mensajeria inspirado en la plataforma de "Whatsapp". El objetivo principal del proyecto es llevar adelante los conocimientos aprendidos a lo largo del presente curso, poder detectar errores y soluciones practicas a los diferentes desafios que se fueron presentando.

### Soluciones :
* **Gestión de Estado Global (React Context):** Para garanizar una gestion de datos entre paginas se incorporaron herramientas de react como `Context` , permitiendo un flujo de información bidireccional (envío y recepción) entre las diferentes páginas de la aplicación para diferentes funciones.
.
* **Enrutamiento Dinámico:** Utilizando `react-router-dom`, se gestionó la navegación y la protección de rutas mediante hooks como `useNavigate`.
* **Persistencia de Datos:** Se utilizó **LocalStorage** para la persistencia de la información y la **simulación de una base de datos**. Esto asegura que las sesiones de usuario, los nuevos registros y los mensajes se mantengan incluso tras recargar el navegador.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 / CSS:** Maquetación responsiva con colores suaves y neutros.
* **JavaScript :** Lógica funcional y manipulación de arreglos.
* **React.js:** Librería base para la interfaz de usuario.
* **React Router:** Para la navegación entre vistas.
* **Context API:** Para el manejo de datos globales.

---

## 📁 Estructura y Funcionalidades

### 1. Aside (Panel Lateral)
Es el cenatro de gestión de contactos y navegación:
* **Gestión de Sesión:** Botón de "Cerrar Sesión" y acceso a la sección informativa.
* **Buscador:** Filtra contactos en tiempo real mediante un input de búsqueda.
* **Lista de Usurios:** Renderizado dinámico de contactos con nombre, ciudad y foto.

### 2. Chat (Ventana Principal)
Interfaz de interacción directa:
* **Header Contextual:** Muestra la información del usuario seleccionado desde el Aside.
* **Historial de Mensajes:** Renderiza los chats cargados y actualiza automáticamente los nuevos envíos.
* **Input de Redacción:** Campo de texto para el envío inmediato de mensajes.

### 3. Login
Módulo de acceso seguro:
* **Validación de Credenciales:** Inputs para Email y Password con feedback visual en **letras rojas** detallando el error específico (*"Email no encontrado"* o *"Contraseña incorrecta"*).
* **Navegación:** Botones directos hacia el Registro y la página informativa "Acerca".

### 4. Registro
Incorporación de nuevos perfiles:
* **Formulario Completo:** Captura de Nombre, Apellido, Ciudad, Email, Contraseña y Reingreso de Contraseña.
* **Campos Opcionales:** Soporte para Ciudad y Dirección de imagen (URL), adaptándose a la estructura de la base de datos simulada.

---

## 🧠 Decisiones de Desarrollo

* **UX en Login:** Se decidió detallar el tipo de error (email o contraseña) para mejorar la experiencia del usuario.
* **Manejo de Imágenes:** Se optó por la carga mediante **URL (strings)** dado que el LocalStorage tiene límites de almacenamiento y solo admite cadenas de texto.
* **Sincronización:** Se implementó una lógica de actualización inmediata del LocalStorage al registrar nuevos usuarios para evitar desfases entre el estado de React y la persistencia física.

---

## 💻 Ejecución Local

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Correr el proyecto:**
    ```bash
    npm run dev
    ```

## 🌐 Deploy

Para realizar el deploy en  **Vercel**:
1. Ejecutar `npm run build`.
2. Vincular el repositorio y establecer la carpeta de salida como `dist`.

---

**Estudiante:** Andrade Leonardo- TP Final.