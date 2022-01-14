import React, { useState } from 'react'
import '../App.css'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const Onchange = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <>
            <div className="search-box">
                <form >
                    <input
                        type="text"
                        value={text}
                        placeholder='Search articles...'
                        autoFocus
                        onChange={(e) => Onchange(e.target.value)}
                    />
                </form>
            </div>

        </>
    )
}

export default Search
