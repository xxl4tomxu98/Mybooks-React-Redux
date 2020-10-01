import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReviews, createReview } from '../store/book';

class BookReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
    };
    this.updateReview = this.updateReview('review');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.getReviews(this.props.bookId);
  }




  updateReview = property => e => {
    this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = this.state;
    this.props.createReview(this.props.bookId, payload);
  }

  render() {
    const reviews = this.props.reviews;
    if (!reviews) {
      return null;
    }
    return (
        <div className='container__reviews-title'>
          <h3> Reviews </h3>
          <section>
            <form onSubmit={this.handleSubmit} className='bookpage-container__form'>
              <input onChange={this.updateReview} className='bookpage-container__reviews__input' type="text" name="comment" value={this.state.review} placeholder="write a review" />
              <input type="submit" value="" style={{display: 'none'}} />
            </form>
          </section>
          <section>
            {reviews.map( (review, index) =>
              <div key={`${index}-${review.bookId}-${review.userId}`} className='container__reviews'>
                <div className='container__reviews__star-container'>
                  <img className='container__reviews__star' src="../images/transparent-background-star-115497268824j1ftohfyn.png" alt="star"/>
                  <img className='container__reviews__star' src="../images/transparent-background-star-115497268824j1ftohfyn.png" alt="star"/>
                  <img className='container__reviews__star' src="../images/transparent-background-star-115497268824j1ftohfyn.png" alt="star"/>
                  <img className='container__reviews__star' src="../images/transparent-background-star-115497268824j1ftohfyn.png" alt="star"/>
                  <img className='container__reviews__star' src="../images/transparent-background-star-115497268824j1ftohfyn.png" alt="star"/>
                </div>
                <div className='container__reviews___star'>
                  <p className='container__reviews__text'>{review.description}</p>
                </div>
                <div className='container__reviews__text'>
                  <h6 className='container__reviews__readmore' >readmore</h6>
                </div>
              </div>
            )}
          </section>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.book.reviews,
  }
}
const mapDispatchToProps = dispatch => ({
  getReviews: (id) => dispatch(getReviews(id)),
  createReview: (id, payload) => dispatch(createReview(id, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookReview);
