document.addEventListener("DOMContentLoaded", function () {
    const fotoActual = document.getElementById("fotoActual");
    const prevBtn = document.querySelector(".foto-prev");
    const nextBtn = document.querySelector(".foto-next");
    
    if (!fotoActual || !prevBtn || !nextBtn) return;

    // Definir las imágenes para cada álbum según el título de la página
    const albumes = {
        "2 COOL 4 SKOOL - BTS": [
            "img_single/album01/01.jpg",
            "img_single/album01/1.jpg",
            "img_single/album01/2.jpg",
            "img_single/album01/4.jpg",
            "img_single/album01/5.jpg",
            "img_single/album01/6.jpg",
            "img_single/album01/7.jpg"
        ],
        "O!RUL8,2? - BTS": [
            "img_single/album02/0.jpeg",
            "img_single/album02/1.jpg",
            "img_single/album02/2.jpg",
            "img_single/album02/3.jpg",
            "img_single/album02/4.jpg",
            "img_single/album02/5.jpg",
            "img_single/album02/6.jpg",
            "img_single/album02/7.jpg"
        ],
        "SKOOL LUV AFFAIR - BTS": [
            "img_single/album03/0.jpg",
            "img_single/album03/1.jpg",
            "img_single/album03/2.jpg",
            "img_single/album03/3.jpg",
            "img_single/album03/4.jpg",
            "img_single/album03/5.jpg",
            "img_single/album03/6.jpg",
            "img_single/album03/7.jpg"
        ],

        "DARK & WILD - BTS": [
            "img_single/album04/0.jpg",
            "img_single/album04/1.jpg",
            "img_single/album04/2.jpg",
            "img_single/album04/3.jpg",
            "img_single/album04/4.jpg",
            "img_single/album04/5.jpg",
            "img_single/album04/6.jpg",
            "img_single/album04/7.jpg"
        ],
        "THE MOST BEAUTIFUL MOMENT IN LIFE PT.1 - BTS": [
            "img_single/album05/0.jpg",
            "img_single/album05/1.jpg",
            "img_single/album05/2.jpg",
            "img_single/album05/3.jpg",
            "img_single/album05/4.jpg",
            "img_single/album05/5.jpg",
            "img_single/album05/6.jpg",
            "img_single/album05/7.jpg"
        ],

        "THE MOST BEAUTIFUL MOMENT IN LIFE PT.2 - BTS": [
            "img_single/album06/0.jpg",
            "img_single/album06/1.jpg",
            "img_single/album06/2.jpg",
            "img_single/album06/3.jpg",
            "img_single/album06/4.jpg",
            "img_single/album06/5.jpg",
            "img_single/album06/6.jpg",
            "img_single/album06/7.jpg"
        ],

        "THE MOST BEAUTIFUL MOMENT IN LIFE : YOUNG FOREVER - BTS": [
            "img_single/album07/0.jpg",
            "img_single/album07/1.jpg",
            "img_single/album07/2.jpg",
            "img_single/album07/3.jpg",
            "img_single/album07/4.jpg",
            "img_single/album07/5.jpg",
            "img_single/album07/6.jpg",
            "img_single/album07/7.jpg"
        ],

        "WINGS- BTS": [
            "img_single/album08/0.jpg",
            "img_single/album08/1.jpg",
            "img_single/album08/2.jpg",
            "img_single/album08/3.jpg",
            "img_single/album08/4.jpg",
            "img_single/album08/5.jpg",
            "img_single/album08/6.jpg",
            "img_single/album08/7.jpg"
        ],

        "YOU NEVER WALK ALONE - BTS": [
            "img_single/album09/0.jpg",
            "img_single/album09/1.jpg",
            "img_single/album09/2.jpg",
            "img_single/album09/3.jpg",
            "img_single/album09/4.jpg",
            "img_single/album09/5.jpg",
            "img_single/album09/6.jpg",
            "img_single/album09/7.jpg"
        ],

        "LOVE YOURSELF 承 ‘HER’- BTS": [
            "img_single/album10/0.jpg",
            "img_single/album10/1.jpg",
            "img_single/album10/2.jpg",
            "img_single/album10/3.jpg",
            "img_single/album10/4.jpg",
            "img_single/album10/5.jpg",
            "img_single/album10/6.jpg",
            "img_single/album10/7.jpg"
        ],

        "LOVE YOURSELF轉 ‘TEAR’- BTS": [
            "img_single/album11/0.jpg",
            "img_single/album11/1.jpg",
            "img_single/album11/2.jpg",
            "img_single/album11/3.jpg",
            "img_single/album11/4.jpg",
            "img_single/album11/5.jpg",
            "img_single/album11/6.jpg",
            "img_single/album11/7.jpg"
        ],

        "LOVE YOURSELF結 ‘ANSWER’- BTS": [
            "img_single/album12/0.jpg",
            "img_single/album12/1.jpg",
            "img_single/album12/2.jpg",
            "img_single/album12/3.jpg",
            "img_single/album12/4.jpg",
            "img_single/album12/5.jpg",
            "img_single/album12/6.jpg",
            "img_single/album12/7.jpg"
        ],

        "MAP OF THE SOUL : PERSONA- BTS": [
            "img_single/album13/0.jpg",
            "img_single/album13/1.jpg",
            "img_single/album13/2.jpg",
            "img_single/album13/3.jpg",
            "img_single/album13/4.jpg",
            "img_single/album13/5.jpg",
            "img_single/album13/6.jpg",
            "img_single/album13/7.jpg"
        ],

        "MAP OF THE SOUL : 7 - BTS": [
            "img_single/album14/0.jpg",
            "img_single/album14/1.jpg",
            "img_single/album14/2.jpg",
            "img_single/album14/3.jpg",
            "img_single/album14/4.jpg",
            "img_single/album14/5.jpg",
            "img_single/album14/6.jpg",
            "img_single/album14/7.jpg"
        ],

        "DYNAMITE - BTS": [
            "img_single/album15/0.jpg",
            "img_single/album15/1.jpg",
            "img_single/album15/2.jpg",
            "img_single/album15/3.jpg",
            "img_single/album15/4.jpg",
            "img_single/album15/5.jpg",
            "img_single/album15/6.jpg",
            "img_single/album15/7.jpg"
        ],

        "BE - BTS": [
            "img_single/album16/0.jpg",
            "img_single/album16/1.jpg",
            "img_single/album16/2.jpg",
            "img_single/album16/3.jpg",
            "img_single/album16/4.jpg",
            "img_single/album16/5.jpg",
            "img_single/album16/6.jpg",
            "img_single/album16/7.jpg"
        ],

        "BUTTER - BTS": [
            "img_single/album17/0.jpg",
            "img_single/album17/1.jpg",
            "img_single/album17/2.jpg",
            "img_single/album17/3.jpg",
            "img_single/album17/4.jpg",
            "img_single/album17/5.jpg",
            "img_single/album17/6.jpg",
            "img_single/album17/7.jpg"
        ],

        "BUTTER - BTS": [
            "img_single/album18/0.jpg",
            "img_single/album18/1.jpg",
            "img_single/album18/2.jpg",
            "img_single/album18/3.jpg",
            "img_single/album18/4.jpg",
            "img_single/album18/5.jpg",
            "img_single/album18/6.jpg",
            "img_single/album18/7.jpg"
        ],

        "PROOF - BTS": [
            "img_single/album19/0.jpg",
            "img_single/album19/1.jpg",
            "img_single/album19/2.jpg",
            "img_single/album19/3.jpg",
            "img_single/album19/4.jpg",
            "img_single/album19/5.jpg",
            "img_single/album19/6.jpg",
            "img_single/album19/7.jpg"
        ],

        "TAKE TWO - BTS": [
            "img_single/album20/0.jpeg",
            "img_single/album20/1.jpeg",
            "img_single/album20/2.jpeg"
            
        ]

    };

    // Obtener el título de la página y definir el álbum actual
    const tituloPagina = document.title;
    const fotos = albumes[tituloPagina] || [];
    let indiceActual = 0;

    if (fotos.length > 0) {
        fotoActual.src = fotos[indiceActual];
    }

    // Función para cambiar la imagen
    function cambiarImagen(direccion) {
        indiceActual = (indiceActual + direccion + fotos.length) % fotos.length;
        fotoActual.src = fotos[indiceActual];
    }

    // Eventos de los botones
    prevBtn.addEventListener("click", () => cambiarImagen(-1));
    nextBtn.addEventListener("click", () => cambiarImagen(1));

    // Modal para ver la imagen en grande
    const fotoModal = document.getElementById("fotoModal");
    const fotoModalImg = document.getElementById("fotoModalImg");
    const closeModal = document.querySelector(".close");

    fotoActual.addEventListener("click", () => {
        if (fotoModal) {
            fotoModal.style.display = "block";
            fotoModalImg.src = fotoActual.src;
        }
    });

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            if (fotoModal) fotoModal.style.display = "none";
        });
    }
});




// Funcionalidad de la reproducción de audio y letras
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById("audio-player");
const progressBar = document.getElementById("progress-bar");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");
const songList = document.querySelectorAll(".song-item");
const lyricsBox = document.getElementById("lyrics-box");
let currentSongIndex = 0;

// Función para actualizar la letra
function loadLyrics(lyricsPath) {
    fetch(lyricsPath)
        .then(response => response.text())
        .then(data => {
            lyricsBox.textContent = data;
        })
        .catch(error => {
            lyricsBox.textContent = "No se pudo cargar la letra de la canción.";
        });
}

// Actualizar la barra de progreso y los tiempos
audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;

    // Mostrar el tiempo actual y el total en minutos y segundos
    const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
    const totalMinutes = Math.floor(audioPlayer.duration / 60);
    const totalSeconds = Math.floor(audioPlayer.duration % 60);

    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}`;
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}`;
});

// Cambiar la canción
function changeSong(index) {
    const song = songList[index];
    const songSrc = song.getAttribute("data-song");
    const lyricsPath = song.getAttribute("data-lyrics");

    audioPlayer.src = songSrc;
    audioPlayer.play();
    playPauseBtn.textContent = "❚❚"; // Pausar

    // Cargar la letra correspondiente
    loadLyrics(lyricsPath);
}

// Botón de play/pause
playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "❚❚"; // Pausar
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "►"; // Reproducir
    }
});

// Botón de siguiente
nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    changeSong(currentSongIndex);
});

// Botón de anterior
prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    changeSong(currentSongIndex);
});

// Manejar selección de canción desde la lista
songList.forEach((song, index) => {
    song.addEventListener("click", () => {
        currentSongIndex = index;
        changeSong(currentSongIndex);
    });
});



});



