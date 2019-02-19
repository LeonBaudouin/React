
class ChallengeA extends React.Component {

    constructor() {
        super()
        this.state = {
            class: ""
        }
    }

    handledChangeClass = ({target :{value}}) => {
        this.setState({
            class: value
        })
    }

    render() {
        return (
            <div>
                <hr />

                <h2>Challenge A) <small>Liaison de classe CSS</small></h2>

                <p>Le composant ci-dessous est une <code>.card</code> de Bootstrap. Une "card" possède plusieurs déclinaisons de couleur :
                    <code>.bg-primary</code>, <code>.bg-secondary</code>, <code>.bg-success</code>, <code>.bg-danger</code>, <code>.bg-warning</code>, <code>.bg-info</code> et <code>.bg-dark</code>.
                </p>

                <p>En fonction de la valeur de classe choisie dans cette liste déroulante, appliquez la classe correspondante à la <code>.card</code> en dessous. (Il vous faudra certainement déclarer un gestionnaire d'événement <code>onChange={'{'}this.votreMethode{'}'}</code>)</p>

                <div className="form-group">
                    <select onChange={this.handledChangeClass} className="custom-select col-md-3">
                        <option value="bg-primary">bg-primary</option>
                        <option value="bg-secondary">bg-secondary</option>
                        <option value="bg-success">bg-success</option>
                        <option value="bg-danger">bg-danger</option>
                        <option value="bg-warning">bg-warning</option>
                        <option value="bg-info">bg-info</option>
                        <option value="bg-dark">bg-dark</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <div className={"card mb-3 " + this.state.class}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ChallengeB extends React.Component {

    constructor() {
        super()

        this.state = {
            width: "400",
            height: "225",
            controls: true
        }
    }

    handleWidth = ({target :{value}}) => {
        this.setState({
            width: value
        })
    }

    handleHeight = ({target :{value}}) => {
        this.setState({
            height: value
        })
    }

    handleControls = ({target :{value}}) => {
        this.setState({
            controls: value === "true"
        })
    }

    render() {
        const {width, height, controls} = this.state

        return (
            <div className="mt-5">
                <hr />
                <h2>Challenge B) <small>Configuration de la vidéo</small></h2>

                <p>La vidéo ci-dessous est représentée par une balise avec 3 propriétés :<br />
                    <code>&lt;video <mark>width</mark>="400" <mark>height</mark>="225" <mark>controls</mark>&gt;</code></p>
                <p>Faites en sorte que ces 3 propriétés puissent changer en fonction des valeurs de champs suivants :</p>

                <div className="form-group">
                    <input onBlur={this.handleWidth} type="number" className="form-control col-md-2 float-left" min="16" max="800" step="16" placeholder="Largeur" />
                    <input onBlur={this.handleHeight} type="number" className="form-control col-md-2 float-left" min="9" max="450" step="9" placeholder="Hauteur" />
                    <select onChange={this.handleControls} className="custom-select col-md-3 float-left">
                        <option disabled>Afficher les contrôles ?</option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                </div><div className="clearfix"></div>

                <video width={width} height={height} controls={controls}>
                    <source src="bigbuckbunny.webm" type="video/webm" />
                </video>
            </div>
        )
    }
}

// L'application React va "render" les deux composants dans un "React.Fragment" :
ReactDOM.render(
    <React.Fragment>
        <h1>Styles et attributs</h1>
        <ChallengeA />
        <ChallengeB />
    </React.Fragment>,
    document.getElementById('app')
);