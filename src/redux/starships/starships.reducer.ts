const INITIAL_STATE = {
  list: [],
  loading: false,
  error: null,
};

const starshipsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'FETCH_STARSHIPS_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_STARSHIPS_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case 'FETCH_STARSHIPS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default starshipsReducer;
