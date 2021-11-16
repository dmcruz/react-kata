import { PersonData } from './people.types';

export const fetchPeopleStart = () => ({
  type: 'FETCH_PEOPLE_START',
});

export const fetchPeopleSuccess = (list: Array<PersonData>) => ({
  type: 'FETCH_PEOPLE_SUCCESS',
  payload: list,
});

export const fetchPeopleError = (error: any) => ({
  type: 'FETCH_PEOPLE_ERROR',
  payload: error,
});
