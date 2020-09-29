import { removeUser } from './authentication';

const LOAD = 'Mybooks/Book/LOAD'
const LOAD_DETAIL = 'Mybooks/Book/LOAD_DETAIL'
const LOAD_GENRES = 'Mybooks/Book/LOAD_GENRES'
const FORM_ERRORS = "Mybooks/Book/FORM_ERRORS";

const load = books => {
  return {
    type: LOAD,
    books
  }
}

const loadDetail = detail => {
  return {
    type: LOAD_DETAIL,
    detail
  }
}

const loadGenres = genres => {
  return {
    type: LOAD_GENRES,
    genres
  }
}

const formErrors = (errors) => {
  return {
    type: FORM_ERRORS,
    errors
  };
};

export const getBooks = () => async dispatch => {
  const res = await fetch("/api/books")
  if (res.ok) {
    const data = await res.json();
    dispatch(load(data));
    return data;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
}

export const getDetail = (id) => async dispatch => {
  const res = await fetch(`/api/books/${id}`)
  if (res.ok) {
    const detail = await res.json()
    dispatch(loadDetail(detail));
    return detail;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
}

export const getGenres = () => async dispatch => {
  const res = await fetch("/api/books/genres")
  if (res.ok) {
    const bookGenres = await res.json()
    dispatch(loadGenres(bookGenres));
    return bookGenres;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
}


export const createBook = (book) => async dispatch => {
  console.log(book);
  const res = await fetch('/api/books/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });
  console.log(res.ok);
  if (res.ok) {
    dispatch(getBooks());
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


const initialState = {
  genres: [],
  errors: [],
}

export default function reducer (state=initialState, action) {
  switch(action.type){
    case LOAD:
      return { ...state, list: action.books };
    case LOAD_DETAIL:
      return { ...state, detail: action.detail };
    case LOAD_GENRES:
      return { ...state, genres: action.genres };
    case FORM_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state
  }
}
