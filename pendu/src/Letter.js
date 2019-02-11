import React from 'react'
import './Letter.css'

class Letter extends React.Component {

    render () {
        const {value, lettersGuessed} = this.props
        return (
            <span>
                {lettersGuessed.includes(value.toLowerCase()) ? value : "_"}
            </span>
        )
    }
}

export default Letter