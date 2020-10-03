import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShelfDetail, deleteShelf, deleteBook, getShelves } from '../store/bookshelf';
import { NavLink } from 'react-router-dom';


class ShelfDetail extends Component {
  async componentDidMount() {
    await this.props.getShelfDetail(this.props.match.params.id);
  }

  async componentDidUpdate(oldProps) {
    const oldId = Number.parseInt(oldProps.match.params.id);
    const newId = Number.parseInt(this.props.match.params.id);
    if (oldId === newId) {
      return;
    }
    await this.props.getShelfDetail(newId);
  }

  handleDelete = async (e) => {
    try {
      const id = this.props.match.params.id;
      await this.props.deleteShelf(id);
      await this.props.getShelves();
      this.props.history.push('/shelves');
    } catch(e) {}
  }

  handleRemove = async (e) => {
    try {
      const shelfId = this.props.match.params.id;
      const bookId = e.target.id;
      await this.props.deleteBook(shelfId, bookId);
      await this.props.getShelfDetail(shelfId);
      this.props.history.push(`/shelves/${shelfId}`);
    } catch(e) {}
  }

  render() {
    const shelfDetail = this.props.shelfDetail;
    const shelfName = this.props.shelfName;
    if (!shelfDetail) {
      return null;
    }
    return (
      <div className="book-on-shelf">
        <div className='bookshelf-title'>
          <h4>{shelfName}</h4>
          <button type='delete' name='deleteShlef' className='button-light profile-button' onClick={this.handleDelete}>x</button>
        </div>

        <nav>
          { shelfDetail.map(book => {
            return (
              <NavLink key={`${book.id}-${book.title}`} to={`/books/${book.id}`}>
                <div className='book-image-container bookshelf-books'>
                  <img className='book-image__1' src={`/images/${book.id}.jpg`} alt="bookshelf"/>
                  <div className="book-on-shelf__book-title a">
                    <h5 >{book.title}</h5>
                    <button type='delete' id={`${book.id}`} name='removeBook' className='button-light profile-button' onClick={this.handleRemove}>x</button>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shelfDetail: state.bookshelf.shelfDetail.Books,
    shelfName: state.bookshelf.shelfDetail.name,
  }
}
const mapDispatchToProps = dispatch => ({
  getShelfDetail: (id) => dispatch(getShelfDetail(id)),
  deleteShelf: (id) => dispatch(deleteShelf(id)),
  deleteBook: (shelfId, bookId) => dispatch(deleteBook(shelfId, bookId)),
  getShelves: () => dispatch(getShelves()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShelfDetail);
