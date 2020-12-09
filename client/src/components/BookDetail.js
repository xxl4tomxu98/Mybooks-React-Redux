import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetail, getReviews, getNonContainingShelves } from '../store/book';
import { addBookToShelf, getShelfDetail } from '../store/bookshelf';
import BookReview from './BookReview';


class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: '',
    };

  }


  updateSelection = (e) => {
    this.setState({
      selection: e.target.value
    });
  }


  async componentDidMount() {
    await this.props.getDetail(this.props.match.params.id);
    await this.props.getReviews(this.props.match.params.id);
    await this.props.getNonContainingShelves(this.props.match.params.id);
  }

  async componentDidUpdate(oldProps) {
    const oldId = Number.parseInt(oldProps.match.params.id);
    const newId = Number.parseInt(this.props.match.params.id);
    if (oldId === newId) {
      return;
    }
    await this.props.getDetail(newId);
    await this.props.getReviews(newId);
    await this.props.getNonContainingShelves(newId);
  }

  handleSubmit = async (event) => {

    event.preventDefault();
    try {
      const bookId = this.props.match.params.id;
      const shelfName = this.state.selection;
      const shelves = this.props.openShelves;
      const found = shelves.find(shelf => shelf.name === shelfName);
      const shelfId = found.id;
      await this.props.getShelfDetail(shelfId);
      await this.props.addBookToShelf(bookId, shelfId);
      this.props.history.push(`/shelves/${shelfId}`);
    } catch(e) {}
  }

  render() {

    const detail = this.props.detail;
    const openShelves = this.props.openShelves;
    if (!detail) {
      return null;
    }
    return (
      <div className="container__book-info">
        <h2 className="bookpage-container__book-info__description">{detail.title}</h2>
        <div>
          <h3>Information</h3>
          <ul className="bookpage-container__book-info__author">
            <li><b>Author</b> {detail.author}</li>
            <li><b>Description</b> {detail.description}</li>
            <li><b>Published</b> {detail.publicationYear}</li>
            <li><b>Genre</b> {detail.genre}</li>
            <li><b>Owner Name</b> {detail.owner.username}</li>
          </ul>
        </div>
        <div>
          <form className='add-to-bookshelf-dropdown' name='form'>
            <select name='dropdownFormSelect' id='drop-down-form__select' onChange={this.updateSelection} className='drop-down' >
              <option className='add-to-bookshelf-dropdown__option drop-down' name='selectShelf'>add to shelf</option>
              {openShelves.map(shelf => {
                return (
                  <option key={`${shelf.name}-${shelf.id}`} className='add-to-bookshelf-dropdown__option'>
                    {shelf.name}
                  </option>
                );
              })}
            </select>
            <button type='submit' className='button-light' onClick={this.handleSubmit}>submit</button>
          </form>
        </div>
        <br></br>
        <div>
          <BookReview bookId={this.props.match.params.id}  {...this.props} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detail: state.book.detail,
    openShelves: state.book.openShelves,
  }
}

const mapDispatchToProps = dispatch => ({
  getDetail: (id) => dispatch(getDetail(id)),
  getReviews: (id) => dispatch(getReviews(id)),
  getNonContainingShelves: (id) => dispatch(getNonContainingShelves(id)),
  addBookToShelf: (bookId, shelfId) => dispatch(addBookToShelf(bookId, shelfId)),
  getShelfDetail: (shelfId) => dispatch(getShelfDetail(shelfId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
