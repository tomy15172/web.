const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const music = document.getElementById("background-music");  // Nueva línea para el audio

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            // NUEVO: Reproducir música cuando se abre la carta
            if (music) {
                music.play().catch((error) => {
                    console.log('Error al reproducir música:', error);
                });
            }

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            // NUEVO: Pausar música cuando se cierra la carta
            if (music) {
                music.pause();
                music.currentTime = 0; // Reinicia desde el inicio
            }

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }
    } 
})