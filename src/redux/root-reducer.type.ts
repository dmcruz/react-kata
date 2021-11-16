import { IHomeBaseState } from './home-base/homeBase.types';
import { IPeopleState } from './people/people.types';
import { IStarshipsState } from './starships/starships.types';

export interface IAppRootState {
  people: IPeopleState;
  starships: IStarshipsState;
  homeBase: IHomeBaseState;
}
