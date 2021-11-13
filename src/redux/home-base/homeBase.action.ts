export const setCaptain = (name: string) => ({
  type: 'SET_CAPTAIN',
  payload: name,
});
export const addToSquad = (person: any) => ({
  type: 'ADD_TO_SQUAD',
  payload: person,
});

export const addToHangar = (starship: any) => ({
  type: 'ADD_TO_HANGAR',
  payload: starship,
});

export const removeFromSquad = (index: number) => ({
  type: 'REMOVE_FROM_SQUAD',
  payload: index,
});

export const removeFromHangar = (index: number) => ({
  type: 'REMOVE_FROM_HANGAR',
  payload: index,
});

export const requestAddToSquad = (personName: string) => ({
  type: 'REQUEST_ADD_TO_SQUAD',
  payload: personName,
});

export const requestAddToHangar = (starShipName: string) => ({
  type: 'REQUEST_ADD_TO_HANGAR',
  payload: starShipName,
});
