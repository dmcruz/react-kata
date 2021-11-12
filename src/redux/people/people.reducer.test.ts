import peopleReducer from './people.reducer';
const initialState = {
  list: [],
  loading: false,
  error: null,
};
describe('peopleReducer tests', () => {
  it('should return initial state', () => {
    expect(peopleReducer(undefined, {})).toEqual(initialState);
  });
  it('should set loading to true on fetch start', () => {
    expect(
      peopleReducer(initialState, {
        type: 'FETCH_PEOPLE_START',
      }).loading
    ).toEqual(true);
  });
  it('should set list on success', () => {
    const mockState = {
      list: [
        { name: 'Han Solo', gender: 'male', birth_year: '111' },
        { name: 'Chewy', gender: 'unknown', birth_year: 'unknown' },
      ],
    };
    expect(
      peopleReducer(initialState, {
        type: 'FETCH_PEOPLE_SUCCESS',
        payload: mockState,
      }).list
    ).toEqual(mockState);
  });
  it('should set error message on error', () => {
    const mockError = 'invalid';
    expect(
      peopleReducer(initialState, {
        type: 'FETCH_PEOPLE_ERROR',
        payload: mockError,
      }).error
    ).toEqual(mockError);
  });
});
