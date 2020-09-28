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
      <div className="pokemon-detail">
        <div className={`pokemon-detail-image-background`} >
          {/* <div className="pokemon-detail-image"
               style={{backgroundImage: `url('${book.imageUrl}')`}}>
          </div> */}
          <h1 className="bigger">{book.title}</h1>
        </div>
        <div className="pokemon-detail-lists">
          <div>
            <h2>Information</h2>
            <ul>
              <li><b>Author</b> {book.author}</li>
              <li><b>Description</b> {book.description}</li>
              <li><b>Published</b> {book.publicationYear}</li>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detail: state.books.detail
  }
}
const mapDispatchToProps = dispatch => ({
  getDetail: (id) => dispatch(getDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
