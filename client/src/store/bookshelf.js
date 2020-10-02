import { removeUser } from './authentication';

const LOAD_SHELVES = 'Mybooks/SHELF/LOAD'
const LOAD_SHELFDETAIL = 'Mybooks/SHELF/LOAD_SHELFDETAIL'
const REMOVE_SHELF = 'MYBOOKS/SHELF/REMOVE_SHELF'
const FORM_ERRORS = "Mybooks/SHELF/FORM_ERRORS";

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
    const bookDetail = data.Books;
    dispatch(loadShelfDetail(bookDetail));
    return bookDetail;
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
  console.log(res.ok);
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



export const deleteShelf = (id) => dispatch => {
  fetch(`/api/shelves/${id}`, {
    method: 'delete'
  }).then((id) => dispatch(removeShelf(id)));
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
      return {}
    case FORM_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state
  }
}
