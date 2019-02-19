
class App extends React.Component {
    constructor() {
        super(); // Toujours appeller cette fonction dans un constructeur de classe React !

        /* 
            Les articles et le panier peuvent doivent êtres modélisés seln l'application...
            Vous pouvez partir depuis ce state pour faire l'exercice :

            (n'oubliez pas évidemment de remplacer l'affichage statique dans le render() plus bas par le listing de ce state)
        */
        this.state = {
            articles : [
                { id: 1, title: 'Pain' },
                { id: 2, title: 'Jus d\'oranges' },
                { id: 3, title: 'Lait' },
                { id: 4, title: 'Sucre' },
                { id: 5, title: 'Farine' },
                { id: 6, title: 'Beurre' },
                { id: 7, title: 'Huile d\'olives' },
            ],

            panier : [
                { id: 2, title: 'Jus d\'oranges', quantite: 1 },
                { id: 4, title: 'Sucre', quantite: 2 },
            ]
        }
    }

    handleAdd(e, id) {
        e.preventDefault()

        const {articles, panier} = this.state
        const panierArt = panier.reduce((acc, art) => art.id === id ? art : acc, false)


        if(panierArt) {

            const newPanier = panier.map((art) => {
                if(art.id === id) {
                    art.quantite++
                }

                return art
            })

            this.setState({
                panier: newPanier
            })

        } else {

            const article = articles.reduce((acc, art) => art.id === id ? art : acc, false)

            article.quantite = 1
            panier.push(article)

            this.setState({
                panier: panier
            })

        }
        
    }

    render() {

        const {articles, panier} = this.state

        return (
            <div>
                <h1>Rendu de liste</h1>

                <hr />

                <h2>Panier de courses</h2>

                <p>La liste de gauche propose une série d'articles à acheter. La liste de droite correspond à un panier d'achats.</p>
                <p>Faites en sorte que l'article de droite pour lequel on clique sur "Ajouter au panier" soit ajouté dans la liste de gauche, tout en gérant un système de quantité (cad que si un article est déjà présent dans le panier, on ne met à jour que la quantité à droite).</p>
                <p>Vous aurez certainement besoin de gérer cela en utilisant un objet littéral JavaScript <code>{'{'}{'}'}</code> pour représenter un article et sa quantité.</p>
                <br />

                <div className="row">
                    <div className="col-md-4">
                        <h5>Liste d'articles</h5>

                        {/* Transformer cette liste en utilisant un .map() qui listera tous les articles disponibles à l'achat */}
                        <ul className="list-group">
                            {
                                articles.map(({id, title}) => (
                                    <li key={id} className="list-group-item">{title} <a href="#" onClick={(e) => this.handleAdd(e, id)} className="float-right">Ajouter au panier</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5>Panier</h5>

                        <ul className="list-group">
                            {
                                panier.map(({id, title, quantite}) => (
                                    <li key={id} className="list-group-item">{title} ✕ {quantite}</li>
                                ))
                            }
                        </ul>
                        {panier.length === 0 && <div>Vous n'avez pas d'article dans votre panier.</div>}
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