import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';
import ShelfDetail from './ShelfDetail';
import ShelfForm from './ShelfForm';

import { getShelves, createShelf } from '../store/bookshelf';

class ShelfBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
    };
  }

  componentDidMount = () => {
    this.props.getShelves()
  }

  handleCreated = async (shelf) => {
    try {
      const res = await this.props.createShelf(shelf);
      const data = await res.json();
      if (res.ok) {
        this.props.history.push(`/shelves/${data.id}`);
        this.setState({
          formVisible: false,
        });
      }
    } catch(e) {}
  }

  showForm = () => {
    this.setState({
      formVisible: true,
    })
  }

  hideForm = () => {
    this.setState({
      formVisible: false,
    });
  };

  render() {

    if (!this.props.shelves) {
      return null;
    }
    return (
      <main className='wrapper'>
        <LogoutButton />
        <nav>
          {this.props.shelves.map(shelf => {
            return (
              <NavLink key={shelf.name} to={`/shelves/${shelf.id}`}>
                <div className='bookshelf-list-item:hover bookshelf-list-item--active'>
                  <div>
                    <div className='bookshelf-title'>{shelf.name}</div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </nav>
        { this.state.formVisible ? (
            <ShelfForm
              hidden={this.state.formVisible}
              handleCreated={this.handleCreated}
              hideForm={this.hideForm}
              showForm={this.showForm}
            />
          ) : (
            <Route path="/shelves/:id" render={props =>
              <ShelfDetail  {...props} />
            } />
          )
        }
      </main>
    );
  }
}

const mapStateToProps = state => {
    return {
      shelves: state.bookshelf.shelfList
    }
}
const mapDispatchToProps = dispatch => ({
    getShelves: () => dispatch(getShelves()),
    createShelf: (shelf) => dispatch(createShelf(shelf))
})


export default connect(mapStateToProps, mapDispatchToProps)(ShelfBrowser);
