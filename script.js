import archivos from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const archivosList = document.getElementById("archivos-list");
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const suggestionBox = document.getElementById("suggestionBox");

    container.style.display = "none";

    archivos.sort((a, b) => b.lanzamiento - a.lanzamiento);

    function displayArchivos(filteredArchivos) {
        archivosList.innerHTML = "";

        filteredArchivos.forEach((archivo, index) => {
            const archivoDiv = document.createElement("div");
            archivoDiv.classList.add("archivo-box");
            archivoDiv.setAttribute("data-aos", "fade-up");
            archivoDiv.setAttribute("data-aos-delay", `${index * 800}`);

            archivoDiv.innerHTML = `
                <h1><strong>${archivo.titulo}</strong></h1>
                <h2><strong>${archivo.banda}</strong></h2>
                <img src="${archivo.portada}" alt="Portada" class="archivo-img" loading="lazy">
                <p><strong>Género:</strong> <em>${archivo.genero}</em></p>
                <p><strong>País:</strong> <em>${archivo.pais}</em></p>
                <p><strong>Tipo:</strong> <em>${archivo.tipo}</em></p>
                <p><strong>Formato:</strong> <em>${archivo.formato}</em></p>
                <p><strong>Lanzamiento:</strong> <em>${archivo.lanzamiento}</em></p>
                <p><strong>Discográfica:</strong> <em>${archivo.discografica}</em></p>
                <p><strong>Miembros</strong></p>
                <ul class="archivo-miembros">
                    ${archivo.miembros.map(miembro => `<li><em>${miembro}</em></li>`).join("")}
                </ul>
                <p><strong>Lista de canciones:</strong></p>
                <ul class="archivo-canciones">
                    ${archivo.canciones.map(cancion => `<li><em>${cancion}</em></li>`).join("")}
                </ul>
                <p><strong>BandCamp</strong></p>
                <ul class="archivo-redes">
                    ${archivo.redes.length > 0 
                        ? archivo.redes.map(red => red.platform === "N/A" || red.url === "N/A" 
                            ? `<li><em>No disponible</em></li>` 
                            : `<li><a href="${red.url}" target="_blank">${red.platform}</a></li>`)
                        .join("")
                        : `<li><em>No disponible</em></li>`}
                </ul>
            `;

            archivosList.appendChild(archivoDiv);
        });

        AOS.refresh(); // Refresca AOS después de inyectar contenido

        // Anime.js para imágenes
        document.querySelectorAll(".archivo-img").forEach(img => {
            img.addEventListener("mouseenter", () => {
                anime({
                    targets: img,
                    scale: 1.05,
                    duration: 500,
                    easing: "easeInOutQuad"
                });
            });

            img.addEventListener("mouseleave", () => {
                anime({
                    targets: img,
                    scale: 1,
                    duration: 500,
                    easing: "easeInOutQuad"
                });
            });
        });
    }

    searchInput.addEventListener("input", () => {
        const filterKey = filterSelect.value;
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm.length > 0) {
            container.style.display = "flex";
        } else {
            container.style.display = "none";
        }

        if (searchTerm.length > 1) {
            const suggestions = [...new Set(archivos
                .map(archivo => archivo[filterKey])
                .filter(value => value.toLowerCase().includes(searchTerm))
            )].slice(0, 5);

            suggestionBox.innerHTML = suggestions.map(s => `<p>${s}</p>`).join("");
            suggestionBox.style.display = suggestions.length ? "block" : "none";
        } else {
            suggestionBox.style.display = "none";
        }

        const filteredArchivos = archivos.filter(archivo =>
            archivo[filterKey].toLowerCase().includes(searchTerm)
        );

        displayArchivos(filteredArchivos);
    });

    suggestionBox.addEventListener("click", event => {
        if (event.target.tagName === "P") {
            searchInput.value = event.target.textContent;
            suggestionBox.style.display = "none";
            searchInput.dispatchEvent(new Event("input"));
        }
    });

    searchInput.addEventListener("blur", () => {
        setTimeout(() => suggestionBox.style.display = "none", 200);
    });

    filterSelect.addEventListener("change", () => {
        const selectedFilter = filterSelect.value;

        if (selectedFilter === "todos") {
            searchInput.value = "";
            searchInput.disabled = true;
            suggestionBox.style.display = "none";
            container.style.display = "flex";
            displayArchivos(archivos);
        } else {
            searchInput.disabled = false;
            searchInput.value = "";
            container.style.display = "none";
        }
    });

    displayArchivos([]); // Inicial: vacío
});