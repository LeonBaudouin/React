import React from 'react'
import './Key.css'

class Key extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {char, onClick, lettersGuessed, lettersWrong} = this.props
        const className = lettersGuessed.includes(char) ? "guessed"
                        : lettersWrong.includes(char) ? "wrong" : ""

        return (
            <button
                disabled={lettersGuessed.includes(char) || lettersWrong.includes(char)}
                className={className}
                onClick={() => {
                    onClick(char)
                }}
            >
                {char.toUpperCase()}
            </button>
        )
    }
}

export default Key