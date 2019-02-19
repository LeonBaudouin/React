import React, {Component} from 'react'
import Letter from './Letter'
import Key from './Key'

const WORDS = require("./words.json")

const RANDOM_INDEX = Math.floor(Math.random() * WORDS.length)

const WORD = WORDS[RANDOM_INDEX]
const ALL_KEYS = "abcdefghijklmnopqrstuvwxyz".split("")

const NBR_TENTATIVES = 9

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            guesses: 0,
            lettersRemaining: WORD.toLowerCase().split(""),
            lettersWrong: [],
            lettersGuessed: [],
            endgame: 0
        }

    }

    componentDidMount() {
        this.Hint()
    }

    Hint() {        
        const {lettersRemaining} = this.state
        
        const randomLetter = lettersRemaining[Math.floor(Math.random() * lettersRemaining.length)]

        console.log(randomLetter)

        this.setState({
            lettersGuessed: [randomLetter],
            lettersRemaining: lettersRemaining.filter((c) => c !== randomLetter)
        }, this.ckeckEndgame)
    }

    TestKey = char => {
        const {guesses, lettersWrong, lettersGuessed, lettersRemaining, endgame} = this.state

        if (!endgame) {

            if (lettersRemaining.includes(char)) {

                this.setState({
                    lettersGuessed: [...lettersGuessed, char],
                    lettersRemaining: lettersRemaining.filter((c) => c !== char)
                }, this.ckeckEndgame)

            } else {

                this.setState({
                    lettersWrong: [...lettersWrong, char],
                    guesses: guesses + 1
                }, this.ckeckEndgame)

            }
        }
    }

    ckeckEndgame() {

        const {lettersRemaining, guesses} = this.state

        const win = lettersRemaining.length === 0
        const lose = guesses >= NBR_TENTATIVES

        if(win) {

            this.setState({
                endgame: 1
            })

        } else if(lose) {

            this.setState({
                endgame: -1,
                lettersRemaining: ALL_KEYS
            })
            
        } else {
            
            this.setState({
                endgame: 0
            })
            
        }
    }

    render() {
        const {guesses, lettersGuessed, lettersWrong, endgame} = this.state

        const remainingGuesses = NBR_TENTATIVES - guesses

        let infos = ""

        if(endgame === 0) {

            infos = (remainingGuesses > 1 ? remainingGuesses + " tentatives restantes" : remainingGuesses + " tentative restante")

        } else if(endgame === 1) {

            infos = "Gagné !"

        } else if(endgame === -1) {

            infos = "Perdu !"

        }

        return (
            <div className="container text-center">
                <h1 className="mt-5">Pendu</h1>
                <p>{infos}</p>
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