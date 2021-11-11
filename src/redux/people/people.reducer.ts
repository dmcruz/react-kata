export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
export interface IPeopleState {
  list: Array<IPerson>;
}
const INITIAL_STATE: IPeopleState = {
  list: [],
};

const peopleReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_PEOPLE_LIST':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
