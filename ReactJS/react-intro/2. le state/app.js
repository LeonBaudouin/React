
class App extends React.Component {
    constructor() {
        super(); // Toujours appeller cette fonction dans un constructeur de classe React !

        this.state = {
            nom: "",
            prenom: ""
        }
    }

    changeHandler(e, field) {
        this.setState({[field]: e.target.value})
    }

    render() {
        const {nom, prenom} = this.state

        return (
            <div>
                <h1>Le State</h1>

                <p>Grâce au système de State, faites en sorte que dès que vous tapez une information dans la zone de texte, elle soit immédiatement mise à jour dans le paragraphe sous le formulaire...<br/>
                (Vous aurez besoin de <code>this.setState()</code> pour ça)</p>
            
                <div className="card">
                    <div className="card-body">
                        Votre nom :
                        <input type="text" onChange={(e) => this.changeHandler(e, "nom")} className="form-control col-md-4" placeholder="Nom" />
                        Votre prénom :
                        <input type="text" onChange={(e) => this.changeHandler(e, "prenom")} className="form-control col-md-4" placeholder="Prénom" />

                        <br/>

                        <p>Vous vous appelez : {prenom} {nom}</p>
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