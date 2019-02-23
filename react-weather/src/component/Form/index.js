import React from "react"

class Form extends React.Component {

    render() {

        const {handleForm, handleInput} = this.props


        return (
            <nav class="navbar navbar-light bg-light">
              <span class="navbar-brand">App Météo</span>
              <form class="form-inline" onSubmit={handleForm}>
                <input onChange={handleInput}  class="form-control mr-sm-2" type="search" placeholder="Entrez une ville" aria-label="Entrez une ville"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Valider</button>
              </form>
            </nav>
        )
    }
}

export default Form