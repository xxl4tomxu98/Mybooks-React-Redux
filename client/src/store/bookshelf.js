import { removeUser } from './authentication';

const LOAD_SHELVES = 'Mybooks/SHELF/LOAD_SHELVES'
const LOAD_SHELFDETAIL = 'Mybooks/SHELF/LOAD_SHELFDETAIL'
const REMOVE_SHELF = 'MYBOOKS/SHELF/REMOVE_SHELF'
const FORM_ERRORS = "Mybooks/SHELF/FORM_ERRORS";
const REMOVE_BOOK = 'MYBOOKS/SHELF/REMOVE_BOOK'
const LOAD_BOOK_TO_SHELF = 'Mybooks/SHELF/LOAD_BOOK_TO_SHELF'

const loadShelves = shelves => {
  return {
    type: LOAD_SHELVES,
    shelves
  }
}

const loadBookToShelf = (book) => {
  return {
    type: LOAD_BOOK_TO_SHELF,
    book
  }
}

const loadShelfDetail = detail => {
  return {
    type: LOAD_SHELFDETAIL,
    detail
  }
}

export const removeShelf = (shelfId) => {
  return {
    type: REMOVE_SHELF,
    shelfId
  }
}

export const removeBook = (shelfId, bookId) => {
  return {
    type: REMOVE_BOOK,
    shelfId,
    bookId
  }
}


const formErrors = (errors) => {
  return {
    type: FORM_ERRORS,
    errors
  };
};

export const getShelves = () => async dispatch => {
    const res = await fetch("/api/shelves")
    if (res.ok) {
      const data = await res.json();
      dispatch(loadShelves(data));
      return data;
    } else if (res.status === 401) {
      return dispatch(removeUser());
    }
    throw res;
}




export const getShelfDetail = (id) => async dispatch => {
    const res = await fetch(`/api/shelves/${id}`)
    if (res.ok) {
      const detail = await res.json();
      dispatch(loadShelfDetail(detail));
      return detail;
    } else if (res.status === 401) {
      return dispatch(removeUser());
    }
    throw res;
}



export const createShelf = (shelf) => async dispatch => {
    const res = await fetch('/api/shelves/', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(shelf)
    });
    if (res.ok) {
      dispatch(getShelves());
      return res;
    } else if (res.status === 401) {
      dispatch(removeUser());
      return res;
    } else if (res.status === 422) {
      const { errors } = await res.json();
      dispatch(formErrors(errors));
      return res;
    }
    throw res;
};

export const addBookToShelf = (bookId, shelfId) => async dispatch => {
    const res = await fetch(`/api/shelves/${shelfId}/books/${bookId}/`);
    if (res.ok) {
      dispatch(loadBookToShelf(res.json()));
      return res;
    } else if (res.status === 401) {
      dispatch(removeUser());
      return res;
    } else if (res.status === 422) {
      const { errors } = await res.json();
      dispatch(formErrors(errors));
      return res;
    }
    throw res;
};


export const deleteShelf = (id) =>  async dispatch => {
    const res = await fetch(`/api/shelves/${id}`, {
      method: 'delete'
    });
    if (res.ok) {
      dispatch(removeShelf(id));
      return res;
    } else if (res.status === 401) {
      dispatch(removeUser());
      return res;
    } else if (res.status === 422) {
      const { errors } = await res.json();
      dispatch(formErrors(errors));
      return res;
    }
    throw res;
}


export const deleteBook = (shelfId, bookId) => dispatch => {
  fetch(`/api/shelves/${shelfId}/books/${bookId}`, {
    method: 'delete'
  }).then((shelfId, bookId) => dispatch(removeBook(shelfId, bookId)));
}


const initialState = {
  shelfDetail: {},
  errors: [],
}

export default function reducer (state=initialState, action) {
  switch(action.type){
    case LOAD_SHELVES:
      return { ...state, shelfList: action.shelves };
    case LOAD_SHELFDETAIL:
      return { ...state, shelfDetail: action.detail };
    case REMOVE_SHELF:
      const nextState = { ...state };
      nextState.shelfList = nextState.shelfList.filter(shelf => shelf.id!==action.shelfId);
      nextState.shelfDetail = {};
      return nextState;
    case REMOVE_BOOK:
      const newState = { ...state };
      newState.shelfDetail.Books=newState.shelfDetail.Books.filter(book => book.id !== action.bookId);
      return newState;
    case LOAD_BOOK_TO_SHELF:
      const afterState = { ...state };
      afterState.shelfDetail.Books.push(action.book);
      return afterState;
    case FORM_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state
  }
}
