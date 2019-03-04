

/**
 * La classe App est une classe qui étend "React.Component"
 * Ainsi, lorsqu'on utilisera <App /> dans l'application,
 * React saura que la couche logique de ce composant
 * se trouve dans cette classe "App"
 */

class App extends React.Component {
    constructor() {
        super(); // Toujours appeller cette fonction dans un constructeur de classe React !

        /* Écrire ici les propriétés de app pour le prénom et le nom */
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>

                <p>Affichez ci-dessous votre nom et prénom en utilisant le templating de React</p>
            
                <div className="card">
                    <div className="card-body">
                        Je m'appelle {"Léon"} {"Baudouin"} !
                    </div>
                </div>
            </div>
        )
    }
}

// L'application React va se "render" dans l'élément <main id="app"> de la page web
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

function Navbar(props) {
    return (
        <nav className="align-{props.align}">
        </nav>
    );
}