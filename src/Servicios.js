
import React from 'react';
import './Servicios.css';
import Navmenu from './Navmenu';

function Servicios() {

  const servicesData = [
    {
      servicioTitulo: 'Maquillaje ',
      servicioTitulo2: 'para Bodas',
      shortText: 'Realzamos tu belleza con un maquillaje nupcial impecable, duradero y a prueba de lágrimas, diseñado para resaltar tu estilo y armonizar con tu look de novia.',
      imagen: './resources/servicios/maquillaje-bodas.webp'
    },
    {
      servicioTitulo: 'Maquillaje ',
      servicioTitulo2: 'para Eventos',
      shortText: 'Luce espectacular en cualquier ocasión con un maquillaje profesional adaptado a tu estilo, resaltando tus rasgos con técnicas modernas y productos de alta calidad.',
      imagen: './resources/servicios/maquillaje-eventos.webp'
    },
    {
      servicioTitulo: 'Peinados ',
      servicioTitulo2: 'para Eventos',
      shortText: 'Peinados elegantes, modernos o desenfadados según la ocasión, con técnicas que garantizan duración, movimiento y armonía con tu maquillaje y vestuario.',
      imagen: './resources/servicios/peinado-eventos.webp'
    },
    {
      servicioTitulo: 'Perfilado y Diseño ',
      servicioTitulo2: 'de Cejas',
      shortText: 'Resaltamos tu mirada con un diseño personalizado de cejas, adaptado a la forma de tu rostro, utilizando técnicas de depilación y visagismo.',
      imagen: './resources/servicios/perfilado-cejas.webp'
    },
    {
      servicioTitulo: 'Peinados ',
      servicioTitulo2: 'para Bodas',
      shortText: 'Creaciones únicas para novias con peinados sofisticados, románticos o modernos, diseñados para complementar tu estilo y mantener su forma impecable todo el evento.',
      imagen: './resources/servicios/peinado-bodas.webp'
    },
    {
      servicioTitulo: 'Clases de ',
      servicioTitulo2: 'Automaquillaje Personal',
      shortText: 'Aprende a maquillarte como una profesional, destacando tus facciones con técnicas sencillas y personalizadas, eligiendo los productos adecuados según tu tipo de piel y estilo.',
      imagen: './resources/servicios/automaquillaje.webp'
    },
    {
      servicioTitulo: 'Clases de ',
      servicioTitulo2: 'Autopeinado',
      shortText: 'Descubre cómo crear peinados prácticos y elegantes para el día a día o eventos, aprendiendo técnicas de trenzas, ondas y recogidos que puedes hacer tú misma.',
      imagen: './resources/servicios/autopeinado.webp'
    },
    {
      servicioTitulo: 'Clases de ',
      servicioTitulo2: 'Automanicuria Personal',
      shortText: 'Aprende a cuidar y embellecer tus uñas con técnicas de esmaltado, limado y decoración, para lucir manos impecables sin salir de casa.',
      imagen: './resources/servicios/automanicuria.webp'
    },
    {
      servicioTitulo: 'Maquillaje y Peinados ',
      servicioTitulo2: 'para Producciones',
      shortText: 'Servicios especializados en maquillaje y peinado para sesiones fotográficas, pasarelas y proyectos audiovisuales, adaptándonos a cada concepto y garantizando acabados de alto impacto.',
      imagen: './resources/servicios/maquipeinados-producciones.webp'
    },
  ];

  const handleClick = () => {
    window.open("https://wa.me/5493516526268?text=Hola!%20Quisiera%20realizar%20una%20consulta", "_blank");
  };

  return (
    <>
      <div className="cursosSection">
        <img className='backgroundDecoration' src='./resources/backgroundimg.webp' alt='' />
        <Navmenu />

        <div className='cursos'>
          <div className="sortMenu">
            <h2>Servicios</h2>
            <h4>Tu imagen en manos de profesionales: bodas, eventos y mucho más. Descubrí nuestra gama de servicios diseñados para realzar tu belleza en cada ocasión especial.</h4>
          </div>
          <div className="cursosContainer">
            {servicesData.map((servicio, index) => (
              <div className="cursoContainer" key={index}>
                <div className="tarjetaCurso pointer" onClick={handleClick}>
                  <div className='imgContainer'>
                    <img className="cursoImagen" src={servicio.imagen} alt="" />
                  </div>
                  <h2 className="cursoTitulo">{servicio.servicioTitulo}<span className='titleItalic'>{servicio.servicioTitulo2}</span></h2>
                  <p className="cursoBreve">{servicio.shortText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>


    </>
  );
}

export default Servicios;
