/* =========================================================
   MP MASTERING — sistema de traducciones (ES / EN)
   Arquitectura: translations.es / translations.en (diccionario
   único), aplicado vía atributos data-i18n / data-i18n-html /
   data-i18n-placeholder. No usa servicios de traducción externos.
   ========================================================= */
(function () {
  'use strict';

  var translations = {
    es: {
      nav: {
        estudio: 'Estudio',
        galeria: 'Galería',
        matias: 'ACERCA DE MATIAS',
        faq: 'FAQ',
        contactar: 'Contactar',
        enviarMezcla: 'Enviar mi mezcla →'
      },
      hero: {
        kicker: 'Mastering studio · Buenos Aires',
        titleTop: 'Mastering',
        titleBottom: 'analógico',
        copy: 'Somos un estudio internacional dedicado exclusivamente a la masterización de sonido. Poseemos el mejor equipamiento analógico y la más reciente tecnología digital para que cada artista logre el sonido deseado.'
      },
      proof: { label: 'masters entregados en todo el mundo' },
      estudio: {
        eyebrow: 'El estudio',
        title: 'Excelencia en<br><em>Mastering.</em>'
      },
      servicios: {
        revision: { title: 'Revisión de Mezcla', copy: 'Antes del mastering realizamos una revisión técnica de la mezcla, evaluando balance tonal, dinámica, niveles, imagen estéreo, fase y headroom. El objetivo es detectar posibles ajustes que permitan llegar al mastering con una mezcla sólida y optimizar el resultado final.' },
        estereo: { title: 'Mastering Estéreo', copy: 'Procesamiento final realizado sobre una única mezcla estéreo, optimizando balance tonal, dinámica, imagen estéreo, nivel y traducción.' },
        stems: { title: 'Mastering por Stems / Capas', copy: 'Mastering realizado a partir de grupos separados de la mezcla, permitiendo un control más preciso sobre balances, dinámica y contenido frecuencial antes de la suma final.' }
      },
      formatos: {
        digital: { title: 'Mastering para Plataformas Digitales', copy: 'Optimización del master para distribución en streaming y descarga, cuidando nivel, dinámica, true peak, balance tonal y correcta traducción entre plataformas.' },
        cd: { title: 'Mastering para CD', copy: 'Preparación del master final para formato CD, con control de nivel, dinámica, balance tonal, secuencia, fades y especificaciones de entrega.' },
        vinilo: { title: 'Mastering para Vinilo', copy: 'Mastering adaptado a las limitaciones y características del corte en vinilo, controlando graves, fase, sibilancia, dinámica y contenido de alta frecuencia.' }
      },
      sample: {
        free: 'FREE SAMPLE',
        minute: '1 MINUTO',
        tag: 'Cortesía del estudio',
        copy: 'Ofrecemos una muestra gratuita de mastering de hasta 1 minuto para que puedas evaluar nuestro criterio de trabajo, el tratamiento aplicado y la mejora sobre tu mezcla antes de contratar el servicio completo. La muestra se realiza sobre un fragmento representativo del tema y permite comparar el resultado con la mezcla original.'
      },
      galeria: { eyebrow: 'Galería', title: 'Nuestro<br><em>estudio.</em>' },
      creditos: {
        title: 'Créditos.',
        copy: 'Éste es nuestro portfolio con algunos de nuestros trabajos realizados.',
        caption: 'MASTERIZADO EN MATIAS PARISI MASTERING'
      },
      matias: {
        eyebrow: 'Sobre mí',
        title: 'Matías<br><em>Parisi.</em>',
        role: 'Mastering engineer / Buenos Aires',
        p1: 'Matías Parisi es ingeniero de mastering y docente especializado en mezcla y mastering, con más de 20 años de trayectoria en el mundo del audio. A lo largo de su carrera ha realizado más de 13.000 masters para artistas, productores y sellos de diferentes partes del mundo.',
        p2: 'Su trabajo combina experiencia técnica, criterio musical y una cuidada selección de equipamiento analógico vintage, buscando que cada proyecto conserve su identidad y alcance su máximo potencial sonoro.',
        p3: 'Además de su actividad profesional en el estudio, es jefe de cátedra de Mix y Mastering en EMMPI y EMBA, donde forma nuevas generaciones de profesionales del audio.',
        stat1: 'Años de trayectoria profesional',
        stat2: 'Masters realizados',
        creditsTitle: 'Selected Credits',
        creditsIntro: 'A lo largo de su carrera ha trabajado en proyectos de artistas y productores como:',
        creditsNote: 'entre muchos otros...',
        labelsTitle: 'Sellos',
        labelsCopy: 'Sus masterizaciones también forman parte de lanzamientos vinculados a sellos como Nervous Records de Nueva York, ZZK Records, Cosmovision, Ritmos del Sur, Fértil Discos, Cadenza Records y Made in Miami de Oscar G.',
        chartsTitle: 'Charts & Radio Show',
        chartsCopy: 'Numerosos trabajos masterizados en el estudio han alcanzado el puesto Nº1 y posiciones destacadas en los charts de Beatport y Traxsource. Además, diferentes producciones han sido presentadas y difundidas en radio shows internacionales de referentes de la música electrónica, incluyendo espacios vinculados a Erick Morillo, Glitterbox Radio Show Ibiza con Anané y Louie Vega de Masters At Work, y Hed Kandi Radio Show.'
      },
      faq: {
        eyebrow: 'Antes de enviar',
        title: 'Preguntas<br><em>frecuentes.</em>',
        q1: { q: '¿Quiénes pueden contratar el servicio?', a: 'Quienes hayan finalizado la etapa de mezcla de su track o álbum.' },
        q2: { q: '¿Desde dónde puedo contratar el servicio?', a: 'Podés contratar nuestros servicios desde cualquier lugar del mundo, de manera presencial o a distancia.' },
        q3: { q: '¿Dónde puedo ver el instructivo PDF?', es: 'CLICK AQUÍ ESPAÑOL', en: 'CLICK AQUÍ INGLÉS' },
        q4: { q: '¿Cuánto se tarda en masterizar un track?', a: 'Nos adecuamos a las urgencias y necesidades de cada artista, esto quiere decir que podemos adecuar nuestras agendas para entregarte el mastering en 24/48 horas luego de recibida y aprobada la mezcla.' },
        q5: { q: '¿Realizan masterings específicos para cada formato o plataforma?', a: 'Sí. Cada mastering que realizamos se adecúa a las necesidades de cada formato o plataforma según lo solicites, ya sea digital (Spotify, Youtube, por ejemplo), o para formatos físicos (CDs y vinilos).' },
        q6: { q: '¿Hay algún beneficio para sellos discográficos?', a: 'Tenemos varios descuentos para sellos discográficos. <a href="#contacto">Comunicate con nosotros</a> para obtener mayor información.' },
        q7: { q: '¿Puedo obtener una muestra gratis?', a: 'Podés solicitar, vía e-mail y de manera gratuita, una muestra de un minuto de la sección que prefieras escuchar masterizada.' },
        q8: { q: '¿Puedo adjuntar un audio de referencia para mi master?', a: 'Podés adjuntar junto con tu mezcla un audio de referencia para que podamos asesorarte, ver el estado en el que se encuentra la mezcla y comprender el sonido que estás buscando. En nuestro estudio estamos capacitados para ayudarte a encontrar un sonido de acuerdo a las necesidades de cada producción. El trabajo es artesanal y personalizado.' },
        q9: { q: '¿Cuáles son los medios de pago que disponen?', a: 'Podés abonar con tarjeta de débito o crédito, transferencia bancaria, Mercado Pago, Pay-Pal o efectivo.' }
      },
      contacto: {
        title: 'Contáctanos.',
        copy: 'Contanos sobre tu proyecto y tus objetivos. Te asesoramos para encontrar el tratamiento adecuado para que tu música suene como imaginás.',
        nombre: 'Tu nombre',
        nombrePh: 'Nombre y apellido',
        email: 'Email',
        mensaje: 'Mensaje',
        mensajePh: 'Contame sobre tu proyecto',
        enviar: 'Enviar mensaje →',
        enviando: 'Enviando...',
        gracias: 'Gracias. Tu mensaje fue enviado correctamente. Te responderemos a la brevedad.',
        error: 'No pudimos enviar tu mensaje. Por favor, intentá nuevamente o escribinos a matiasparisimastering@gmail.com.'
      },
      footer: {
        sitio: 'Sitio',
        home: 'Home',
        sobreMi: 'Sobre mí',
        contacto: 'Contacto'
      },
      menu: { abrir: 'Abrir menú', cerrar: 'Cerrar menú' },
      video: { fallbackTitle: '0819 / registro del estudio', fallbackCopy: 'El video no se puede reproducir aquí; podés ver la sala en la imagen.' },
      episodio: { proximamente: 'El episodio "{title}" estará disponible muy pronto.' }
    },

    en: {
      nav: {
        estudio: 'Studio',
        galeria: 'Gallery',
        matias: 'Matías',
        faq: 'FAQ',
        contactar: 'Contact',
        enviarMezcla: 'Send my mix →'
      },
      hero: {
        kicker: 'Mastering studio · Buenos Aires',
        titleTop: 'Analog',
        titleBottom: 'mastering',
        copy: 'We are an international studio dedicated exclusively to audio mastering. We combine premium analog equipment with the latest digital technology so every artist reaches the sound they envisioned.'
      },
      proof: { label: 'masters delivered worldwide' },
      estudio: {
        eyebrow: 'The studio',
        title: 'Mastering<br><em>excellence.</em>'
      },
      servicios: {
        revision: { title: 'Mix Review', copy: 'Before mastering, we run a technical review of the mix, assessing tonal balance, dynamics, levels, stereo image, phase and headroom. The goal is to spot adjustments that let the mastering stage start from a solid mix and optimize the final result.' },
        estereo: { title: 'Stereo Mastering', copy: 'Final processing applied to a single stereo mix, optimizing tonal balance, dynamics, stereo image, level and translation.' },
        stems: { title: 'Stem Mastering', copy: 'Mastering built from separate groups of the mix, allowing more precise control over balance, dynamics and frequency content before the final sum.' }
      },
      formatos: {
        digital: { title: 'Mastering for Digital Platforms', copy: 'Master optimization for streaming and download distribution, taking care of level, dynamics, true peak, tonal balance and accurate translation across platforms.' },
        cd: { title: 'Mastering for CD', copy: 'Final master preparation for CD format, with control over level, dynamics, tonal balance, sequencing, fades and delivery specs.' },
        vinilo: { title: 'Mastering for Vinyl', copy: 'Mastering adapted to the constraints and characteristics of vinyl cutting, controlling low end, phase, sibilance, dynamics and high-frequency content.' }
      },
      sample: {
        free: 'FREE SAMPLE',
        minute: '1 MINUTE',
        tag: 'Courtesy of the studio',
        copy: 'We offer a free mastering sample of up to 1 minute so you can evaluate our approach, the treatment applied and the improvement over your mix before booking the full service. The sample is made on a representative section of the track, letting you compare the result with the original mix.'
      },
      galeria: { eyebrow: 'Gallery', title: 'Our<br><em>studio.</em>' },
      creditos: {
        title: 'Credits.',
        copy: 'This is our portfolio, featuring some of the work we have completed.',
        caption: 'MASTERED AT MATIAS PARISI MASTERING'
      },
      matias: {
        eyebrow: 'About me',
        title: 'Matías<br><em>Parisi.</em>',
        role: 'Mastering engineer / Buenos Aires',
        p1: 'Matías Parisi is a mastering engineer and educator specialized in mixing and mastering, with over 20 years of experience in audio. Throughout his career he has completed more than 13,000 masters for artists, producers and labels worldwide.',
        p2: 'His work combines technical expertise, musical judgment and a carefully curated selection of vintage analog equipment, ensuring every project keeps its identity while reaching its full sonic potential.',
        p3: 'Alongside his studio work, he is head of the Mix and Mastering department at EMMPI and EMBA, training new generations of audio professionals.',
        stat1: 'Years of professional experience',
        stat2: 'Masters completed',
        creditsTitle: 'Selected Credits',
        creditsIntro: 'Throughout his career he has worked on projects for artists and producers such as:',
        creditsNote: 'Among many others.',
        labelsTitle: 'Labels',
        labelsCopy: 'His mastering work is also part of releases linked to labels such as Nervous Records of New York, ZZK Records, Cosmovision, Ritmos del Sur, Fértil Discos, Cadenza Records and Made in Miami by Oscar G.',
        chartsTitle: 'Charts & Radio Show',
        chartsCopy: 'Numerous tracks mastered at the studio have reached the #1 spot and other top positions on the Beatport and Traxsource charts. In addition, several productions have been featured on international radio shows by leading names in electronic music, including shows linked to Erick Morillo, Glitterbox Radio Show Ibiza with Anané and Louie Vega of Masters At Work, and the Hed Kandi Radio Show.'
      },
      faq: {
        eyebrow: 'Before you send',
        title: 'Frequently<br><em>asked.</em>',
        q1: { q: 'Who can book the service?', a: 'Anyone who has finished the mixing stage of their track or album.' },
        q2: { q: 'Where can I book the service from?', a: 'You can book our services from anywhere in the world, in person or remotely.' },
        q3: { q: 'Where can I find the PDF guide?', es: 'CLICK HERE SPANISH', en: 'CLICK HERE ENGLISH' },
        q4: { q: 'How long does it take to master a track?', a: 'We adapt to each artist\'s deadlines and needs, which means we can adjust our schedule to deliver the master within 24/48 hours after the mix is received and approved.' },
        q5: { q: 'Do you master specifically for each format or platform?', a: 'Yes. Every master we deliver is tailored to the format or platform you request, whether digital (Spotify, YouTube, for example) or physical formats (CDs and vinyl).' },
        q6: { q: 'Are there any benefits for record labels?', a: 'We offer several discounts for record labels. <a href="#contacto">Get in touch with us</a> for more information.' },
        q7: { q: 'Can I get a free sample?', a: 'You can request, via email and free of charge, a one-minute sample of the section you\'d like to hear mastered.' },
        q8: { q: 'Can I attach a reference track for my master?', a: 'You can attach a reference track along with your mix so we can advise you, assess the current state of the mix and understand the sound you\'re after. Our studio is equipped to help you find the right sound for each production — it\'s hands-on, personalized work.' },
        q9: { q: 'What payment methods do you accept?', a: 'You can pay by debit or credit card, bank transfer, Mercado Pago, PayPal or cash.' }
      },
      contacto: {
        title: 'Get in touch.',
        copy: 'Tell us about your project and your goals. We\'ll help you find the right treatment so your music sounds the way you imagined it.',
        nombre: 'Your name',
        nombrePh: 'First and last name',
        email: 'Email',
        mensaje: 'Message',
        mensajePh: 'Tell us about your project',
        enviar: 'Send message →',
        enviando: 'Sending...',
        gracias: 'Thank you. Your message was sent successfully. We\'ll get back to you shortly.',
        error: 'We couldn\'t send your message. Please try again or email us at matiasparisimastering@gmail.com.'
      },
      footer: {
        sitio: 'Site',
        home: 'Home',
        sobreMi: 'About',
        contacto: 'Contact'
      },
      menu: { abrir: 'Open menu', cerrar: 'Close menu' },
      video: { fallbackTitle: '0819 / studio footage', fallbackCopy: 'The video can\'t be played here; you can see the room in the photo instead.' },
      episodio: { proximamente: 'The episode "{title}" will be available very soon.' }
    }
  };

  function getPath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : null;
    }, obj);
  }

  var STORAGE_KEY = 'mp-mastering-lang';
  var currentLang = 'es';

  function translate(path) {
    var dict = translations[currentLang] || translations.es;
    var value = getPath(dict, path);
    if (value === null) value = getPath(translations.es, path);
    return value;
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'es';
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = translate(el.getAttribute('data-i18n'));
      if (typeof value === 'string') el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = translate(el.getAttribute('data-i18n-html'));
      if (typeof value === 'string') el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var value = translate(el.getAttribute('data-i18n-placeholder'));
      if (typeof value === 'string') el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    document.dispatchEvent(new CustomEvent('mp:languagechange', { detail: { lang: lang } }));
  }

  function initLangSwitch() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var initial = (saved === 'en' || saved === 'es') ? saved : 'es';

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    applyLanguage(initial);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitch);
  } else {
    initLangSwitch();
  }

  window.mpI18n = { t: translate, apply: applyLanguage, getLang: function () { return currentLang; } };
})();
