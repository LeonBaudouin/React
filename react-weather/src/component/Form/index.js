import React from "react"

class Form extends React.Component {

    render() {

        const {handleForm, handleInput} = this.props


        return (
            <form className="text-left" onSubmit={handleForm}>
                <label htmlFor="ville"> Ville : </label>
                <input onChange={handleInput} className="form-control" type="text" name="ville" id="ville" placeholder="Taper la ville de votre choix"/>
                <button type="submit" className="btn btn-primary mt-2">Valider</button>
            </form>
        )
    }
}

export default Form