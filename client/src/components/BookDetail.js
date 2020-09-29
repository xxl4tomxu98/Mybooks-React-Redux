import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetail } from '../store/book';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.loadSingleBook();
  }

  async componentDidUpdate(oldProps) {
    const oldId = Number.parseInt(oldProps.match.params.id);
    const newId = Number.parseInt(this.props.match.params.id);
    if (oldId === newId) {
      return;
    }
    await this.loadSingleBook();
  }

  async loadSingleBook() {
    const id = this.props.match.params.id;
    const response = await fetch(`/api/books/${id}`);
    if (response.ok) {
      this.setState({
        book: await response.json(),
      });
    }
  }

  render() {

    const book = this.state.book;
    if (!book) {
      return null;
    }
    return (
      <div className="container__book-info">
        <h1 className="bookpage-container__book-info__description">{book.title}</h1>

        <div>
          <h2>Information</h2>
          <ul className="bookpage-container__book-info__author">
            <li ><b>Author</b> {book.author}</li>
            <li><b>Description</b> {book.description}</li>
            <li><b>Published</b> {book.publicationYear}</li>
            <li><b>Genre</b> {book.genre}</li>
            <li><b>Owner Name</b> {book.owner.username}</li>
            {/* <li>
              <b>Reviews</b>
              <ul>
                {book.reviews.map(review =>
                  <li key={review}>{review}</li>
                )}
              </ul>
            </li> */}
          </ul>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detail: state.book.detail,
    genre: state.book.genre,
  }
}
const mapDispatchToProps = dispatch => ({
  getDetail: (id) => dispatch(getDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
