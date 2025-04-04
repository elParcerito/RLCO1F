function verDetalles() {
            var codigo = document.getElementById("codigo").value;

            var paginas = {
                "1": "TRD/secre.html",
                "2": "TRD/pre.html",
                "3": "TRD/clash.html",
                "4": "TRD/norm.html"
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
        