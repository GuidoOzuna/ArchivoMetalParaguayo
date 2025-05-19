import mangas from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    mangas.forEach(manga => {
        const mangaDiv = document.createElement("div");
        mangaDiv.classList.add("manga-box");

        mangaDiv.innerHTML = `
            <h1>${manga.titulo}</h1>
            <img src="${manga.portada}" alt="Portada">
            <p>${manga.sinopsis}</p>
            <p><strong>Alternativo:</strong> ${manga.alternative}</p>
            <p><strong>Estado:</strong> ${manga.estado}</p>
            <p><strong>Género:</strong> ${manga.genero}</p>
            <p><strong>Autor:</strong> ${manga.autor}</p>
            <p><strong>Artista:</strong> ${manga.artista}</p>
            <p><strong>Año:</strong> ${manga.anho}</p>
            <p><strong>Capítulos:</strong> ${manga.capitulos}</p>
            <h2>Descargas</h2>
            <ul class="manga-links"></ul>
        `;

        const linksList = mangaDiv.querySelector(".manga-links");
        manga.links.forEach((url, index) => {
            const linkItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = url;
            link.textContent = `Tomo ${index + 1}`;
            link.target = "_blank";
            linkItem.appendChild(link);
            linksList.appendChild(linkItem);
        });

        container.appendChild(mangaDiv);
    });
});