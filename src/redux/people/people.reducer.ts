const INITIAL_STATE = {
  list: [],
};

const peopleReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_PEOPLE_LIST":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
