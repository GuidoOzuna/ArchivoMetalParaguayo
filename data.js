const archivos = [
    {
        titulo: "Sendero al olvido",
        portada: "img/sendero_al_olvido.jpg",
        banda: "Anhellical",
        genero: "Atmospheric Black/Doom Metal",
        pais: "Paraguay",
        tipo: "Demo",
        formato: "Cd",
        lanzamiento: "2018", // Formato YYYY-MM-DD
        discografica: "Black Fish Distro",
        miembros: [
            "- Juan Vera",
            "- Horacio Careaga",
            "- Richard Ariasx",
            "- David Cano",
            "- Javier Isasi"
        ],
        canciones: [
            "01- Sendero al olvido",
            "02- Donde se encuentren las almas",
            "03- Trono de fuego"
        ],
        redes: [
            { platform: "Bandcamp", url: "https://anhellical.bandcamp.com" }
          ]
    },
    {
        titulo: "Abya Yalá",
        portada: "img/abya_yala_cd.jpg",
        banda: "Y",
        genero: "Black Metal",
        pais: "Paraguay",
        tipo: "Album",
        formato: "Cd",
        lanzamiento: "2022", // Formato corregido
        discografica: "Independiente",
        miembros: [
            "- Mbyjausukañy",
            "- Desgarro",
            "- Mya Jahari",
            "- Pirco",
            "- Aida"
        ],
        canciones: [
            "01- Y",
            "02- Tiñendo de rojo",
            "03- Renacer entre cenizas",
            "04- Jukaha",
            "05- Sin rumbo",
            "06- Tiempo",
            "07- Fluye como el agua",
            "08- Abya Yalá"
        ],
        redes: [
            { platform: "Bandcamp", url:
            "https://urupe.bandcamp.com" }
            ]
    },
    {
        titulo: "Abya Yalá",
        portada: "img/abya_yala_casete.jpg",
        banda: "Y",
        genero: "Black Metal",
        pais: "Paraguay",
        tipo: "Album",
        formato: "Casete",
        lanzamiento: "2023", // Formato corregido
        discografica: "Magna Anathema Records",
        miembros: [
            "- Mbyjausukañy",
            "- Desgarro",
            "- Mya Jahari",
            "- Pirco",
            "- Aida"
        ],
        canciones: [
            "Lado A",
            "01- Y",
            "02- Tiñendo de rojo",
            "03- Renacer entre cenizas",
            "04- Jukaha",
            "Lado B",
            "05- Sin rumbo",
            "06- Tiempo",
            "07- Fluye como el agua",
            "08- Abya Yalá"
        ],
        redes: [
            { platform: "Bandcamp", url:
            "https://urupe.bandcamp.com/album/abya-yal" }
          ]
    },
    {
        titulo: "Ñorairo Guasu",
        portada: "img/ñorairo_guasu.jpg",
        banda: "Taú",
        genero: "Black Metal",
        pais: "Paraguay",
        tipo: "Demo",
        formato: "Cd",
        lanzamiento: "2011", // Formato corregido
        discografica: "Independiente",
        miembros: [
            "- Aña",
            "- Mark",
            "- Luison",
            "- W'i"
        ],
        canciones: [
            "01- Intro",
            "02- Ñorairo Guasu",
            "03- Destinados a ir al Abismo conscientemente",
            "04- Unknown"
        ],
        redes: [
            { platform: "N/A", url: "N/A" }
          ]
    },
    {
        titulo: "Promo 2015",
        portada: "img/promo_2015_casete1.jpg",
        banda: "Taú",
        genero: "Black Metal",
        pais: "Paraguay",
        tipo: "Demo",
        formato: "Casete",
        lanzamiento: "2015", // Formato corregido
        discografica: "Independiente",
        miembros: [
            "- Aña",
            "- Mefistoles",
            "- Luison",
            "- Sammael"
        ],
        canciones: [
            "01- Intro",
            "02- Ñorairo Guasu",
            "03- Depredando la vida",
            "04- Destinado a ir al abismo"
        ],
        redes: [
            { platform: "N/A", url: "N/A" }
          ]
    },
    {
        titulo: "Promo 2015",
        portada: "img/promo_2015_cd.jpg",
        banda: "Taú",
        genero: "Black Metal",
        pais: "Paraguay",
        tipo: "Demo",
        formato: "Cd",
        lanzamiento: "2015", // Formato corregido
        discografica: "Independiente",
        miembros: [
            "- Aña",
            "- Mefistoles",
            "- Luison",
            "- Sammael"
        ],
        canciones: [
            "01- Intro",
            "02- Ñorairo Guasu",
            "03- Depredando la vida",
            "04- Destinado a ir al abismo"
        ],
        redes: [
            { platform: "N/A", url: "N/A" }
          ]
    },
    {
        titulo: "Promo 2015",
        portada: "img/promo_2015_casete2.jpg",
        banda: "Taú",
        genero: "Black Metal",
        pais: "Paraguay",
        tipo: "Demo",
        formato: "Casete",
        lanzamiento: "2019", // Formato corregido
        discografica: "Depressive Illusions Records",
        miembros: [
            "- Aña",
            "- Mefistoles",
            "- Luison",
            "- Sammael"
        ],
        canciones: [
            "01- Intro",
            "02- Ñorairo Guasu",
            "03- Depredando la vida",
            "04- Destinado a ir al abismo"
        ],
        redes: [
            { platform: "N/A", url: "N/A" }
          ]
    },
     {
        titulo: "Black Rites of Hell",
        portada: "img/black_rites_of_hell_casete.jpg",
        banda: "Taú / Bestial Devastator / Mortiferis",
        genero: "Black Metal",
        pais: "Paraguay, Alemania",
        tipo: "Split",
        formato: "Casete",
        lanzamiento: "2016", // Formato corregido
        discografica: "Desecration of Souls Productions",
        miembros: [
            "Taú",
            "- Aña",
            "- Luison",
            "- Mefistofeles",
            "- Sammael",
            "Bestial Devastator",
            "- Eviscerator",
            "- Infernal Aggressor",
            "- Heavy Destructor",
            "Mortiferis",
            "- Bicho Torres",
            "- Hery Leite",
            "- Juan Sanchez",
            "- Leonardo Bernal"
        ],
        canciones: [
            "Bestial Devastator",
            "1- The Conqueror (Sodom cover)",
            "2-	Kingdom of Hell",
            "3-	Spreading the Force",
            "Mortiferis",
            "4- Putrid Death",
            "5-	Virgin Blood",
            "6-	Damned Souls",
            "Taú",
            "7-	Depredando la vida",
            "8-	Ñorairo Guasu",
            "9-	The Return of Darkness and Evil (Bathory cover"
        ],
        redes: [
            { platform: "Bandcamp", url:
            "https://dosp.bandcamp.com/album/black-rites-of-hell" }
          ]
    },
];

export default archivos;