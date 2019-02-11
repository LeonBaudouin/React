import React, {Component} from 'react'
import Letter from './Letter'
import Key from './Key'

const WORD = "bonsoir"
const ALL_KEYS = "abcdefghijklmnopqrstuvwxyz".split("")

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            guesses: 0,
            lettersRemaining: WORD.toLowerCase().split(""),
            lettersWrong: [],
            lettersGuessed: []
        }
    }

    TestKey = char => {
        const {guesses, lettersWrong, lettersGuessed, lettersRemaining} = this.state

        if (lettersRemaining.length !== 0) {

            if (lettersRemaining.includes(char)) {
                this.setState({
                    lettersGuessed: [...lettersGuessed, char],
                    lettersRemaining: lettersRemaining.filter((c) => c !== char)
                })
            } else {
                this.setState({lettersWrong: [...lettersWrong, char]})
            }
            
            this.setState({guesses: guesses + 1})
        }
    }

    render() {
        const {guesses, lettersGuessed, lettersWrong} = this.state

        return (
            <div className="container text-center">
                <h1 className="mt-5">Pendu</h1>
                <p>{guesses > 1 ? guesses + " tentatives" : guesses + " tentative"}</p>
                <div className="my-5 text-center letter">
                    {WORD.toLowerCase().split("").map((char, index) => (
                        <Letter
                            lettersGuessed={lettersGuessed}
                            value={char}
                            key={index}
                        />
                    ))}
                </div>

                <div className="keys">
                    {ALL_KEYS.map((char, index) => (
                        <Key
                            lettersGuessed={lettersGuessed}
                            lettersWrong={lettersWrong}
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