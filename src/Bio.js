
import './Bio.css';
import Navmenu from './Navmenu';

function Bio() {

  return (
    <>
      <div className='mainNosotros'>
        <img className='backgroundDecoration' src='./resources/backgroundimg.webp' alt='' />
        <Navmenu />
        <div className='intro'>
          <h2>Un poco <br /><span className='titleItalic'>de nosotros...</span></h2>
          <p>Imagina un mundo donde la belleza se fusiona con el arte, donde cada rostro se transforma en un lienzo que cuenta una historia única. En el corazón de este mundo vibrante y colorido se encuentra Alejandro Arias Bazán, el alma detrás de la revolucionaria escuela de maquillaje Arias Bazan.</p>
        </div>
        <div className='bio'>
          <div className='profile'>
            <img src='./resources/alejandroprofile.webp' alt='Alejandro Arias Bazán' />
            <p>Alejandro </p>
            <p className='nameItalic'>Arias Bazán</p>
          </div>
          <div className='bioText'>
            <p>Arias Bazán es una empresa creada en marzo del 2004 en la ciudad de Córdoba Argentina.</p>
            <p>Su creador, Alejandro Arias Bazán es un reconocido maquillador profesional y empresario argentino con una trayectoria destacada en el mundo de la moda y la belleza. Originario de la ciudad Córdoba, inició su carrera en el ámbito de la publicidad y el marketing, pero encontró su verdadera pasión en el maquillaje, un área que convirtió en su profesión y negocio principal. A lo largo de su carrera, ha construido un imperio educativo con varias escuelas de maquillaje en sistema de franquicias en ciudades del interior de Argentina, diseñadas para formar a profesionales en esta industria y ayudarles a recuperar rápidamente su inversión inicial.</p>
            <p>Además, Alejandro Arias Bazán ha participado en eventos internacionales de renombre como el Fashion Week de Nueva York, donde ha colaborado en backstage con diseñadores de talla mundial como Carolina Herrera y Tommy Hilfiger. También es embajador de la moda sudamericana, representando a Argentina en el Andes Fashion Week de Chile.</p>
            <p>Es conocido por su enfoque en la formación y empoderamiento de personas emprendedoras, especialmente aquellas que enfrentan limitaciones económicas. Sus redes sociales reflejan un equilibrio entre su vida profesional y personal, promoviendo un estilo de vida que combina creatividad, emprendimiento y crecimiento personal.</p>
            <p>Arias Bazán también destaca por su visión empresarial y ética profesional. Su filosofía se centra en la importancia de soñar, creer, disfrutar y amar intensamente la vida, un mensaje que lleva incluso tatuado como parte de su identidad personal.</p>
            <p>La empresa tiene exactamente su esencia y sus valores, ya que la misión es potenciar a todos los alumnos que ingresan a sus diferentes cursos y convertirlos en profesionales del mundo de la moda e invertirlos laboralmente en el mercado. En la actualidad, la empresa cuenta con más de treinta cursos de oficios con rápida salida laboral.</p>
            <p>Más de veinte años en el mercado de la moda, hacen de Arias Bazán uno de los referentes nacionales de nuestro país.</p>
          </div>
        </div>
      </div>
      <div className='closingLine'>
        <h3>Bienvenido a la revolución de la belleza,<br className='mobileOnly' /> bienvenido al <span className='titleItalic underline'>mundo de Arias Bazán.</span></h3>
      </div>
    </>
  );
}

export default Bio;
