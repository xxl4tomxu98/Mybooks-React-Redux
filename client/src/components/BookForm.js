import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenres } from '../store/book';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      genre:  '',
      description: '',
      publicationYear: '',
      genres: [],
    };
    this.updateTitle = this.updateProperty('title');
    this.updateAuthor = this.updateProperty('author');
    this.updateGenre = this.updateProperty('genre');
    this.updateDescription = this.updateProperty('description');
    this.updatePublicationYear = this.updateProperty('publicationYear');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const genres = await this.props.getGenres();
    if (genres.length) this.setState({ genre: genres[0] });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const payload = this.state;
    this.props.handleCreated(payload);
    this.props.hideForm();
  }

  updateProperty = property => e => {
    this.setState({
      [property]: e.target.value
    });
  }


  renderErrors() {
    const { errors } = this.props;
    if (errors) {
      return errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    }
  }

  render() {
    return (
      <section className="container__book-info new-form-holder centered middled">
        <form onSubmit={this.handleSubmit}>
          <ul>{this.renderErrors()}</ul>
          <input type="text"
            placeholder="Title"
            required
            value={this.state.title}
            onChange={this.updateTitle} />
          <input type="text"
            placeholder="Author"
            required
            value={this.state.author}
            onChange={this.updateAuthor} />
          {/* <input type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.updateImageUrl} /> */}
          <input type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.updateDescription} />
          <input type="text"
            placeholder="Publication Year"
            value={this.state.publicationYear}
            onChange={this.updatePublicationYear} />
          <select onChange={this.updateGenre}>
            {this.props.genres.map(genre =>
              <option key={genre}>{genre}</option>
            )}
          </select>
          <button type="submit">Create New Book</button>
          <button type="button" onClick={this.props.hideForm}>
            Cancel
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.book.genres,
    errors: state.book.errors,
  }
}
const mapDispatchToProps = dispatch => ({
  getGenres: () => dispatch(getGenres()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
