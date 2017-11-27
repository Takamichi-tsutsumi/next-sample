const reducer = (state = { films: [] }, action) => {
  switch (action.type) {
    case 'FETCH_FILMS_SUCCESS':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default reducer