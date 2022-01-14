import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import '../App.css'
import Search from './Search';
import PropTypes from 'prop-types';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // const [page, setPage] = useState(1);

    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true)
            const result = await fetch(`https://newsapi.org/v2/top-headlines?country=us&?description=${query}&?category=business&apiKey=974e7dc3c9ba4a03ae0e144a25fcf896`);
            const data = await result.json();

            setArticles(data.articles);
            setLoading(false)

        }
        fetchArticle();

    }, [query])

    return (
        <>
            <div className="cards">
                <Search getQuery={(q) => setQuery(q)} />
                {
                    !isLoading ? <NewsItem article={articles} /> : <Spinner />
                }
            </div>
        </>
    )
}

export default News

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'

}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}