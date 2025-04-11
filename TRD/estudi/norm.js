function verDetalles() { 
    // Obtener el código ingresado
    let codigo = document.getElementById("codigo").value.trim().toLowerCase(); // Convertimos a minúsculas

    if (codigo === "") {
        alert("Por favor, ingrese un código válido.");
        return;
    }

    // Simulación de datos con claves en minúsculas
    let detallesentrega = {
        "presi": { 
            Nombre: "Cesar Muñoz", 
            Cargo: "Presidente", 
            Funciones: "Encargado de la gestión y dirección estratégica, coordinando el equipo directivo y asegurando el cumplimiento de los objetivos organizacionales.", 
            Contacto: "No se ha proporcionado información" 
        },

        "vice": { 
            Nombre: "Maximiliano Arevalo", 
            Cargo: "vicepresidente", 
            Funciones: "Asume la dirección estratégica en ausencia del presidente, supervisa la ejecución de proyectos clave y apoya en la toma de decisiones estratégicas, garantizando la continuidad del curso.", 
            Contacto: "No se ha proporcionado información" 
        },

        "sec": { 
            Nombre: "Sebastian Suarez", 
            Cargo: "Secretario", 
            Funciones: "Responsable de la organización y gestión administrativa del curso, llevando actas, gestionando la comunicación interna y asegurando el registro adecuado de las actividades y decisiones.", 
            Contacto: "+56 9 9684 9297 (si vas a comunicarte que sea por whatsapp, iniciar nombre1+apellido1 y tu problema o duda) "
        },

        "teso": {
            Nombre: "",
            Cargo: "Tesorero",
            Funciones: "Encargado de la gestión financiera del curso, controlando los ingresos y egresos, elaborando presupuestos y asegurando el buen manejo de los recursos económicos.",
            Contacto: "No se ha proporcionado informacion"
        },

        "apoyo": {
            Nombre: "",
            Cargo: "Delegado de apoyo directivo",
            Funciones: "Asiste al equipo directivo en la ejecución de estrategias y actividades, asegurando una buena comunicación y apoyo en la toma de decisiones.",
            Contacto: "No se ha proporcionado informacion"
        },

        "trabajos": {
            Nombre: "Cristian Garrido",
            Cargo: "Delegado de trabajos",
            Funciones: "Organiza y supervisa las tareas del curso, asegurando que se cumplan los plazos y coordina el trabajo entre los miembros.",
            Contacto: "No se ha proporcionado informacion"
        },

        "deporte": {
            Nombre: "Jusephe Perez",
            Cargo: "Delegado de deporte y convivencia",
            Funciones: "Fomenta la participación en actividades deportivas y promueve un ambiente de convivencia saludable dentro del curso.",
            Contacto: "No se ha proporcionado informacion"
        }

    };

    // Buscar el código en el objeto
    if (detallesentrega[codigo]) {
        document.getElementById("nombre").innerText = detallesentrega[codigo].Nombre;
        document.getElementById("cargo").innerText = detallesentrega[codigo].Cargo;
        document.getElementById("funciones").innerText = detallesentrega[codigo].Funciones;
        document.getElementById("contacto").innerText = detallesentrega[codigo].Contacto;

        document.getElementById("detalles-entrega").style.display = "block";
    } else {
        alert("Código no encontrado.");
    }
    
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("codigo").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que se envíe un formulario si está dentro de uno
            verDetalles();
        }
    });
});