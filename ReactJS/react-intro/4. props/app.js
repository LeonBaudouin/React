const Navbar = ({title}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {title}
      </a>
      
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#accueil">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// ------------------------------------------------------------------

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Composants et props</h1>

        <hr />
        
        <p>
          Faites en sorte d'insérer ci-dessous un composant <code>NavBar</code>{" "}
          que vous aurez créé au préalable :
        </p>

        <Navbar title="Titreux" />
      </div>
    );
  }
}

// L'application React va se "render" dans l'élément <main id="app"> de la page web
ReactDOM.render(<App />, document.getElementById("app"));
