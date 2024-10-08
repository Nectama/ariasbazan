
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Cursos.css';

function CursosMenu({ algo, setAlgo }) {

  const coursesData = {
    tradicionales: [
      {
        cursoTitulo: 'Maquillaje social ',
        cursoTitulo2: '& profesional',
        duracion: '10 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Domina el arte del maquillaje desde lo básico hasta lo profesional. Aprende técnicas para todas las edades y ocasiones especiales. Obtén el certificado de Maquillador Social y accede al curso avanzado. Descubre la creatividad en TV, cine, y más. Amplía tus horizontes con historia del maquillaje y la moda. Prepárate para una carrera exitosa. ¡Inscríbete hoy y conviértete en un experto maquillador profesional!',
        imagen: './resources/maquisocialprofesional.png'
      },
      {
        cursoTitulo: 'Maquillaje artístico ',
        cursoTitulo2: '& caracterización',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Descubre tu creatividad con nuestro Curso de Maquillaje Artístico y Caracterización. Diseñado para desarrollar y potenciar tu talento, cada clase explora temas como animales, payasos, maquillaje infantil, y más. Perfecto para maquilladores, actores o cualquier persona interesada en el arte del maquillaje. Aprende técnicas avanzadas y habilidades comerciales clave. Amplía tu repertorio profesional y destaca en este campo emocionante. ¡Inscríbete ahora y haz realidad tu potencial artístico!',
        imagen: './resources/maquiartisticocaracter.png'
      },
      {
        cursoTitulo: 'Maquillaje ',
        cursoTitulo2: 'cotillón',
        duracion: '2 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Domina el arte del Maquillaje Cotillón en nuestro curso INTENSIVO. Aprende todo sobre servicios para eventos, Glitter Bar, y maquillaje neón. Incluimos parte de los productos; necesitarás tus herramientas. Enfoque práctico en manejo de pinceles y creatividad en diseño de maquillaje. Ideal para emprendedores sin experiencia previa. Desarrolla tu marca y aprende marketing profesional para eventos. ¡Únete y convierte tu pasión en un negocio vibrante y exitoso!',
        imagen: './resources/maquicotillon.png'
      },
      {
        cursoTitulo: 'Curso de ',
        cursoTitulo2: 'cosmetología',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| Materiales no incluídos',
        shortText: 'Sumérgete en el mundo de la cosmetología con nuestro curso especializado. Aprende a diagnosticar y tratar la piel con técnicas personalizadas y aparatología avanzada. Grupos reducidos garantizan atención individualizada. Perfecto para todos, sin necesidad de experiencia previa. Descubre tu potencial en el cuidado de la piel y únete a nuestra comunidad de aprendizaje. ¡Inscríbete ahora y conviértete en un experto en cosmetología!',
        imagen: './resources/cosmetologia.png'
      },
      {
        cursoTitulo: 'Curso de​ ',
        cursoTitulo2: 'perfilado de cejas',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Materiales no incluídos',
        shortText: 'Descubre el arte del perfilado de cejas, uno de los servicios más solicitados y rentables en el mundo del maquillaje. Aprende la teoría y técnicas precisas para perfilar con pinza, adaptadas a cada morfología facial. Las clases prácticas incluyen la oportunidad de trabajar con modelos, proporcionados por ti mismo/a, para evaluación directa en clase. No pierdas esta oportunidad de aprender y atraer clientela recurrente. ¡Inscríbete y destaca en este lucrativo campo del maquillaje!',
        imagen: './resources/perfilcejas.png'
      },
      {
        cursoTitulo: 'Extensiones de ',
        cursoTitulo2: 'pestañas pelo por pelo',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Perfecciona tu técnica en Extensiones de Pestañas pelo por pelo con nuestro curso intensivo. Aprende todo sobre morfología del ojo, tipos de extensiones, adhesivos y más. Clases prácticas con muñeco de práctica y modelo real aseguran dominio de la técnica. Atención personalizada con solo dos alumnas por horario. Impulsa tu carrera en este servicio altamente demandado y rentable. ¡Inscríbete ahora y domina el arte de realzar miradas con pestañas impecables!',
        imagen: './resources/cursopestañas.png'
      },
      {
        cursoTitulo: 'Curso de lifting, nutrición ',
        cursoTitulo2: '& tinte de pestañas',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Domina el arte del Lifting, Nutrición y Tinte de Pestañas en nuestro curso intensivo. Aprende técnicas avanzadas para lograr la curvatura perfecta y mantener pestañas saludables. Cuatro clases prácticas aseguran dominio completo. Ideal para quienes buscan ofrecer servicios de alta demanda y calidad. ¡Inscríbete ahora y conviértete en un experto en realzar la belleza natural de las pestañas!',
        imagen: './resources/liftingpestañas.png'
      },
      {
        cursoTitulo: 'Curso de peinados ',
        cursoTitulo2: 'sociales & de moda',
        duracion: '4 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluídos',
        shortText: 'Domina el arte del Peinado Social y de Moda con nuestro curso especializado. Aprende desde técnicas básicas hasta avanzadas para eventos y producciones comerciales. Prácticas intensivas con diversas herramientas aseguran tu dominio. Ideal para quienes desean incursionar en el mundo del peinado sin experiencia previa. ¡Únete y desarrolla tu carrera en una industria dinámica y en crecimiento!',
        imagen: './resources/peinadossociales.png'
      },
      {
        cursoTitulo: 'Curso de ',
        cursoTitulo2: 'manicuría integral',
        duracion: '9 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'Descubre el arte completo de la Manicura en nuestro curso estructurado en varios módulos especializados. Aprende desde la Manicuría Básica y Belleza de Manos hasta técnicas avanzadas como Uñas Esculpidas en Gel y Manicuría Rusa. Prácticas intensivas con modelos aseguran tu desarrollo profesional. Perfecto para quienes buscan dominar cada aspecto del cuidado de uñas y pies con métodos modernos como el Sistema DIP. ¡Inscríbete y transforma tu pasión en una carrera exitosa!',
        imagen: './resources/manicuriaintegral.png'
      },
      {
        cursoTitulo: 'Curso de barbería ',
        cursoTitulo2: '& corte masculino',
        duracion: '4 meses',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluidos',
        shortText: 'Domina el arte de la Barbería y Corte Masculino en nuestro curso práctico y completo. Aprende técnicas desde el corte básico hasta estilos avanzados como Fade y Razor Fade. Clases teórico-prácticas con modelo aseguran tu dominio profesional. No se requiere experiencia previa; te proporcionamos todo lo necesario para practicar fuera de clases. Al finalizar, examen con 100% de asistencia obligatoria. Prepárate para una carrera dinámica y llena de estilo. ¡Inscríbete y transforma tu pasión en profesión!',
        imagen: './resources/barberiacorte.png'
      },
      {
        cursoTitulo: 'Curso de ',
        cursoTitulo2: 'trenzas',
        duracion: '1 mes',
        clases: '2hs semanales',
        materiales: '| Elementos y materiales no incluidos',
        shortText: 'Descubre el arte de las trenzas en nuestro curso accesible para todos. Aprende desde cero con técnicas básicas y avanzadas como trenza de 2 cabos, espiga y más. Dominarás el manejo del cabello, productos adecuados y cuidados esenciales. Perfecto para quienes desean crear peinados únicos y duraderos. ¡Inscríbete ahora y convierte tu creatividad en hermosas trenzas!',
        imagen: './resources/cursotrenzas.png'
      },
    ],
    online: [
      {
        cursoTitulo: 'Maquillaje social ',
        cursoTitulo2: '& profesional online',
        duracion: '10 meses',
        clases: '2hs semanales',
        materiales: '| No incluye materiales',
        shortText: 'Domina el maquillaje social y profesional estudiando online. Aprende desde pieles y colores hasta técnicas avanzadas como maquillaje para novias y producciones artísticas. Perfecto para iniciarte o perfeccionarte en el mundo del maquillaje. Al finalizar, obtén el Certificado de Maquillador Profesional y abre las puertas a nuevas oportunidades en TV, cine y más. ¡Inscríbete hoy y transforma tu pasión en una carrera exitosa!',
        imagen: './resources/maquillajeonline.png'
      },
      {
        cursoTitulo: 'Curso de ',
        cursoTitulo2: 'cosmetología online',
        duracion: '5 meses',
        clases: '2hs semanales',
        materiales: '| No incluye materiales',
        shortText: 'Domina la cosmetología desde casa con nuestro curso online. Aprende a diagnosticar y tratar la piel con técnicas avanzadas y principios activos personalizados. Perfecto para todos los niveles, enfocado en brindarte las habilidades necesarias sin requerir experiencia previa. Descubre cómo mejorar la salud y estética de la piel con nuestros expertos. ¡Inscríbete ahora y conviértete en un profesional de la cosmetología!',
        imagen: './resources/cosmetologiaonline.png'
      },
    ],
    fashion: [
      {
        cursoTitulo: 'Modelo ',
        cursoTitulo2: 'publicitario',
        duracion: '2 meses',
        clases: '2hs semanales',
        shortText: 'Descubre el mundo del modelaje publicitario con nuestro curso online. Diseñado para modelos independientes que buscan brillar en la industria, aprenderás desde poses y técnicas frente a la cámara hasta construcción de marca y tendencias actuales. Perfecto para principiantes, sin necesidad de experiencia previa. Únete a nosotros y prepárate para destacar en castings, editoriales y más. ¡Inscríbete ahora y empieza a modelar tu futuro con nosotros!',
        imagen: './resources/modelopublicitario.png'
      },
      {
        cursoTitulo: 'Producción ',
        cursoTitulo2: 'de moda',
        duracion: '4 meses',
        clases: '2hs semanales',
        shortText: 'Sumérgete en el mundo de la Producción de Moda con nuestro curso especializado. Ideal para apasionados de la moda, fotógrafos, maquilladores y emprendedores. Aprende desde lo básico hasta la organización de equipos profesionales y tendencias actuales. Diseñado para todos, a partir de los 15 años, con un enfoque profesional y práctico. Con docentes expertos y un programa completo que incluye prácticas profesionales, prepárate para destacarte en la industria de la moda.',
        imagen: './resources/produmoda.png'
      },
      {
        cursoTitulo: 'Fotografía para redes ',
        cursoTitulo2: 'sociales con tu móvil',
        duracion: '2 meses',
        clases: '2hs semanales',
        shortText: 'Descubre el arte de la Fotografía para Redes Sociales con tu móvil. Desde principiantes hasta expertos, aprenderás composición, iluminación y edición para capturar imágenes impactantes. No se requieren conocimientos previos; el curso te guiará desde lo básico hasta técnicas avanzadas. Explora estilos fotográficos, tendencias y cómo generar contenido visual que destaque. Ideal para emprendedores y creativos que buscan potenciar su presencia en redes. Únete a nosotros y transforma tu smartphone en una herramienta de expresión artística.',
        imagen: './resources/fotoredes.png'
      },
      {
        cursoTitulo: 'Asesoría de ',
        cursoTitulo2: 'imagen',
        duracion: '4 meses',
        clases: '2hs semanales',
        shortText: 'Descubre la Asesoría de Imagen, donde aprenderás a identificar siluetas, potenciar estilos y optimizar guardarropas. Aprende técnicas de colorimetría para elegir los colores ideales. No se requieren conocimientos previos; desde principiantes hasta profesionales, todos pueden beneficiarse. Este curso es para todos los géneros y te prepara para una carrera en asesoría de imagen personal. Transforma tu estilo y comunicación visual, mejorando tu impacto en todas las áreas de tu vida con confianza y conocimiento.',
        imagen: './resources/asesorimagen.png'
      },
      {
        cursoTitulo: 'Marketing para ',
        cursoTitulo2: 'emprender',
        duracion: '1 mes',
        clases: '2hs semanales',
        shortText: 'Descubre Marketing para Emprender: aprende Branding Personal y Profesional, estrategias de marca y creación de contenidos para Instagram Profesional. Sin experiencia previa necesaria, este curso te equipa con todas las herramientas para establecer y mantener una identidad comercial sólida. Ideal para quienes buscan desarrollar su marca y negocio personal con éxito a largo plazo.',
        imagen: './resources/maquicotillon.png'
      }
    ],
    advanced: [
      {
        cursoTitulo: 'placeholder ',
        cursoTitulo2: '& more',
        duracion: '2 meses',
        clases: '2hs semanales',
        materiales: '| Incluye algunos materiales',
        shortText: 'placeholder',
        imagen: './resources/maquisocialprofesional.png'
      },
    ],
  };


  console.log(algo);
  // const and functions to switch between categories and titles

  const [selectedCourseType, setSelectedCourseType] = useState(algo); // Default selection

  const handleCourseTypeChange = (event) => {
    setSelectedCourseType(event.target.value);
    setAlgo(event.target.value);
  };

  const displayedCourses = coursesData[selectedCourseType] || []; // Handle empty array


  return (
    <div className="sortMenu">
      <ul>
        <li>
          <button style={{ fontWeight: selectedCourseType === 'tradicionales' ? 'bold' : 'normal' }} value="tradicionales" onClick={handleCourseTypeChange}>
            Tradicionales
          </button>
        </li>
        <li>
          <button style={{ fontWeight: selectedCourseType === 'online' ? 'bold' : 'normal' }} value="online" onClick={handleCourseTypeChange}>
            Online
          </button>
        </li>
        <li>
          <button style={{ fontWeight: selectedCourseType === 'fashion' ? 'bold' : 'normal' }} value="fashion" onClick={handleCourseTypeChange}>
            Moda
          </button>
        </li>
        <li>
          <button style={{ fontWeight: selectedCourseType === 'advanced' ? 'bold' : 'normal' }} value="advanced" onClick={handleCourseTypeChange}>
            Avanzado
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CursosMenu;
