import { IHomeBaseState } from './homeBase.types';

const INITIAL_STATE: IHomeBaseState = {
  captain: '',
  isModalVisible: false,
  squad: [],
  squadMax: 10,
  hangar: [],
  hangarCapacity: 10,
};

const homeBaseReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_MODAL_VISIBLE':
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case 'SET_CAPTAIN':
      return {
        ...state,
        captain: action.payload,
        isModalVisible: false,
      };
    case 'ADD_TO_SQUAD':
      return {
        ...state,
        squad:
          state.squad.length < state.squadMax
            ? [...state.squad, ...action.payload]
            : state.squad,
      };
    case 'ADD_TO_HANGAR':
      return {
        ...state,
        hangar:
          state.hangar.length < state.hangarCapacity
            ? [...state.hangar, ...action.payload]
            : state.hangar,
      };
    case 'REMOVE_FROM_SQUAD':
      // create copy of the state and remove the indexed item from it
      const copySquad = [...state.squad];
      copySquad.splice(action.payload, 1);

      return {
        ...state,
        squad: copySquad,
      };
    case 'REMOVE_FROM_HANGAR':
      const copyHangar = [...state.hangar];
      copyHangar.splice(action.payload, 1);

      return {
        ...state,
        hangar: copyHangar,
      };
    default:
      return state;
  }
};
export default homeBaseReducer;
