import React from 'react'
import './Letter.css'

class Letter extends React.Component {

    render () {
        const {value, lettersTested} = this.props
        return (
            <span>
                {lettersTested.includes(value.toLowerCase()) ? value : "_"}
            </span>
        )
    }
}

export default Letter