import { PersonData } from '../people/people.types';
import { StarshipData } from '../starships/starships.types';

export type IHomeBaseState = {
  captain: string;
  isModalVisible: boolean;
  squad: Array<PersonData>;
  squadMax: number;
  hangar: Array<StarshipData>;
  hangarCapacity: number;
};
