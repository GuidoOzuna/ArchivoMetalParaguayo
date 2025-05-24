import mangas from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const suggestionBox = document.getElementById("suggestionBox");

    // Ordenar los mangas de más nuevo a más viejo
    mangas.sort((a, b) => b.lanzamiento - a.lanzamiento);

    function displayMangas(filteredMangas) {
        container.innerHTML = ""; // Limpiar contenido previo
        filteredMangas.forEach(manga => {
            const mangaDiv = document.createElement("div");
            mangaDiv.classList.add("manga-box");

            mangaDiv.innerHTML = `
                <h1><strong>${manga.titulo}</strong></h1>
                <h2><strong>${manga.banda}</strong></h2>
                <img src="${manga.portada}" alt="Portada">
                <p><strong>Género:</strong></p>
                <p><em>${manga.genero}</em></p>
                <p><strong>País:</strong></p>
                <p><em>${manga.pais}</em></p>
                <p><strong>Tipo:</strong></p>
                <p><em>${manga.tipo}</em></p>
                
                <p><strong>Formato:</strong></p>
                <p><em>${manga.formato}</em></p>
                
                <p><strong>Lanzamiento:</strong></p>
                <p><em>${manga.lanzamiento}</em></p>
                <p><strong>Discográfica:</strong></p>
                <p><em>${manga.discografica}</em></p>
                <p><strong>Miembros:</strong></p>
                <ul class="manga-miembros">
                    ${manga.miembros.map(miembro => `<li><em>${miembro}</em></li>`).join("")}
                </ul>
                <p><strong>Lista de canciones:</strong></p>
                <ul class="manga-canciones">
                    ${manga.canciones.map(cancion => `<li><em>${cancion}</em></li>`).join("")}
                </ul>
            `;

            container.appendChild(mangaDiv);
        });
    }

    // Mostrar todos los mangas al inicio
    displayMangas(mangas);

    // Implementar sugerencias dinámicas en la búsqueda
    searchInput.addEventListener("input", () => {
        const filterKey = filterSelect.value;
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm.length > 1) {
            const suggestions = [...new Set(mangas
                .map(manga => manga[filterKey])
                .filter(value => value.toLowerCase().includes(searchTerm))
            )].slice(0, 5); // Evitar duplicados y mostrar las primeras 5 sugerencias

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

        const filteredMangas = mangas.filter(manga =>
            manga[filterKey].toLowerCase().includes(searchTerm)
        );

        displayMangas(filteredMangas);
    });
});