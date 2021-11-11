const INITIAL_STATE = {
  list: [],
};

const starshipsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_STARSHIPS_LIST':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default starshipsReducer;
