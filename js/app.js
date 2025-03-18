document.addEventListener("DOMContentLoaded", () => {
    const members = [
        { 
            id: "RM", 
            name: "RM (Kim Namjoon)", 
            birth: "12 de septiembre de 1994", 
            role: "Líder, Rapero principal", 
            img: "img/RM.jpg",
            realName: "Kim Namjoon (김남준)",
            birthPlace: "Ilsan, Goyang, Corea del Sur",
            highlight: [
                "Es el líder del grupo y el primer miembro en unirse a BigHit Entertainment.",
                "Tiene un alto coeficiente intelectual (148) y habla inglés con fluidez.",
                "Ha trabajado en la composición de muchas canciones de BTS y de otros artistas.",
                "En 2018 lanzó su mixtape mono., mostrando su estilo introspectivo y artístico."
            ]
        },
        { 
            id: "Jin", 
            name: "Jin (Kim Seokjin)", 
            birth: "4 de diciembre de 1992", 
            role: "Vocalista", 
            img: "img/Jin.jpg",
            realName: "Kim Seokjin (김석진)",
            birthPlace: "Anyang, Gyeonggi, Corea del Sur",
            highlight: [
                "Fue descubierto por BigHit mientras estudiaba cine en la Universidad Konkuk.",
                "Es conocido por su voz melodiosa y su sentido del humor.",
                "Ha lanzado canciones en solitario como Epiphany y Abyss.",
                "Su solo The Astronaut fue una colaboración con Coldplay."
            ]
        },
        { 
            id: "Suga", 
            name: "Suga (Min Yoongi)", 
            birth: "9 de marzo de 1993", 
            role: "Rapero, Productor", 
            img: "img/Suga.jpg",
            realName: "Min Yoongi (민윤기)",
            birthPlace: "Daegu, Corea del Sur",
            highlight: [
                "Antes de BTS, era productor musical underground bajo el nombre 'Gloss'.",
                "Ha lanzado mixtapes bajo el nombre de Agust D, mostrando un lado más crudo y personal.",
                "Ha trabajado con varios artistas como PSY, IU y Halsey."
            ]
        },
        { 
            id: "J-Hope", 
            name: "J-Hope (Jung Hoseok)", 
            birth: "18 de febrero de 1994", 
            role: "Rapero, Bailarín principal", 
            img: "img/J-Hope.jpg",
            realName: "Jung Hoseok (정호석)",
            birthPlace: "Gwangju, Corea del Sur",
            highlight: [
                "Antes de unirse a BTS, era bailarín en su ciudad natal.",
                "Su mixtape Hope World fue un éxito global.",
                "Es conocido por su energía positiva y sus habilidades de baile.",
                "Fue el primer miembro en lanzar un álbum en solitario bajo Hybe, Jack in the Box."
            ]
        },
        { 
            id: "Jimin", 
            name: "Jimin (Park Jimin)", 
            birth: "13 de octubre de 1995", 
            role: "Vocalista, Bailarín principal", 
            img: "img/Jimin.jpg",
            realName: "Park Jimin (박지민)",
            birthPlace: "Busan, Corea del Sur",
            highlight: [
                "Estudió danza contemporánea en la Escuela de Artes de Busan.",
                "Es conocido por su voz dulce y sus movimientos elegantes.",
                "Ha lanzado éxitos en solitario como Lie, Serendipity y Like Crazy.",
                "En 2023, su álbum FACE debutó en el #1 en Billboard."
            ]
        },
        { 
            id: "V", 
            name: "V (Kim Taehyung)", 
            birth: "30 de diciembre de 1995", 
            role: "Vocalista", 
            img: "img/V.jpg",
            realName: "Kim Taehyung (김태형)",
            birthPlace: "Daegu, Corea del Sur",
            highlight: [
                "Fue el último miembro en ser revelado por BigHit.",
                "Su voz profunda y única le ha dado una identidad especial en BTS.",
                "Ha lanzado canciones como Singularity, Winter Bear y Love Me Again.",
                "Su álbum en solitario Layover mostró su lado más artístico y melancólico."
            ]
        },
        { 
            id: "Jungkook", 
            name: "Jungkook (Jeon Jungkook)", 
            birth: "1 de septiembre de 1997", 
            role: "Vocalista principal", 
            img: "img/Jungkook.jpg",
            realName: "Jeon Jungkook (전정국)",
            birthPlace: "Busan, Corea del Sur",
            highlight: [
                "Se unió a BTS a los 15 años, rechazando otras compañías para seguir a RM.",
                "Ha sido apodado el 'Golden Maknae' por su talento en canto, baile y deportes.",
                "En 2023, lanzó su álbum GOLDEN, con éxitos como Seven y Standing Next to You."
            ]
        }
    ];

    const memberList = document.querySelectorAll("#members ul li img");

    // Crear el modal en el HTML
    const modal = document.createElement("div");
    modal.id = "member-modal";
    document.body.appendChild(modal);

    memberList.forEach(img => {
        img.addEventListener("click", () => {
            const memberId = img.alt.trim();
            const member = members.find(m => m.id === memberId);

            if (member) {
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img src="${member.img}" alt="${member.name}">
                        <h2>${member.name}</h2>
                        <p><strong>Nombre real:</strong> ${member.realName}</p>
                        <p><strong>Fecha de nacimiento:</strong> ${member.birth}</p>
                        <p><strong>Lugar de nacimiento:</strong> ${member.birthPlace}</p>
                        <p><strong>Rol en BTS:</strong> ${member.role}</p>
                        <p><strong>Dato destacado:</strong></p>
                        <ul>
                            ${member.highlight.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
                modal.classList.add("show");
                document.body.style.overflow = "hidden";
            }
        });
    });

    // Cerrar el modal
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("close") || e.target === modal) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });
});
