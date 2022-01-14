import React from 'react'
import spinner from './img/spinner.gif'

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner} alt="Spinner" style={{ width: "25%" }} />
            <h2>Loading...</h2>
        </div>
    )
}

export default Spinner

