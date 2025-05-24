import archivos from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const suggestionBox = document.getElementById("suggestionBox");

    archivos.sort((a, b) => b.lanzamiento - a.lanzamiento);

    function displayArchivos(filteredArchivos) {
        container.innerHTML = ""; // Limpiar contenido previo
        filteredArchivos.forEach(archivo => {
            const archivoDiv = document.createElement("div");
            archivoDiv.classList.add("archivo-box");

            archivoDiv.innerHTML = `
                <h1><strong>${archivo.titulo}</strong></h1>
                <h2><strong>${archivo.banda}</strong></h2>
                <img src="${archivo.portada}" alt="Portada">
                <p><strong>Género:</strong></p>
                <p><em>${archivo.genero}</em></p>
                <p><strong>País:</strong></p>
                <p><em>${archivo.pais}</em></p>
                <p><strong>Tipo:</strong></p>
                <p><em>${archivo.tipo}</em></p>
                
                <p><strong>Formato:</strong></p>
                <p><em>${archivo.formato}</em></p>
                
                <p><strong>Lanzamiento:</strong></p>
                <p><em>${archivo.lanzamiento}</em></p>
                <p><strong>Discográfica:</strong></p>
                <p><em>${archivo.discografica}</em></p>
                <p><strong>Miembros:</strong></p>
                <ul class="archivo-miembros">
                    ${archivo.miembros.map(miembro => `<li><em>${miembro}</em></li>`).join("")}
                </ul>
                <p><strong>Lista de canciones:</strong></p>
                <ul class="archivo-canciones">
                    ${archivo.canciones.map(cancion => `<li><em>${cancion}</em></li>`).join("")}
                </ul>
            `;

            container.appendChild(archivoDiv);
        });
    }

    displayArchivos(archivos);

    searchInput.addEventListener("input", () => {
        const filterKey = filterSelect.value;
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm.length > 1) {
            const suggestions = [...new Set(archivos
                .map(archivo => archivo[filterKey])
                .filter(value => value.toLowerCase().includes(searchTerm))
            )].slice(0, 5);

            suggestionBox.innerHTML = suggestions.map(suggestion => `<p>${suggestion}</p>`).join("");
            suggestionBox.style.display = suggestions.length ? "block" : "none";
        } else {
            suggestionBox.style.display = "none";
        }
    });

    suggestionBox.addEventListener("click", (event) => {
        if (event.target.tagName === "P") { // Asegura que el clic proviene de una sugerencia
            searchInput.value = event.target.textContent;
            suggestionBox.style.display = "none";
            searchInput.dispatchEvent(new Event("input")); // Forzar actualización de resultados
        }
    });

    searchInput.addEventListener("blur", () => {
        setTimeout(() => suggestionBox.style.display = "none", 200);
    });

    // Evento para búsqueda filtrada
    searchInput.addEventListener("input", () => {
        const filterKey = filterSelect.value;
        const searchTerm = searchInput.value.toLowerCase();

        const filteredArchivos = archivos.filter(archivo =>
            archivo[filterKey].toLowerCase().includes(searchTerm)
        );

        displayArchivos(filteredArchivos);
    });
});