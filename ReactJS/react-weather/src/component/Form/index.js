import React from "react"

class Form extends React.Component {

    render() {

        const {handleForm, handleInput} = this.props


        return (
            <nav className="navbar navbar-light bg-light">
              <span className="navbar-brand">App Météo</span>
              <form className="form-inline" onSubmit={handleForm}>
                <input className="form-control mr-sm-2" onChange={handleInput} type="search" placeholder="Entrez une ville" aria-label="Entrez une ville"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Valider</button>
              </form>
            </nav>
        )
    }
}

export default Form