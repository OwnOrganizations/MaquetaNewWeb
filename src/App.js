import logo from './Media/favicon.png';
import './styles/style.css';

function App() {
  return (
    <div className="App">
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
      <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contImagen">
                        <img src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80" alt="Border Collie"/>
                    </div>
                    <span className="breedTitle">
                        Border Collie
                    </span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart heartRed"></i>
                            240
                        </li>
                        <li>
                            <i className="fas fa-comment-dots comment"></i>
                            2.3K
                        </li>
                        <li>
                            <i className="fas fa-eye views"></i>
                            450
                        </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contImagen">
                        <img src="https://images.unsplash.com/photo-1561053522-1e4ead3277f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" alt="Rhodesian"/>
                    </div>
                    <span className="breedTitle">
                        Rhodesian
                    </span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart heartRed"></i>
                            140
                        </li>
                        <li>
                            <i className="fas fa-comment-dots comment"></i>
                            3.8K
                        </li>
                        <li>
                            <i className="fas fa-eye views"></i>
                            100
                        </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contImagen">
                        <img src="https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="Husky"/>
                    </div>
                    <span className="breedTitle">
                        Husky
                    </span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart heartRed"></i>
                            240
                        </li>
                        <li>
                            <i className="fas fa-comment-dots comment"></i>
                            1.1K
                        </li>
                        <li>
                            <i className="fas fa-eye views"></i>
                            900
                            </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contImagen">
                        <img src="https://images.unsplash.com/photo-1437957146754-f6377debe171?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="Border Collie"/>
                    </div>
                    <span className="breedTitle">
                        Shitzu
                    </span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart heartRed"></i>
                            580
                        </li>
                        <li>
                            <i className="fas fa-comment-dots comment"></i>
                            5.1K
                        </li>
                        <li>
                            <i className="fas fa-eye views"></i>
                            600
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;