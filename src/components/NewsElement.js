import React from 'react'

const NewsElement = ({ item }) => {
    const { urlToImage, title, description, url } = item;
    return (
        <>
            <div className="news-item">
                <div className="card-body">
                    <img src={urlToImage === null ? 'https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' : urlToImage} alt="item" />
                    <div className="card-title">
                        <h4>{title ? title.slice(0, 50) : ''}</h4>
                    </div>
                    <div className="card-text">
                        <p>{description != null ? description.slice(0, 80) : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quidem quibusdam ratione!'}</p>
                    </div>
                    <a href={url} rel="noopener noreferrer" target="_blank" ><button className='btn btn-info'>Read more</button></a>
                </div>
            </div>

        </>
    )
}

export default NewsElement
