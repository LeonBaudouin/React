import React from 'react'
import './Key.css'

const Key = ({char, onClick}) => {
    return (
        <button
            onClick={() => {onClick(char)}}
        >
            {char.toUpperCase()}
        </button>
    )
}

export default Key