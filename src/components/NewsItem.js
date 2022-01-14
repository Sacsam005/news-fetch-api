import React from 'react'
import NewsElement from './NewsElement'

const NewsItem = ({ article }) => {

    return (
        <>
            {
                article.map((item, i) => (
                    <NewsElement key={i} item={item} />
                ))
            }
        </>
    )
}

export default NewsItem
