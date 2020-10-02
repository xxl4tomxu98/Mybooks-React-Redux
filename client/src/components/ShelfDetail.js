import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShelfDetail } from '../store/bookshelf';
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



  render() {
    const shelfDetail = this.props.shelfDetail;
    if (!shelfDetail) {
      return null;
    }
    return (
      <div className="book-on-shelf">
        <nav>
          {shelfDetail.map(book => {
            return (
              <NavLink key={`${book.id}-${book.title}`} to={`/books/${book.id}`}>
                <div className='book-image-container navbar__text-logo-div:hover'>
                  <img className='book-image__1' src={`/images/${book.id}.jpg`} alt="bookshelf"/>
                  <h5 className="book-on-shelf__book-title">{book.title}</h5>
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
  }
}
const mapDispatchToProps = dispatch => ({
  getShelfDetail: (id) => dispatch(getShelfDetail(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShelfDetail);
