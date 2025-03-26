
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
        shortText: 'Aprende desde las bases hasta técnicas avanzadas de maquillaje para eventos, moda y producciones, desarrollando habilidades profesionales con las últimas tendencias y productos del mercado.',
        callToAction: '¡Inscríbete hoy y conviértete en un experto maquillador profesional!',
        imagen: './resources/cursos-tradicionales/tradicionales-maquillaje.webp'
      },
      {
        cursoTitulo: 'Curso de ',
        cursoTitulo2: 'manicuría',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Domina el cuidado y embellecimiento de uñas con esmaltado tradicional y semipermanente, nail art, decoración y técnicas avanzadas para ofrecer un servicio profesional de alta calidad.',
        imagen: './resources/cursos-tradicionales/tradicionales-manicuria.webp'
      },
      {
        cursoTitulo: 'Asesoría de ',
        cursoTitulo2: 'imagen',
        duracion: '5 meses',
        clases: '2hs semanales',
        shortText: 'Descubre cómo potenciar la imagen personal y profesional con análisis de colorimetría, morfología, estilo y vestimenta, brindando herramientas para transformar y asesorar a tus clientes.',
        imagen: './resources/cursos-tradicionales/tradicionales-asesoria.webp'
      },
      {
        cursoTitulo: 'Peluquería masculina ',
        cursoTitulo2: '& barbería',
        duracion: '4 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluidos',
        shortText: 'Aprende cortes clásicos y modernos, afeitado, degradados y técnicas especializadas para ofrecer un servicio completo en barbería, con las últimas tendencias en estética masculina.',
        imagen: './resources/cursos-tradicionales/tradicionales-barberia.webp'
      },
      {
        cursoTitulo: 'Cosmetología ',
        cursoTitulo2: 'presencial u online',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Materiales no incluídos',
        shortText: 'Formación integral en el cuidado de la piel, tratamientos faciales, limpieza profunda, aparatología estética y técnicas cosméticas para mejorar la salud y apariencia facial.',
        imagen: './resources/cursos-tradicionales/tradicionales-cosmetologia.webp'
      },
      {
        cursoTitulo: 'Lifting ',
        cursoTitulo2: 'de pestañas',
        duracion: '3 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Aprende a realzar la mirada con la técnica de lifting, proporcionando curvatura y definición natural a las pestañas sin necesidad de extensiones o rizadores.',
        imagen: './resources/cursos-tradicionales/tradicionales-lifting.webp'
      },
      {
        cursoTitulo: 'Extensión de ',
        cursoTitulo2: 'pestañas pelo por pelo',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Domina la aplicación de extensiones individuales para lograr pestañas más largas, voluminosas y naturales, con técnicas adaptadas a cada tipo de ojo y preferencia.',
        imagen: './resources/cursos-tradicionales/tradicionales-extensionpestanas.webp'
      },
      {
        cursoTitulo: 'Modelo ',
        cursoTitulo2: 'publicitario',
        duracion: '2 meses',
        clases: '2hs semanales',
        shortText: 'Aprende a desenvolverte frente a cámaras, mejorar tu expresión corporal y dominar poses para campañas, pasarelas y sesiones fotográficas en la industria de la moda y publicidad.',
        imagen: './resources/cursos-tradicionales/tradicionales-modelo.webp'
      },
      {
        cursoTitulo: 'Fotografía para redes ',
        cursoTitulo2: 'con tu móvil',
        duracion: '2 meses',
        clases: '2hs semanales',
        shortText: 'Descubre cómo capturar, editar y optimizar fotos profesionales con tu celular para potenciar tu imagen en redes sociales y atraer más seguidores o clientes.',
        imagen: './resources/cursos-tradicionales/tradicionales-fotografia.webp'
      },
      {
        cursoTitulo: 'Diseño y​ ',
        cursoTitulo2: 'perfilado de cejas',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Materiales no incluídos',
        shortText: 'Aprende a analizar, diseñar y perfilar cejas según la estructura facial, aplicando técnicas de depilación, visagismo y diseño personalizado para cada cliente.',
        imagen: './resources/cursos-tradicionales/tradicionales-perfilado.webp'
      },
      {
        cursoTitulo: 'Maquillaje artístico ',
        cursoTitulo2: '& caracterización',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Explora técnicas avanzadas de maquillaje escénico, fantasía y efectos especiales para teatro, cine, televisión y eventos temáticos, desarrollando creatividad y precisión.',
        imagen: './resources/cursos-tradicionales/tradicionales-artistico.webp'
      },
      {
        cursoTitulo: 'Maquillaje cotillón ',
        cursoTitulo2: '& glitter bar',
        duracion: '2 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Domina técnicas de maquillaje festivo con glitter, piedras y colores vibrantes, creando looks llamativos ideales para fiestas, eventos y festivales.',
        imagen: './resources/cursos-tradicionales/tradicionales-cotillon.webp'
      },
      {
        cursoTitulo: 'Curso de peinados ',
        cursoTitulo2: 'sociales & de moda',
        duracion: '4 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Aprende a realizar peinados elegantes y modernos para bodas, eventos y producciones, dominando trenzas, recogidos, ondas y técnicas de estilismo.',
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
        shortText: 'Aprende a crear trenzas básicas, avanzadas y de tendencia, combinando estilos modernos para peinados elegantes, casuales o para eventos especiales.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-trenzas.webp'
      },
      {
        cursoTitulo: 'Maquillaje ',
        cursoTitulo2: 'en ojos glam',
        duracion: '2 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Perfecciona técnicas de maquillaje de ojos con acabados glamorosos, dominando difuminados, pigmentos, delineados y pestañas para lograr miradas impactantes.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-ojos.webp'
      },
      {
        cursoTitulo: 'Pestañas pelo por pelo ',
        cursoTitulo2: 'en diferentes efectos',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Aprende a aplicar extensiones de pestañas con distintos efectos, desde natural hasta dramático, personalizando la técnica según la estructura ocular de cada cliente.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-pestanas.webp'
      },
      {
        cursoTitulo: 'Laminado, nutrición y henna ',
        cursoTitulo2: 'en cejas',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Domina el laminado de cejas para fijarlas y definirlas, aplicando henna para dar color y nutrición para fortalecer el vello.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-laminado.webp'
      },
      {
        cursoTitulo: 'Extensiones de ',
        cursoTitulo2: 'cejas pelo por pelo',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Aprende a aplicar extensiones individuales en cejas para dar volumen y corregir áreas despobladas, logrando un efecto natural y duradero.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-extension.webp'
      },
      {
        cursoTitulo: 'Spa de ',
        cursoTitulo2: 'cejas',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Descubre tratamientos exclusivos para embellecer cejas con hidratación, exfoliación y definición, ofreciendo un servicio premium para realzar la mirada.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-spacejas.webp'
      },
      {
        cursoTitulo: 'Moldes y curvaturas ',
        cursoTitulo2: 'para lifting',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Aprende a seleccionar y aplicar correctamente los moldes y curvaturas en el lifting de pestañas, logrando efectos personalizados según el tipo de ojo.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-moldes.webp'
      },
      {
        cursoTitulo: 'Pieles ',
        cursoTitulo2: 'perfectas y correctivas',
        duracion: '2 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Domina técnicas de preparación y corrección de piel para lograr un maquillaje impecable, cubriendo imperfecciones y resaltando la belleza natural.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-pieles.webp'
      },
      {
        cursoTitulo: 'Pieles ',
        cursoTitulo2: 'blindadas',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Aprende a realizar un maquillaje de alta duración y resistencia a factores externos, ideal para eventos, fotografía y climas extremos.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-blindadas.webp'
      },
      {
        cursoTitulo: 'Teoría del color ',
        cursoTitulo2: 'aplicada al maquillaje en ojos',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Descubre cómo combinar colores estratégicamente para resaltar la mirada, aplicando teoría del color en sombras y delineados.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-color.webp'
      },
      {
        cursoTitulo: 'Técnica de actuación ',
        cursoTitulo2: 'en lifting',
        duracion: '1 clase',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Mejora la técnica de lifting de pestañas con conocimientos avanzados en tiempos de actuación y procedimientos para resultados óptimos.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-lifting.webp'
      },
      {
        cursoTitulo: 'Perfeccionamiento ',
        cursoTitulo2: 'en manicuria',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Refina tus habilidades en esmaltado semipermanente, nail art y cuidado de uñas con técnicas avanzadas y tendencias actuales.',
        imagen: './resources/cursos-perfeccionamiento/avanzado-manicuria.webp'
      },
      {
        cursoTitulo: 'Intensivo de lifting ',
        cursoTitulo2: 'privado',
        duracion: '2 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Capacitación personalizada para perfeccionar la técnica de lifting de pestañas, adaptada a cada necesidad y nivel de experiencia.',
        imagen: './resources/cursos-perfeccionamiento/privado-lifting.webp'
      },
      {
        cursoTitulo: 'Intensivo de perfilado de cejas ',
        cursoTitulo2: 'privado',
        duracion: '2 clases',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Entrenamiento exclusivo y personalizado para perfeccionar el diseño, depilación y perfilado de cejas con técnicas avanzadas.',
        imagen: './resources/cursos-perfeccionamiento/privado-cejas.webp'
      },

    ],
    /* Categorías para agregar en el futuro? */
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
    tradicionales: 'Tradicionales',
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
