import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import BookDetail from './BookDetail';
import BookForm from './BookForm';
import Fab from './Fab';
import { getBooks, createBook } from '../store/book';

class BookBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  componentDidMount = () => {
    this.props.getBooks()
  }

  handleCreated = async (book) => {
    try {
      const res = await this.props.createBook(book);
      const data = await res.json();
      if (res.ok) {
        this.props.history.push(`/books/${data.id}`);
        this.setState({
          showForm: false,
        });
      }
    } catch(e) {}
  }

  showForm = () => {
    this.setState({
      showForm: true,
    })
  }

  hideForm = () => {
    this.setState({
      showForm: false,
    });
  };

  render() {

    if (!this.props.books) {
      return null;
    }
    return (
      <main className='book-container'>
        {/* <LogoutButton /> handled by AuthNavButtons*/}
        <nav>
          <Fab hidden={this.state.showForm} onClick={this.showForm} />
          {this.props.books.map(book => {
            return (
              <NavLink key={book.title} to={`/books/${book.id}`}>
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
              </NavLink>
            );
          })}
        </nav>
        { this.state.showForm ? (
            <BookForm
            handleCreated={this.handleCreated}
            hideForm={this.hideForm}
            />
          ) : (
            <Route path="/books/:id" render={props =>
              <BookDetail  {...props} />
            } />
          )
        }
      </main>
    );
  }
}

const mapStateToProps = state => {
    return {
      books: state.book.list
    }
}

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(getBooks()),
    createBook: (book) => dispatch(createBook(book))
})


export default connect(mapStateToProps, mapDispatchToProps)(BookBrowser);
