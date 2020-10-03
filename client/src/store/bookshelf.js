import { removeUser } from './authentication';

const LOAD_SHELVES = 'Mybooks/SHELF/LOAD'
const LOAD_SHELFDETAIL = 'Mybooks/SHELF/LOAD_SHELFDETAIL'
const REMOVE_SHELF = 'MYBOOKS/SHELF/REMOVE_SHELF'
const FORM_ERRORS = "Mybooks/SHELF/FORM_ERRORS";
const REMOVE_BOOK = 'MYBOOKS/SHELF/REMOVE_BOOK'


const loadShelves = shelves => {
  return {
    type: LOAD_SHELVES,
    shelves
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
    const data = await res.json();
    const booksOnShelf = data.Books;
    dispatch(loadShelfDetail(booksOnShelf));
    return booksOnShelf;
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
    body: JSON.stringify( shelf )
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
  }).then((id) => dispatch(removeBook(shelfId, bookId)));
}


const initialState = {
  shelfDetail: [],
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
      nextState.shelfDetail = [];
      return nextState;
    case REMOVE_BOOK:
      return {};
    case FORM_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state
  }
}
