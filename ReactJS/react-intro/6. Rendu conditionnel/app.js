
class App extends React.Component {
    constructor() {
        super(); // Toujours appeller cette fonction dans un constructeur de classe React !

        this.state = {
            nbrChecked: 2
        }
    }

    handleCheck = ({target:{checked}}) => {
        
        const {nbrChecked} = this.state

        this.setState({
            nbrChecked: checked ? nbrChecked + 1 : nbrChecked - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Rendu conditionnel</h1>
                
                <p>Ci-dessous une liste de plusieurs checkboxes. Faites en sorte que si plus aucune valeur n'est cochée, la valeur du compteur affiche la "div" contenant le texte <q> Plus aucune case n'est cochée </q>.</p>

                <div className="card">
                    <div className="card-body">
                        
                        <div className="form-group">
                            <input onChange={this.handleCheck} type="checkbox" value="c1" />
                            <input onChange={this.handleCheck} type="checkbox" value="c2" />
                            <input onChange={this.handleCheck} type="checkbox" value="c3" defaultChecked />
                            <input onChange={this.handleCheck} type="checkbox" value="c4" defaultChecked />
                            <input onChange={this.handleCheck} type="checkbox" value="c5" />
                        </div>

                        {this.state.nbrChecked > 0 ? <div>Vous avez coché 2 cases.</div> : <div>Plus aucune case n'est cochée.</div>}
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