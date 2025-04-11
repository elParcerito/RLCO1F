function verDetalles() {
    // Obtener el código ingresado
    let codigo = document.getElementById("codigo").value.trim().toLowerCase(); // Convertimos a minúsculas
            
            

            var paginas = {
                "1": "TRD/secre/secre.html", /* secretario */
                "2": "TRD/presi/pre.html",   /* presidente */
                "3": "TRD/clash.html", /* vicepresidente */
                "4": "TRD/estudi/norm.html"   /* estudiantes */
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
        