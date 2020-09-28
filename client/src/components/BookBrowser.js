import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';
import BookDetail from './BookDetail';
import BookForm from './BookForm';
import Fab from './Fab';
import { getBooks } from '../store/book';

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

  handleCreated = (book) => {
    this.setState({
      showForm: false,
    });
    this.props.handleCreated(book)
  }

  showForm = () => {
    this.setState({
      showForm: true,
    })
  }

  render() {
    const bookId = Number.parseInt(this.props.match.params.bookId);
    if (!this.props.books) {
      return null;
    }
    return (
      <main>
        <LogoutButton />
        <nav>
          <Fab hidden={this.state.showForm} onClick={this.showForm} />
          {this.props.books.map(book => {
            return (
              <NavLink key={book.title} to={`/books/${book.id}`}>
                <div className={bookId === book.id ? 'nav-entry is-selected' : 'nav-entry'}>
                  {/* <div className="nav-entry-image"
                       style={{backgroundImage: `url('${book.imageUrl}')`}}>
                  </div> */}
                  <div>
                    <div className="primary-text">{book.title}</div>
                    <div className="secondary-text">Author: {book.author}</div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </nav>
        { this.state.showForm ?
          <BookForm handleCreated={this.handleCreated} /> :
          <Route path="/books/:id" render={props =>
            <BookDetail  {...props}/>
          } />
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
    getBooks: (books) => dispatch(getBooks(books))
})


export default connect(mapStateToProps, mapDispatchToProps)(BookBrowser);
