const INITIAL_STATE = {
  list: [],
  loading: false,
};

const peopleReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'FETCH_PEOPLE_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case 'FETCH_PEOPLE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
