import React, { useState, useEffect } from 'react'


function SearchPage({ data }) {
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        setSearchData(data)
    }, [data])

    const bookComponents = searchData.map((book) => {
        return (<NavLink key={book.title} to={`/books/${book.id}`}>
        <div className='.navbar__text-logo-div:hover'>
        {/* <div className={bookId === book.id ? 'nav-entry is-selected' : 'nav-entry'}> */}
          <div className="container__book-cover book-cover">
            <img className='container__book-image' src={`/images/${book.id}.jpg`} alt="bookshelf"/>
          </div>
          <div>
            <div className='container__genres container__genres h4'>{book.title}</div>
            <div className='bookpage-container__book-info__author'>Author: {book.author}</div>
          </div>
        </div>
      </NavLink>)
    })

    return (
        <div className='book-container'>
            { searchData.length === 0 ? <h3>Sorry books searched couldn't be found</h3> : bookComponents}
        </div>

    );
};


export default SearchPage
