import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShelfDetail, deleteShelf } from '../store/bookshelf';
import { NavLink, Redirect } from 'react-router-dom';


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
    e.preventDefault();
    try {
      const id = this.props.match.params.id;
      await this.props.deleteShelf(id);
      return <Redirect to="/shelves" />
    } catch(e) {}
  }

  render() {
    const shelfDetail = this.props.shelfDetail;
    if (!shelfDetail) {
      return null;
    }
    return (
      <div className="book-on-shelf">
        <div>
          <button type='delete' name='deleteShlef' onClick={this.handleDelete}>delete shelf</button>
        </div>

        <nav>
          { shelfDetail.map(book => {
            return (
              <NavLink key={`${book.id}-${book.title}`} to={`/books/${book.id}`}>
                <div className='book-image-container bookshelf-books'>
                  <img className='book-image__1' src={`/images/${book.id}.jpg`} alt="bookshelf"/>
                  <h5 className="book-on-shelf__book-title a">{book.title}</h5>
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
    shelfDetail: state.bookshelf.shelfDetail,
    shelfList: state.bookshelf.shelfList,
  }
}
const mapDispatchToProps = dispatch => ({
  getShelfDetail: (id) => dispatch(getShelfDetail(id)),
  deleteShelf: (id) => dispatch(deleteShelf(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShelfDetail);
