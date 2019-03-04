
class App extends React.Component {
    constructor() {
        super(); // Toujours appeller cette fonction dans un constructeur de classe React !

        this.state = {
            email: "",
            nom: "",
            prenom: ""
        }
    }

    handleAlert() {
        alert("Ceci est une alerte")
    }

    handleEmail = ({target : {value}}) => {
        this.setState({
            email: value
        })
    }

    checkEmail = () => {
        const emailRegex = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

        alert(emailRegex.test(this.state.email) ? "OK" : "KO")
    }

    handleNom = ({target : {value}}) => {
        this.setState({
            nom: value
        })
    }

    handlePrenom = ({target : {value}}) => {
        console.log(value)
        this.setState({
            prenom: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {nom, prenom} = this.state

        alert(`Vous vous appelez : ${prenom} ${nom}`)
    }

    render() {
        return (
            <div>
                <h1>Méthodes</h1>
                <hr/>


                <h2>1. Alerte simple</h2>
                <p>
                    Cliquer sur ce bouton doit afficher une alerte JS :
                    <input type="button" onClick={this.handleAlert} className="btn btn-primary" value="Affiche une alerte" />
                </p>


                <hr/>
                <h2>2. Vérification de champs</h2>
                <p>
                    Le clic sur ce bouton doit afficher "OK" ou "KO" en fonction de si l'adresse email tapée est valide :<br/>
                    <input type="email" onBlur={this.handleEmail} formNoValidate className="form-control col-md-4" placeholder="Adresse email" />
                    <input type="button" onClick={this.checkEmail} className="btn btn-primary col-md-4" value="Vérifier l'adresse email" />
                </p>


                <hr/>
                <h2>3. Validation de formulaire</h2>
                <p>Lors de la soumission de ce formulaire, empêcher le rechargement de la page et afficher dans une alerte les nom et prénom tapés dans les champs.</p>
                <form action="" formNoValidate onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" onBlur={this.handleNom} id="nom" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" onBlur={this.handlePrenom} id="prenom" className="form-control"/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Dire bonjour!"/>
                </form>
            </div>
        )
    }
}

// L'application React va se "render" dans l'élément <main id="app"> de la page web
ReactDOM.render(
    <App />,
    document.getElementById('app')
);