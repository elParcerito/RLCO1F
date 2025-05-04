function verDetalles() {
    // Obtener el código ingresado
    let codigo = document.getElementById("codigo").value.trim().toLowerCase(); // Convertimos a minúsculas
            
            

            var paginas = {
                "1": "TRD/secre/secre.html", /* secretario */
                "2": "TRD/presi/pre.html",   /* presidente */
                "3": "TRD/clash/vice.html", /* vicepresidente */
                "4": "TRD/apoyo/apoyo.html",   /* delegado de apoyo */
                "5": "TRD/teso/teso.html",   /* tesorero */
                "6": "TRD/del traba/trab.html",   /* delegado de trabajos */
                "7": "TRD/depo/depo.html",   /* delegado de deporte y convivencia */
                "8": "TRD/estudi/norm.html" ,  /* estudiantes */
                
            };

            if (paginas[codigo]) {
                window.location.href = paginas[codigo];
            } else {
                alert("Código incorrecto. Inténtalo de nuevo.");
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
    
const botonmodo = document.getElementById("modo");
botonmodo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botonmodo.textContent = "modo claro";
    } else {
        botonmodo.textContent = "modo oscuro";
    }
})
        