export const fetchStarshipsStart = () => ({
  type: 'FETCH_STARSHIPS_START',
});

export const fetchStarshipsSuccess = (list: []) => ({
  type: 'FETCH_STARSHIPS_SUCCESS',
  payload: list,
});

export const fetchStarshipsError = (error: any) => ({
  type: 'FETCH_STARSHIPS_ERROR',
  payload: error,
});
