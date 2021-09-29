import logo from 'Media/favicon.png';

const Header = () => {
  return (
    <header>
      <form className="contenedor">
        <ul className="navbar">
          <li>
            <img src={logo} alt="imagen" className="logo"/>
          </li>
          <li>
            <button className="button secondaryButton">Iniciar Sesión</button>
          </li>
          <li>
            <button className="button secondaryButton">Registro</button>
          </li>
          <li>
            <button className="button mainButton">New Post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una raza"/>
              <i className="fas fa-search button iconoBuscar"></i>                    
            </div>
          </li>
        </ul>    
      </form>
    </header>
  );
}

export default Header;

/*
const variableNumerica = 3;
const variableTexto = "Hola";
const variableArray = [1,2,3,4,5];
const variableObjeto = {
  llave1: "valor 1",
  llave2: "valor 2",
  llave3: "valor 3",
}
const variableListaObjeto = [
  {
    llave1: "valor 1",
    llave2: "valor 2",
    llave3: "valor 3",
  },
  {
    llave1: "valor 1",
    llave2: "valor 2",
    llave3: "valor 3",
  },
  {
    llave1: "valor 1",
    llave2: "valor 2",
    llave3: "valor 3",
  }
];
const variableFunction = (in1, in2, in3) => {

  return 'retorno de la función';
}; 
*/