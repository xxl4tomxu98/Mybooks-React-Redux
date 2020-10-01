import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetail } from '../store/book';
import BookReview from './BookReview';

class BookDetail extends Component {

  async componentDidMount() {
    await this.props.getDetail(this.props.match.params.id);
  }

  async componentDidUpdate(oldProps) {
    const oldId = Number.parseInt(oldProps.match.params.id);
    const newId = Number.parseInt(this.props.match.params.id);
    if (oldId === newId) {
      return;
    }
    await this.props.getDetail(newId);
  }



  render() {

    const detail = this.props.detail;
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
        <BookReview bookId={this.props.match.params.id}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detail: state.book.detail,
  }
}
const mapDispatchToProps = dispatch => ({
  getDetail: (id) => dispatch(getDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
