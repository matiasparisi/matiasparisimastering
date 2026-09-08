(function () {
  'use strict';

  function t(key) {
    return (window.mpI18n && window.mpI18n.t(key)) || '';
  }

  /* Año en el footer */
  var yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear() + ' MP Mastering';

  /* Nav: fondo al hacer scroll */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  /* Menú móvil */
  var menuToggle = document.getElementById('menuToggle');
  var mobilePanel = document.getElementById('mobilePanel');
  function closeMenu() {
    mobilePanel.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', t('menu.abrir') || 'Abrir menú');
    mobilePanel.setAttribute('aria-hidden', 'true');
  }
  menuToggle.addEventListener('click', function () {
    var isOpen = mobilePanel.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? (t('menu.cerrar') || 'Cerrar menú') : (t('menu.abrir') || 'Abrir menú'));
    mobilePanel.setAttribute('aria-hidden', String(!isOpen));
  });
  mobilePanel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* Estado compartido (mensajes de episodios y formulario) */
  var formStatus = document.getElementById('formStatus');
  function showStatus(text) {
    if (formStatus) formStatus.textContent = text;
  }

  /* Episodios: botón reproducir */
  document.querySelectorAll('.episode').forEach(function (ep) {
    var btn = ep.querySelector('.play');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var template = t('episodio.proximamente') || 'El episodio "{title}" estará disponible muy pronto.';
      showStatus(template.replace('{title}', ep.getAttribute('data-title')));
    });
  });

  /* ============ LIGHTBOX ============ */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');
  var lastFocused = null;

  function openLightbox(src, alt) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightboxCaption.textContent = alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lastFocused = document.activeElement;
    lightboxClose.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }
  if (lightbox) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }
  function enableLightboxOn(container) {
    if (!container) return;
    container.addEventListener('click', function (e) {
      var img = e.target.closest('img');
      if (!img) return;
      openLightbox(img.src, img.alt);
    });
  }

  /* Trabajos / Créditos: tapas de mastering. Para sumar más, agregá
     el nombre de archivo a este array (debe existir en /assets/portfolio). */
  var portfolioImages = [
    'portfolio-001.jpg','portfolio-002.jpg','portfolio-003.jpg','portfolio-004.jpg','portfolio-005.jpg',
    'portfolio-006.jpg','portfolio-007.jpg','portfolio-008.jpg','portfolio-009.jpg','portfolio-010.jpg',
    'portfolio-011.jpg','portfolio-012.jpg','portfolio-013.jpg','portfolio-014.jpg','portfolio-015.jpg',
    'portfolio-016.jpg','portfolio-017.jpg','portfolio-018.jpg','portfolio-019.jpg','portfolio-020.jpg',
    'portfolio-021.jpg','portfolio-022.jpg','portfolio-023.jpg','portfolio-024.jpg','portfolio-025.jpg',
    'portfolio-026.jpg','portfolio-027.jpg','portfolio-028.jpg','portfolio-029.jpg','portfolio-030.jpg',
    'portfolio-031.jpg','portfolio-032.jpg','portfolio-033.jpg','portfolio-034.jpg','portfolio-035.jpg',
    'portfolio-036.jpg','portfolio-037.jpg','portfolio-038.jpg','portfolio-039.jpg','portfolio-040.jpg',
    'portfolio-041.jpg','portfolio-042.jpg','portfolio-043.jpg','portfolio-044.jpg','portfolio-045.jpg',
    'portfolio-046.jpg','portfolio-047.jpg','portfolio-048.jpg','portfolio-049.jpg','portfolio-050.jpg',
    'portfolio-051.jpg','portfolio-052.jpg','portfolio-053.jpg','portfolio-054.jpg','portfolio-055.jpg',
    'portfolio-056.jpg','portfolio-057.jpg','portfolio-058.jpg','portfolio-059.jpg','portfolio-060.jpg',
    'portfolio-061.jpg','portfolio-062.jpg','portfolio-063.jpg','portfolio-064.jpg','portfolio-065.jpg',
    'portfolio-066.jpg','portfolio-067.jpg','portfolio-068.jpg','portfolio-069.jpg','portfolio-070.jpg',
    'portfolio-071.jpg','portfolio-072.jpg','portfolio-073.jpg','portfolio-074.jpg','portfolio-075.jpg',
    'portfolio-076.jpg','portfolio-077.jpg','portfolio-078.jpg','portfolio-079.jpg','portfolio-080.jpg',
    'portfolio-081.jpg','portfolio-082.jpg','portfolio-083.jpg','portfolio-084.jpg','portfolio-085.jpg',
    'portfolio-086.jpg','portfolio-087.jpg','portfolio-088.jpg','portfolio-089.jpg','portfolio-090.jpg',
    'portfolio-091.jpg','portfolio-092.jpg','portfolio-093.jpg','portfolio-094.jpg','portfolio-095.jpg',
    'portfolio-096.jpg','portfolio-097.jpg','portfolio-098.jpg','portfolio-099.jpg','portfolio-100.jpg',
    'portfolio-101.jpg','portfolio-102.jpg','portfolio-103.jpg','portfolio-104.jpg','portfolio-105.jpg',
    'portfolio-106.jpg','portfolio-107.jpg','portfolio-108.jpg','portfolio-109.jpg','portfolio-110.jpg',
    'portfolio-111.jpg','portfolio-112.jpg','portfolio-113.jpg','portfolio-114.jpg','portfolio-115.jpg',
    'portfolio-116.jpg','portfolio-117.jpg','portfolio-118.jpg','portfolio-119.jpg','portfolio-120.jpg',
    'portfolio-121.jpg','portfolio-122.jpg','portfolio-123.jpg','portfolio-124.jpg','portfolio-125.jpg',
    'portfolio-126.jpg','portfolio-127.jpg','portfolio-128.jpg','portfolio-129.jpg','portfolio-130.jpg',
    'portfolio-131.jpg','portfolio-132.jpg','portfolio-133.jpg','portfolio-134.jpg','portfolio-135.jpg',
    'portfolio-136.jpg','portfolio-137.jpg','portfolio-138.jpg','portfolio-139.jpg','portfolio-140.jpg'
  ];
  var portfolioGrid = document.getElementById('portfolioGrid');
  if (portfolioGrid) {
    portfolioImages.forEach(function (file) {
      var fig = document.createElement('figure');
      fig.className = 'portfolio-item';
      var img = document.createElement('img');
      img.src = 'assets/portfolio/' + file;
      img.alt = t('creditos.caption') || 'MASTERIZADO EN MATIAS PARISI MASTERING';
      img.loading = 'lazy';
      fig.appendChild(img);
      portfolioGrid.appendChild(fig);
    });
    /* Todas las tapas muestran el mismo texto fijo al abrirse (sin numeración),
       calculado en el momento del click para respetar el idioma actual. */
    portfolioGrid.addEventListener('click', function (e) {
      var img = e.target.closest('img');
      if (!img) return;
      openLightbox(img.src, t('creditos.caption') || 'MASTERIZADO EN MATIAS PARISI MASTERING');
    });
  }

  /* Galería: para sumar más fotos, agregá un objeto {src, alt}
     a este array (el archivo debe existir dentro de /assets/gallery). No
     hace falta tocar el HTML ni el CSS. */
  var galleryImages = [
    { src: 'assets/gallery/gallery-01.jpg', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-02.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-03.jpg', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-04.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-05.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-06.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-07.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-08.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-09.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-10.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-11.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-12.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-13.png', alt: 'Estudio MP Mastering' },
    { src: 'assets/gallery/gallery-14.png', alt: 'Estudio MP Mastering' }
  ];
  var galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryImages.forEach(function (item) {
      var fig = document.createElement('figure');
      fig.className = 'gallery-item';
      var img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      img.loading = 'lazy';
      fig.appendChild(img);
      if (item.caption) {
        var cap = document.createElement('figcaption');
        cap.className = 'gallery-caption';
        cap.textContent = item.caption;
        fig.appendChild(cap);
      }
      galleryGrid.appendChild(fig);
    });
    enableLightboxOn(galleryGrid);
  }

  /* Selected Credits: listado único, alfabético, sin categorías */
  var creditsArtists = [
    '2Nick8', 'Abel Di Catarina', 'Acid Charlie', 'Adicta', 'Agus Ganem', 'AIWAA', 'Ailén Sandoval', 'Aire Rock',
    'Akilin', 'Albert Delgado', 'Albor', 'Ale Castro', 'Ale Schuster', 'Alejandro Abbattista', 'Aluna Project',
    'Amsterdam Locos', 'Anahí Arias', 'Ancestral Beats', 'Andesonica', 'Andhi Rivas', 'Andrea Prodan',
    'Andrés Aloy', 'Andrés Pellican', 'Angarita', 'Ani Feniix', 'Anita Moon', 'Annblif', 'Ánfora', 'Apsola',
    'Area 51', 'Ars Caelum', 'Artesano Titer', 'Atemporal (México)', 'Ave Parva', 'Babylon System',
    'Baridi Baridi', 'Beathey', 'Beldi', 'Ben & Vincent', 'Benac', 'Bernhard Reiss', 'Bian Rugilo', 'Biomigrant',
    'Bliz Nochi', 'Bomani Armah', 'Brandub', 'Brawlio', 'Bruno Duque', 'Caitto Music', 'Cajal', 'Camilo Gil',
    'Cantor de Latexx', 'Carca', 'Carlo Gambino', 'Castora Herz', 'Catalina Balussi', 'Cazaux', 'Cebras Lunares',
    'Celina Varela', 'Chilli Black (Sudáfrica)', 'Chucky de Ipola', 'Cio (AR)', 'Claborg', 'Class 76',
    'Claudio Kleiman — Era Hora (2018), Mixing Engineer. Álbum con participaciones de Gustavo Santaolalla, León Gieco, Ricardo Mollo, Diego Arnedo, Rodolfo García, Claudio Gabis, Ciro Fogliatta, Claudia Puyó, Javier Casalla, Gabriel “Conejo” Jolivet, Roy Quiroga, Pablo Memi, Juan Carlos Tordó, Marcelo Ponce, Jorge Senno, Alejandro Balbis, La Mancha de Rolando, Oveja Negra, entre otros',
    'Coda Chrome', 'Corina Lawrence', 'Coro Qom Chelaalapí',
    'Coro Qom Chelaalapí & Lagartijeando — Campo del Cielo, Shika Shika', 'Correte Beethoven',
    'Cristina Aguayo — Water Me, producción, grabación y mezcla realizada por Matías Parisi; álbum con participaciones de Don Vilanova/Botafogo, Ricardo Pellican, Claudio Kleiman, Deborah Dixon, Viviana Scaliza, Cristina Dall, Germán Wiedemer y otros músicos invitados',
    'Cruzloma', 'Cuervo Cuervo', 'Cyma', 'D.C. LaRue', 'Da Iguana', 'Daddy Plays Disco', 'Daniel Melingo',
    'Dany Cohiba', 'Danza Perfume', 'DCID (Diego Cid)', 'De las Esferas', 'Deformica', 'Dellacasa',
    'Demarco Project', 'Dennis Jones', 'Desagüe Varela', 'Diofaro', 'DJ Luciano Villarreal', 'DJ Nim', 'DJ Raff',
    'DJ Ryte Nou', 'Dkeymusik', 'Dominga', 'Drole', 'Dusan Gargurevich', 'Dvniel', 'Eddie Leader',
    'Efectos Especiales', 'Eilys Herrera', 'El Extravagante', 'El Inti', 'El Peón', 'El Remolón', 'Eliaz',
    'Emanuel Sáez', 'Emi Ashur', 'Energy Roots', 'Enrique Barrios', 'Espartanos Rock', 'Ethel', 'Fabian Delpiano',
    'Fabioesse', 'Facu Savant', 'Fake Moustache', 'Federico Hoffmann', 'Fel Arbol', 'Fer De Leo',
    'Fernanda Alemán', 'Fernando Mezzapesa', 'Ferrari Kid', 'Figueras', 'Fisepa', 'Flor Ielapi', 'Flor Paz',
    'Franco Luciani', 'Franivv', 'Fue La Mariposa', 'Furz', 'Gabi Raíz', 'Gabriel Estredo', 'Gabriel Ferreira',
    'Gabriel Nieves', 'Galo Vermelho', 'Gerardo Portilla', 'Gonzalo Ramiro', 'Guillermo De Caminos',
    'Gus Arancibia', 'Hajna', 'Happy 707', 'Hermanos Camacho', 'Hermetics', 'Hernán Sánchez', 'Hijos del Sofá',
    'Huma Nos', 'Humazapas', 'Hybrid Heights', 'Ignacio La Conga', 'Intiche', 'Iván Espeche Gil', 'Ivory Osidan',
    'Ivory Sofie', 'Ivo Borda', 'ÏZADORA', 'J Damur', 'Jacob Colon', 'Janax Pacha', 'Jano Gil', 'Jares',
    'Javier Montoliou', 'Javier Vagnozzi', 'Javith', 'Jeff Stephan', 'Jhordan Welsch', 'Jin Yerei', 'Jose Uceda',
    'Jota Music', 'JUAAN', 'Juan Búho', 'Juan Cruz Copes', 'Juan Klein', 'Juan Zolbarán', 'Juana Chang', 'Juzel',
    'Kabanjak', 'Kabeção', 'Karen y Los Remedios', 'Katiahshé', 'Kenan', 'Kokiyo', 'Kraut', 'Kren Organico',
    'L\'Argonaut', 'La Color', 'La Kimbo', 'La Kochi', 'La Mai', 'La Mejunjera', 'La Última Folk', 'La Walichera',
    'Ladies On Mars', 'Lagartijeando', 'Laguna', 'Lalann', 'Lali', 'Lancuyen', 'Las Modas', 'Lascivio Bohemia',
    'Laura Noble', 'Lautaro Scavuzzo', 'Leah', 'Lefti Music', 'Leo Portela', 'Liquid Bloom', 'Lobela',
    'Loli Cósmica', 'Los Gigantes', 'Los Oxford', 'Lucas Jara', 'Lucho De Pasquale', 'Luciano Rego', 'Lud Folie',
    'Luis D Aguiar', 'Luminazión', 'Luv\' — All You Need Is Luv’, Remastered & Expanded Edition (2025)',
    'Lux & Hermetics — Helios / Aurora', 'M.Rojas', 'Madame Hyde', 'MADMA (Francia)', 'Maga Bo', 'Mangle',
    'Manu Ela', 'Manuel Sahagún', 'Mapaná Music', 'Marcelo Berges', 'Marco Tegui', 'Marcus Harris', 'Marick',
    'Maritza Correa', 'Martin Ojeda', 'Martina Budde', 'Martinko', 'Matías Delóngaro', 'Matías Sapag',
    'Matias Sundblad', 'Matija', 'Matt Jah', 'Mauro Trotta', 'Max Schewe', 'Max Tenrom', 'MAXS', 'Mazzie',
    'Meli Perea', 'Mely Rey', 'Mente Orgánica', 'Mery Lionz', 'Mihai Popoviciu', 'Mili & Rubén Díaz',
    'Milka López', 'Minau — Vahramic, Kusiya Records; mastering de los temas originales', 'Miss Kelli',
    'Moira Millan', 'Momiel', 'Monkey Porn', 'Moonsound', 'Msystem', 'Muchkin', 'N. Inostroza', 'Nadav Dagon',
    'Nadia Popoff', 'Nahualli Paax', 'NAOBA', 'Narcisse', 'Nat Barrera', 'Natalia Schvartz', 'Néctar de Estrellas',
    'Neookai', 'Nico Beldi', 'Nico Fucks', 'Nico Negrete', 'Nicolangelo Paredes', 'Nicolas Leonelli',
    'Nicolas Ming', 'Nicolas Viana', 'Nima Gorji', 'Not So Bad', 'Ok Pirámides', 'Omar Essa', 'Oonga', 'Oora',
    'Pablo y Las Letras', 'Pacho y Los Limones', 'Pahua', 'Palo Pandolfo', 'Paloma del Cerro', 'Pamela Rodriguez',
    'Panchito Villa', 'Paraleia', 'Parkour en el Geriátrico', 'Pawkarmayta', 'Paz Moroni',
    'Perro (Matías De Brasi)', 'Phesta', 'Picnic al Costado del Camino', 'Pipe MSK', 'Playroots', 'Pranay Ryan',
    'Premium Banana', 'PUNA', 'QOQEQA', 'Quenum', 'Rafa Villegas', 'Real Cumbia Activa RCA', 'Renzo Zong',
    'Resistencia Amazónica', 'Rey Hindú', 'Rezet', 'Ricardo Pellican', 'Richard Elcox', 'Ritmicki Hram',
    'Rocío Araujo', 'ROMBE4T', 'Rosângela Macedo', 'RossAlto', 'Rowetta', 'Rumbo Tumba', 'Sanchez & Narvaez',
    'Santa Fuego', 'Santiago Martín', 'Sauco', 'Saùdad', 'Searching4U', 'Seba Pain', 'Sebastián Cebreiro',
    'Sebastián Teysera', 'Sebuky', 'Selvagia', 'Sestra', 'Sidirum', 'Silvio Asttier', 'Sin Cable', 'Soalya',
    'Sofía Aristarain', 'Sorensen', 'Sted-e', 'Steelyvibe', 'Tato Piatti', 'TAÜRO', 'Tayson Kryss', 'The Copetins',
    'The Rubioz', 'The Wolly', 'Tomi Trauma', 'Tremor', 'Tribilin Sound', 'Two Lee', 'Two Phase U', 'uisato',
    'Ultra K', 'Unos Pares', 'URSO', 'Vagabunda', 'Vale 4', 'Vann Morfin', 'Vedette', 'Venado', 'Venessa Jackson',
    'VENOTT', 'Victor Cher', 'Villanis', 'Viva Elástico', 'Walter Soria', 'Wilgenis Vergara', 'Will Garcia',
    'Xuacu', 'Yael Honik', 'Yoyoyo', 'Zone 7', 'Zymbolo'
  ];
  var creditsList = document.getElementById('creditsList');
  if (creditsList) {
    creditsArtists.forEach(function (name) {
      var div = document.createElement('div');
      div.textContent = name;
      creditsList.appendChild(div);
    });
  }

  /* Cinta de tags (ticker): plataformas con logo real + formatos en texto */
  var tickerTagsText = ['Mastering para plataformas digitales', 'Mastering para CD', 'Mastering para vinilo'];
  var tickerLogos = [
    { name: 'Spotify', src: 'assets/logos/spotify.png' },
    { name: 'Amazon Music', src: 'assets/logos/amazon-music.png' },
    { name: 'iTunes', src: 'assets/logos/itunes.png' },
    { name: 'YouTube', src: 'assets/logos/youtube.png' },
    { name: 'SoundCloud', src: 'assets/logos/soundcloud.png' },
    { name: 'Bandcamp', src: 'assets/logos/bandcamp.png' }
  ];
  var tickerTrack = document.getElementById('tickerTrack');
  if (tickerTrack) {
    function buildTickerSet() {
      var frag = document.createDocumentFragment();
      tickerTagsText.forEach(function (tag) {
        var span = document.createElement('span');
        span.textContent = tag;
        frag.appendChild(span);
      });
      tickerLogos.forEach(function (logo) {
        var span = document.createElement('span');
        span.className = 'ticker-logo';
        var img = document.createElement('img');
        img.src = logo.src;
        img.alt = logo.name;
        img.loading = 'lazy';
        span.appendChild(img);
        frag.appendChild(span);
      });
      return frag;
    }
    tickerTrack.appendChild(buildTickerSet());
    tickerTrack.appendChild(buildTickerSet());
  }

  /* FAQ acordeón */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* Formulario de contacto */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      showStatus(t('contacto.gracias') || 'Gracias. Recibí tu mensaje y te escribo pronto.');
      contactForm.reset();
      /*
        NOTA: este formulario solo muestra un mensaje en pantalla, todavía
        no envía el mensaje a ningún lado. Para recibir los mensajes por
        email hay que conectarlo a un servicio como Netlify Forms,
        Formspree, o el formulario nativo de WordPress (ver README).
      */
    });
  }

  /* Video: si no puede reproducirse, mostrar alternativa */
  var video = document.getElementById('studioVideo');
  var videoFallback = document.getElementById('videoFallback');
  function renderVideoFallback() {
    if (!videoFallback) return;
    var title = t('video.fallbackTitle') || '0819 / registro del estudio';
    var copy = t('video.fallbackCopy') || 'El video no se puede reproducir aquí; podés ver la sala en la imagen.';
    videoFallback.textContent = title;
    var span = document.createElement('span');
    span.textContent = copy;
    videoFallback.appendChild(span);
  }
  renderVideoFallback();
  if (video && videoFallback) {
    video.addEventListener('error', function () {
      video.style.display = 'none';
      videoFallback.style.display = 'grid';
    });
  }

  /* Al cambiar de idioma, refrescar textos generados dinámicamente
     (menú móvil, video) que no usan data-i18n directamente */
  document.addEventListener('mp:languagechange', function () {
    var isOpen = mobilePanel.classList.contains('open');
    menuToggle.setAttribute('aria-label', isOpen ? (t('menu.cerrar') || 'Cerrar menú') : (t('menu.abrir') || 'Abrir menú'));
    renderVideoFallback();
  });
})();
