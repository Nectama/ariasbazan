
import './Nosotros.css';
import Navmenu from './Navmenu';

function Nosotros() {

  const sucursales = [
    {
      localizacion: "Mina Clavero",
      director: "Rocío Badillo",
      direccion: "Intendente Urquiza 1131 | Mina Clavero, Córdoba (5889)",
      telefono: "03544-15646060",
      correo: "ariasbazanminaciavero@gmail.com"
    },
    {
      localizacion: "Villa Carlos Paz",
      director: "Silvana Sintora",
      direccion: "Florida 173 | Villa Carlos Paz, Córdoba (5152)",
      telefono: "03541-15577386",
      correo: "ariasbazancarlospaz@gmail.com"
    },
    {
      localizacion: "Río Tercero",
      director: "Alejandro Arias Bazan",
      direccion: "General Paz 227 (sede AGEC) | Río Tercero, Córdoba (5850)",
      telefono: "03571-414000 (int. 105)",
      correo: "info@ariasbazan.com"
    },
    {
      localizacion: "Beauty Store",
      director: "Alejandro Arias Bazan",
      direccion: "Obispo Trejo 331 3C | Capital, Córdoba (5000)",
      telefono: "03571-414000 (int. 105)",
      correo: "info@ariasbazan.com"
    },
    {
      localizacion: "Jesús María",
      director: "Ana Torres",
      direccion: "Torre Boulevard piso 1 | Jesús María, Córdoba (5220)",
      telefono: "03525-15518298",
      correo: "ariasbazanjm@gmail.com"
    },
    {
      localizacion: "Alta Gracia",
      director: "Guadalupe Sanchez",
      direccion: "Belgrano 77 piso 2 | Alta Gracia, Córdoba (5186)",
      telefono: "03547-15516077",
      correo: "ariasbazanag@gmail.com"
    },
    {
      localizacion: "Villa María",
      director: "Romina Bruera",
      direccion: "Santa Fe 598 1 piso Of. 3 | Villa María, Córdoba (5900)",
      telefono: "0353-154272068",
      correo: "ariasbazanvm@gmail.com"
    },
    {
      localizacion: "Pilar",
      director: "Paola Peralta",
      direccion: "Rafael Nuñez 1364 | Pilar, Córdoba (5972)",
      telefono: "03572-15407629",
      correo: "ariasbazanpilar@gmail.com"
    },
    {
      localizacion: "B° General Paz",
      director: "Romina Oga",
      direccion: "Ovidio Lagos 154 | Capital, Córdoba (5000)",
      telefono: "0351-153333001",
      correo: "ariasbazangeneralpaz@gmail.com"
    },
    {
      localizacion: "Arroyito",
      director: "Marianela Almada",
      direccion: "José A. Voco 470 | Arroyito, Córdoba (2434)",
      telefono: "03576-15414336",
      correo: "arroyito@ariasbazan.com"
    },
    {
      localizacion: "Villa Dolores",
      director: "Silvia Buzarquis",
      direccion: "Carcano esq. Presidente Perón | Villa Dolores, Córdoba (5870)",
      telefono: "03544-15639873",
      correo: "ariasbazanvilladol@gmail.com"
    },
    {
      localizacion: "Salta",
      director: "Juan Migel Murillo",
      direccion: "Edificio Palermo Bs.As 135. Tercer piso oficina 306 | Salta (4400)",
      telefono: "0387-4312314 / 0387-5445613",
      correo: "ariasbazansaltanew@gmail.com"
    }
  ]

  return (
    <>
      <div className='mainNosotros'>
        <img className='backgroundDecoration' src='./resources/backgroundimg.webp' alt='' />
        <Navmenu />
        <div className='intro'>
          <h2>Un poco <br /><span className='titleItalic'>de nosotros...</span></h2>
          <p>Imagina un mundo donde la belleza se fusiona con el arte, donde cada rostro se transforma en un lienzo que cuenta una historia única. En el corazón de este mundo vibrante y colorido se encuentra Alejandro Bazan, el alma detrás de la revolucionaria escuela de maquillaje Arias Bazan.</p>
        </div>
        <div className='bio'>
          <div className='profile'>
            <img src='./resources/alejandroprofile.webp' alt='Alejandro Arias Bazán' />
            <p>Alejandro </p>
            <p className='nameItalic'>Arias Bazán</p>
          </div>
          <div className='bioText'>
            <p>Alejandro, con una trayectoria tan diversa como fascinante, desde estudiar Publicidad hasta Odontología, finalmente encontró su verdadera vocación en el maquillaje, de la mano de Regina Kuligovsky. Esta pasión, combinada con su amor por la enseñanza, le ha permitido abrazar cada aspecto del maquillaje no solo como una forma de arte, sino como una expresión profunda de la estética y la cosmética.</p>
            <p>Lo que hace único a Arias Bazan es el corazón y el alma que Alejandro y su equipo ponen en cada lección, cada consejo, cada toque de pincel. Con un staff cuidadosamente seleccionado por su sensibilidad y adaptabilidad, la escuela se dedica a realzar no solo la belleza exterior, sino también a capturar y resaltar los rasgos más intrigantes y la esencia verdadera de cada individuo.</p>
            <p>Con un legado que se extiende más allá de Córdoba, Arias Bazan ha formado profesionales que hoy brillan en el mundo de la moda, los comerciales y las gráficas, tanto en Argentina como en el extranjero. La expansión a través de franquicias desde 2010 ha permitido que la visión de Alejandro y su método de enseñanza único alcancen rincones lejanos del mundo, marcando la diferencia en la industria de la belleza.</p>
            <p>Hoy, con ocho franquicias y liderando el mercado en Córdoba, Arias Bazan no solo "crea profesionales de la moda"; forja visionarios del arte del maquillaje, listos para transformar el mundo con cada pincelada. </p>
          </div>
        </div>
      </div>
      <div className='closingLine'>
        <h3>Bienvenido a la revolución de la belleza, bienvenido al <span className='titleItalic underline'>mundo de Arias Bazán.</span></h3>
      </div>
      <div className='sucursales'>
        <p className='sucursalesTitle'>Nuestras sucursales</p>
        <div className='sucursalesContainer'>
          {sucursales.map((sucursal, index) => (
            <div className="sucursal" key={index}>
              <p className="sucursalLocalizacion">{sucursal.localizacion}</p>
              <p className="sucursalDirector">Director/a: <span className='bold'>{sucursal.director}</span></p>
              <p className="sucursalDireccion">{sucursal.direccion}</p>
              <p className="sucursaltelefono">Tel: {sucursal.telefono}</p>
              <p className="sucursalCorreo">{sucursal.correo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nosotros;
