import React from 'react'
import { NavLink } from 'react-router-dom';

function SearchPage(props) {
    const data = props.location.state;

    const bookComponents = data.map((book) => {
        return (<NavLink key={book.title} to={`/books/${book.id}`}>
          <div className='.navbar__text-logo-div:hover'>
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
            {data.length === 0 ? <h3>Sorry books searched couldn't be found</h3> : bookComponents}
        </div>

    );
};


export default SearchPage
