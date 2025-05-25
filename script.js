import archivos from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container"); // Contenedor principal
    const archivosList = document.getElementById("archivos-list"); // Listado de archivos
    const searchInput = document.getElementById("searchInput"); // Campo de búsqueda
    const filterSelect = document.getElementById("filterSelect"); // Selector de filtros
    const suggestionBox = document.getElementById("suggestionBox"); // Caja de sugerencias

    // Ocultar la lista al inicio
    container.style.display = "none";

    // Ordenar archivos por año de lanzamiento (descendente)
    archivos.sort((a, b) => b.lanzamiento - a.lanzamiento);

    // Función para mostrar los archivos en pantalla
    function displayArchivos(filteredArchivos) {
        archivosList.innerHTML = ""; // Limpiar contenido previo
        filteredArchivos.forEach(archivo => {
            const archivoDiv = document.createElement("div");
            archivoDiv.classList.add("archivo-box");

            archivoDiv.innerHTML = `
                <h1><strong>${archivo.titulo}</strong></h1>
                <h2><strong>${archivo.banda}</strong></h2>
                <img src="${archivo.portada}" alt="Portada" loading="lazy">
                <p><strong>Género:</strong> <em>${archivo.genero}</em></p>
                <p><strong>País:</strong> <em>${archivo.pais}</em></p>
                <p><strong>Tipo:</strong> <em>${archivo.tipo}</em></p>
                <p><strong>Formato:</strong> <em>${archivo.formato}</em></p>
                <p><strong>Lanzamiento:</strong> <em>${archivo.lanzamiento}</em></p>
                <p><strong>Discográfica:</strong> <em>${archivo.discografica}</em></p>
                <p><strong>Miembros:</strong></p>
                <ul class="archivo-miembros">
                    ${archivo.miembros.map(miembro => `<li><em>${miembro}</em></li>`).join("")}
                </ul>
                <p><strong>Lista de canciones:</strong></p>
                <ul class="archivo-canciones">
                    ${archivo.canciones.map(cancion => `<li><em>${cancion}</em></li>`).join("")}
                </ul>
                <p><strong>Media:</strong></p>
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
    }

    // Manejo de búsqueda con sugerencias y filtrado dinámico
    searchInput.addEventListener("input", () => {
        const filterKey = filterSelect.value;
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm.length > 0) {
            container.style.display = "flex"; // Mostrar la lista de archivos
        } else {
            container.style.display = "none"; // Ocultar la lista si el campo está vacío
        }

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

        // Filtrado de búsqueda en la lista de archivos
        const filteredArchivos = archivos.filter(archivo =>
            archivo[filterKey].toLowerCase().includes(searchTerm)
        );

        displayArchivos(filteredArchivos);
    });

    // Aplicar selección de sugerencia al campo de búsqueda
    suggestionBox.addEventListener("click", (event) => {
        if (event.target.tagName === "P") {
            searchInput.value = event.target.textContent;
            suggestionBox.style.display = "none";
            searchInput.dispatchEvent(new Event("input"));
        }
    });

    searchInput.addEventListener("blur", () => {
        setTimeout(() => suggestionBox.style.display = "none", 200);
    });

    // Vaciar el campo de búsqueda y ocultar la lista al cambiar el filtro
    filterSelect.addEventListener("change", () => {
        const selectedFilter = filterSelect.value;

        if (selectedFilter === "todos") {
            searchInput.value = ""; // Vaciar el campo de búsqueda
            searchInput.disabled = true; // Deshabilitar la búsqueda
            suggestionBox.style.display = "none"; // Ocultar sugerencias
            container.style.display = "flex"; // Mostrar todos los archivos
            displayArchivos(archivos); // Mostrar toda la info
        } else {
            searchInput.disabled = false; // Habilitar la búsqueda
            searchInput.value = ""; // Vaciar la búsqueda al cambiar el filtro
            container.style.display = "none"; // Ocultar la lista de archivos hasta que el usuario escriba
        }
    });

    // Mostrar todos los archivos inicialmente (solo cuando haya búsqueda)
    displayArchivos([]);
});