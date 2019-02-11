import React, {Component} from 'react'
import Letter from './Letter'
import Key from './Key'

const WORD = "Bonsoir"
const ALL_KEYS = "abcdefghijklmnopqrstuvwxyz".split("")

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lettersArray: WORD.split(""),
            lettersTested: []
        }
    }

    TestKey = char => {
        const {lettersTested} = this.state
        console.log(lettersTested)
        this.setState({lettersTested: [...lettersTested, char.toLowerCase()]})
    }

    render() {
        const {lettersArray, lettersTested} = this.state

        return (
            <div className="container text-center">
                <h1 className="mt-5">Pendu</h1>

                <div className="my-5 text-center letter">
                    {lettersArray.map((char, index) => (
                        <Letter
                            lettersTested={lettersTested}
                            value={char}
                            key={index}
                        />
                    ))}
                </div>

                <div>
                    {ALL_KEYS.map((char, index) => (
                        <Key
                            char={char}
                            onClick={this.TestKey}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App