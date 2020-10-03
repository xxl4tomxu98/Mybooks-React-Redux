import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShelfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.updateName = this.updateProperty('name');
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <section className="add-bookshelf-form">
        <form onSubmit={this.handleSubmit}>
          <ul>{this.renderErrors()}</ul>
          <input type='text'
            className='input-field input-field__add-bookshelf hidden'
            name='newShelfName'
            onChange={this.updateName}
            value={this.state.name}
            placeholder="create a shelf"/>
          <input type="submit" value="" style={{display: 'none'}} />
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.bookshelf.errors,
  }
}
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ShelfForm);
