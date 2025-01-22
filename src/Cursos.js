
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Cursos.css';
import Navmenu from './Navmenu';

function Cursos({ courseType, setselectedCourseType }) {

  const coursesData = {
    tradicionales: [
      {
        cursoTitulo: 'Maquillaje social ',
        cursoTitulo2: '& profesional',
        duracion: '10 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Domina el arte del maquillaje desde lo básico hasta lo profesional. Aprende técnicas para todas las edades y ocasiones especiales. Obtén el certificado de Maquillador Social y accede al curso avanzado. Descubre la creatividad en TV, cine, y más. Amplía tus horizontes con historia del maquillaje y la moda. Prepárate para una carrera exitosa. ¡Inscríbete hoy y conviértete en un experto maquillador profesional!',
        callToAction: '¡Inscríbete hoy y conviértete en un experto maquillador profesional!',
        imagen: './resources/cursos-tradicionales/tradicionales-maquillaje.webp'
      },
      {
        cursoTitulo: 'Curso de ',
        cursoTitulo2: 'manicuría',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Descubre el arte completo de la Manicura en nuestro curso estructurado en varios módulos especializados. Aprende desde la Manicuría Básica y Belleza de Manos hasta técnicas avanzadas como Uñas Esculpidas en Gel y Manicuría Rusa. Prácticas intensivas con modelos aseguran tu desarrollo profesional. Perfecto para quienes buscan dominar cada aspecto del cuidado de uñas y pies con métodos modernos como el Sistema DIP. ¡Inscríbete y transforma tu pasión en una carrera exitosa!',
        imagen: './resources/cursos-tradicionales/tradicionales-manicuria.webp'
      },
      {
        cursoTitulo: 'Asesoría de ',
        cursoTitulo2: 'imagen',
        duracion: '5 meses',
        clases: '2hs semanales',
        shortText: 'Descubre la Asesoría de Imagen, donde aprenderás a identificar siluetas, potenciar estilos y optimizar guardarropas. Aprende técnicas de colorimetría para elegir los colores ideales. No se requieren conocimientos previos; desde principiantes hasta profesionales, todos pueden beneficiarse. Este curso es para todos los géneros y te prepara para una carrera en asesoría de imagen personal. Transforma tu estilo y comunicación visual, mejorando tu impacto en todas las áreas de tu vida con confianza y conocimiento.',
        imagen: './resources/cursos-tradicionales/tradicionales-asesoria.webp'
      },
      {
        cursoTitulo: 'Peluquería masculina ',
        cursoTitulo2: '& barbería',
        duracion: '4 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluidos',
        shortText: 'Domina el arte de la Barbería y Corte Masculino en nuestro curso práctico y completo. Aprende técnicas desde el corte básico hasta estilos avanzados como Fade y Razor Fade. Clases teórico-prácticas con modelo aseguran tu dominio profesional. No se requiere experiencia previa; te proporcionamos todo lo necesario para practicar fuera de clases. Al finalizar, examen con 100% de asistencia obligatoria. Prepárate para una carrera dinámica y llena de estilo. ¡Inscríbete y transforma tu pasión en profesión!',
        imagen: './resources/cursos-tradicionales/tradicionales-barberia.webp'
      },
      {
        cursoTitulo: 'Cosmetología ',
        cursoTitulo2: 'presencial u online',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Materiales no incluídos',
        shortText: 'Sumérgete en el mundo de la cosmetología con nuestro curso especializado. Aprende a diagnosticar y tratar la piel con técnicas personalizadas y aparatología avanzada. Grupos reducidos garantizan atención individualizada. Perfecto para todos, sin necesidad de experiencia previa. Descubre tu potencial en el cuidado de la piel y únete a nuestra comunidad de aprendizaje. ¡Inscríbete ahora y conviértete en un experto en cosmetología!',
        imagen: './resources/cursos-tradicionales/tradicionales-cosmetologia.webp'
      },
      {
        cursoTitulo: 'Lifting ',
        cursoTitulo2: 'de pestañas',
        duracion: '3 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Domina el arte del Lifting, Nutrición y Tinte de Pestañas en nuestro curso intensivo. Aprende técnicas avanzadas para lograr la curvatura perfecta y mantener pestañas saludables. Cuatro clases prácticas aseguran dominio completo. Ideal para quienes buscan ofrecer servicios de alta demanda y calidad. ¡Inscríbete ahora y conviértete en un experto en realzar la belleza natural de las pestañas!',
        imagen: './resources/cursos-tradicionales/tradicionales-lifting.webp'
      },
      {
        cursoTitulo: 'Extensión de ',
        cursoTitulo2: 'pestañas pelo por pelo',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Perfecciona tu técnica en Extensiones de Pestañas pelo por pelo con nuestro curso intensivo. Aprende todo sobre morfología del ojo, tipos de extensiones, adhesivos y más. Clases prácticas con muñeco de práctica y modelo real aseguran dominio de la técnica. Atención personalizada con solo dos alumnas por horario. Impulsa tu carrera en este servicio altamente demandado y rentable. ¡Inscríbete ahora y domina el arte de realzar miradas con pestañas impecables!',
        imagen: './resources/cursos-tradicionales/tradicionales-extensionpestanas.webp'
      },
      {
        cursoTitulo: 'Modelo ',
        cursoTitulo2: 'publicitario',
        duracion: '2 meses',
        clases: '2hs semanales',
        shortText: 'Descubre el mundo del modelaje publicitario con nuestro curso online. Diseñado para modelos independientes que buscan brillar en la industria, aprenderás desde poses y técnicas frente a la cámara hasta construcción de marca y tendencias actuales. Perfecto para principiantes, sin necesidad de experiencia previa. Únete a nosotros y prepárate para destacar en castings, editoriales y más. ¡Inscríbete ahora y empieza a modelar tu futuro con nosotros!',
        imagen: './resources/cursos-tradicionales/tradicionales-modelo.webp'
      },
      {
        cursoTitulo: 'Fotografía para redes ',
        cursoTitulo2: 'con tu móvil',
        duracion: '2 meses',
        clases: '2hs semanales',
        shortText: 'Descubre el arte de la Fotografía para Redes Sociales con tu móvil. Desde principiantes hasta expertos, aprenderás composición, iluminación y edición para capturar imágenes impactantes. No se requieren conocimientos previos; el curso te guiará desde lo básico hasta técnicas avanzadas. Explora estilos fotográficos, tendencias y cómo generar contenido visual que destaque. Ideal para emprendedores y creativos que buscan potenciar su presencia en redes. Únete a nosotros y transforma tu smartphone en una herramienta de expresión artística.',
        imagen: './resources/cursos-tradicionales/tradicionales-fotografia.webp'
      },
      {
        cursoTitulo: 'Diseño y​ ',
        cursoTitulo2: 'perfilado de cejas',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Materiales no incluídos',
        shortText: 'Descubre el arte del perfilado de cejas, uno de los servicios más solicitados y rentables en el mundo del maquillaje. Aprende la teoría y técnicas precisas para perfilar con pinza, adaptadas a cada morfología facial. Las clases prácticas incluyen la oportunidad de trabajar con modelos, proporcionados por ti mismo/a, para evaluación directa en clase. No pierdas esta oportunidad de aprender y atraer clientela recurrente. ¡Inscríbete y destaca en este lucrativo campo del maquillaje!',
        imagen: './resources/cursos-tradicionales/tradicionales-perfilado.webp'
      },
      {
        cursoTitulo: 'Maquillaje artístico ',
        cursoTitulo2: '& caracterización',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Descubre tu creatividad con nuestro Curso de Maquillaje Artístico y Caracterización. Diseñado para desarrollar y potenciar tu talento, cada clase explora temas como animales, payasos, maquillaje infantil, y más. Perfecto para maquilladores, actores o cualquier persona interesada en el arte del maquillaje. Aprende técnicas avanzadas y habilidades comerciales clave. Amplía tu repertorio profesional y destaca en este campo emocionante. ¡Inscríbete ahora y haz realidad tu potencial artístico!',
        imagen: './resources/cursos-tradicionales/tradicionales-artistico.webp'
      },
      {
        cursoTitulo: 'Maquillaje cotillón ',
        cursoTitulo2: '& glitter bar',
        duracion: '2 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Domina el arte del Maquillaje Cotillón en nuestro curso INTENSIVO. Aprende todo sobre servicios para eventos, Glitter Bar, y maquillaje neón. Incluimos parte de los productos; necesitarás tus herramientas. Enfoque práctico en manejo de pinceles y creatividad en diseño de maquillaje. Ideal para emprendedores sin experiencia previa. Desarrolla tu marca y aprende marketing profesional para eventos. ¡Únete y convierte tu pasión en un negocio vibrante y exitoso!',
        imagen: './resources/cursos-tradicionales/tradicionales-cotillon.webp'
      },
      {
        cursoTitulo: 'Curso de peinados ',
        cursoTitulo2: 'sociales & de moda',
        duracion: '4 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Domina el arte del Peinado Social y de Moda con nuestro curso especializado. Aprende desde técnicas básicas hasta avanzadas para eventos y producciones comerciales. Prácticas intensivas con diversas herramientas aseguran tu dominio. Ideal para quienes desean incursionar en el mundo del peinado sin experiencia previa. ¡Únete y desarrolla tu carrera en una industria dinámica y en crecimiento!',
        imagen: './resources/cursos-tradicionales/tradicionales-peinado.webp'
      },
    ],
    advanced: [
      {
        cursoTitulo: 'Técnica de ',
        cursoTitulo2: 'trenzas',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluidos',
        shortText: 'Descubre el arte de las trenzas en nuestro curso accesible para todos. Aprende desde cero con técnicas básicas y avanzadas como trenza de 2 cabos, espiga y más. Dominarás el manejo del cabello, productos adecuados y cuidados esenciales. Perfecto para quienes desean crear peinados únicos y duraderos. ¡Inscríbete ahora y convierte tu creatividad en hermosas trenzas!',
        imagen: './resources/cursos-perfeccionamiento/avanzado-trenzas.webp'
      },
      {
        cursoTitulo: 'Maquillaje ',
        cursoTitulo2: 'en ojos glam',
        duracion: '2 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-ojos.webp'
      },
      {
        cursoTitulo: 'Pestañas pelo por pelo ',
        cursoTitulo2: 'en diferentes efectos',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-pestanas.webp'
      },
      {
        cursoTitulo: 'Laminado, nutrición y henna ',
        cursoTitulo2: 'en cejas',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-laminado.webp'
      },
      {
        cursoTitulo: 'Extensiones de ',
        cursoTitulo2: 'cejas pelo por pelo',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-extension.webp'
      },
      {
        cursoTitulo: 'Spa de',
        cursoTitulo2: 'cejas',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-spacejas.webp'
      },
      {
        cursoTitulo: 'Moldes y curvaturas ',
        cursoTitulo2: 'para lifting',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-moldes.webp'
      },
      {
        cursoTitulo: 'Pieles ',
        cursoTitulo2: 'perfectas y correctivas',
        duracion: '2 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-pieles.webp'
      },
      {
        cursoTitulo: 'Pieles ',
        cursoTitulo2: 'blindadas',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-blindadas.webp'
      },
      {
        cursoTitulo: 'Teoría del color ',
        cursoTitulo2: 'aplicada al maquillaje en ojos',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-color.webp'
      },
      {
        cursoTitulo: 'Técnica de actuación ',
        cursoTitulo2: 'en lifting',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-lifting.webp'
      },
      {
        cursoTitulo: 'Perfeccionamiento ',
        cursoTitulo2: 'en manicuria',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/avanzado-manicuria.webp'
      },
      {
        cursoTitulo: 'Intensivo de lifting ',
        cursoTitulo2: 'privado',
        duracion: '2 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/privado-lifting.webp'
      },
      {
        cursoTitulo: 'Intensivo de perfilado de cejas ',
        cursoTitulo2: 'privado',
        duracion: '2 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'placeholder',
        imagen: './resources/cursos-perfeccionamiento/privado-cejas.webp'
      },

    ],
    /* Categorías para agregar en el futuro */
    /* online: [
      {
        cursoTitulo: 'Placeholder ',
        cursoTitulo2: '& more',
        duracion: '10 meses',
        clases: '2hs semanales',
        materiales: '| No incluye materiales',
        shortText: 'placeholder',
        imagen: './resources/maquillajeonline.png'
      },
    ],
    fashion: [
      {
        cursoTitulo: 'Placeholder ',
        cursoTitulo2: '& more',
        duracion: '10 meses',
        clases: '2hs semanales',
        materiales: '| No incluye materiales',
        shortText: 'placeholder',
        imagen: './resources/maquillajeonline.png'
      },
    ], */
  };

  const courseTypeLabels = {
    tradicionales: 'tradicionales',
    advanced: 'de Perfeccionamiento e Intensivos',
    /* Categorías para agregar en el futuro */
    /* online: 'online',
    fashion: 'de moda', */
  };

  // const and functions to "open" each course detailed info and block scrolling on the background while doing so

  const [selectedCurso, setSelectedCurso] = useState(null);

  const openModal = (index) => {
    setSelectedCurso(index);
    setIsAnimating(true); // Start the animation
    document.body.style.overflow = 'hidden'; // Disable body scrolling
  };

  const closeModal = () => {
    setIsClosing(true); // Start closing animation
    setTimeout(() => {
      setSelectedCurso(null);
      setIsClosing(false); // Reset closing state
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }, 300); // Timeout matches the duration of the CSS animation
  };

  // Animation handling for opening and closing modal

  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Cleanup effect to re-enable scrolling when the component unmounts

  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden'; // Enable scrolling on component unmount
    };
  }, []);

  // const and functions to switch between categories and titles

  const handleCourseTypeChange = (event) => {
    setselectedCourseType(event.target.value);
  };

  const displayedCourses = coursesData[courseType] || []; // Handle empty array
  const selectedCourseLabel = courseTypeLabels[courseType] || 'Cursos'; // Default label 

  return (
    <>
      <div className="cursosSection">
        <img className='backgroundDecoration' src='./resources/backgroundimg.webp' alt='' />
        <Navmenu courseType={courseType} setselectedCourseType={setselectedCourseType} />

        <div className='cursos'>
          <div className="sortMenu">
            <h2>Cursos <br /><span className='titleItalic'>{selectedCourseLabel}</span></h2> {/* Dynamically show selected course label */}
            <ul>
              <li>
                <button style={{ fontWeight: courseType === 'tradicionales' ? 'bold' : 'normal' }} value="tradicionales" onClick={handleCourseTypeChange}>
                  Tradicionales
                </button>
              </li>
              <li>
                <button style={{ fontWeight: courseType === 'advanced' ? 'bold' : 'normal' }} value="advanced" onClick={handleCourseTypeChange}>
                  de Perfeccionamiento e Intensivos
                </button>
              </li>
              {/* Categorías para agregar en el futuro */}
              {/* <li>
                <button style={{ fontWeight: courseType === 'online' ? 'bold' : 'normal' }} value="online" onClick={handleCourseTypeChange}>
                  Online
                </button>
              </li>
              <li>
                <button style={{ fontWeight: courseType === 'fashion' ? 'bold' : 'normal' }} value="fashion" onClick={handleCourseTypeChange}>
                  Moda
                </button>
              </li> */}
            </ul>
          </div>
          <div className="cursosContainer">
            {displayedCourses.map((curso, index) => (
              <div className="cursoContainer" key={index}>
                <div className="tarjetaCurso pointer" onClick={() => openModal(index)}>
                  <div className='imgContainer'>
                    <img className="cursoImagen" src={curso.imagen} alt="" />
                  </div>
                  <p className="cursoDuracion">{curso.duracion}</p>
                  <h2 className="cursoTitulo">{curso.cursoTitulo}<span className='titleItalic'>{curso.cursoTitulo2}</span></h2>
                  <p className="cursoClases">{curso.clases} {curso.materiales}</p>
                  <p className="cursoBreve">{curso.shortText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedCurso !== null && (
          <div className={`modalContainer ${isClosing ? 'modalClose' : 'modalOpen'}`}>
            <div
              className="modalOverlay"
              onClick={closeModal}
            ></div>
            <div className={`modalOuter ${isAnimating ? 'modalOpen' : ''}`}>

              <img src={coursesData[selectedCourseLabel][selectedCurso].imagen} alt='' />

              <div className='modalContent'>


                <div className="modalHeader">
                  <h2 className="cursoTitulo">{coursesData[selectedCourseLabel][selectedCurso].cursoTitulo}<span className='titleItalic'>{coursesData[selectedCourseLabel][selectedCurso].cursoTitulo2}</span></h2>
                </div>

                <p className='modalText'>{coursesData[selectedCourseLabel][selectedCurso].shortText}</p>
                <p className='bold'>{coursesData[selectedCourseLabel][selectedCurso].callToAction}</p>

                <div className='modalButtons'>
                  <a href="https://wa.me/5493516526268?text=Hola%20quisiera%20consultar%20información%20sobre" target='_blank'>Consultar Info</a>
                  <button className='pointer bold' onClick={closeModal}>Volver a todos los cursos</button>
                </div>

              </div>

            </div>
          </div>
        )}
      </div>


    </>
  );
}

export default Cursos;
