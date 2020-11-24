import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ShelfDetail from './ShelfDetail';
import ShelfForm from './ShelfForm';
import Fab from './Fab';
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
            {/* <div className='bookshelf-books my-custom-scrollbar my-custom-scrollbar-primary'> */}
              <div className='welcome-header'>
                <h2>welcome {this.props.username}</h2>
                <h2 className='quote'>
                  “A room without books is like a body without a soul.”
                </h2>
                <h3 className='quote'>author ― Marcus Tullius Cicero</h3>
              </div>
            {/* </div> */}
            <nav className='side-bar'>
              {this.props.shelves.map(shelf => {
                return (
                  <NavLink key={shelf.name} to={`/shelves/${shelf.id}`}>
                    <div className='bookshelf-list-item:hover bookshelf-list-item--active'>
                      <div className='bookshelf-title'>{shelf.name}</div>
                    </div>
                  </NavLink>
                );
              })}
            </nav>
            { this.state.formVisible ? (
                <ShelfForm
                  handleCreated={this.handleCreated}
                  hideForm={this.hideForm}
                />
              ) : (
                <>
                  <Route path="/shelves/:id" render={props =>
                    <ShelfDetail  {...props} />
                  } />
                  <Fab hidden={this.state.showForm} onClick={this.showForm} />
                </>
              )
            }
        </main>
    );
  }
}

const mapStateToProps = state => {
    return {
      shelves: state.bookshelf.shelfList,
      username: state.authentication.username,
    }
}
const mapDispatchToProps = dispatch => ({
    getShelves: () => dispatch(getShelves()),
    createShelf: (shelf) => dispatch(createShelf(shelf)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ShelfBrowser);
