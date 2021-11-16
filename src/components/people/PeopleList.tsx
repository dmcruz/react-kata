import { shallowEqual, useSelector } from 'react-redux';
import { Card } from 'antd';
import PersonCard, { IPersonCardProps } from './PersonCard';
import withLoadingPeople from '../wrapper/withLoadingPeople';
import { IAppRootState } from '../../redux/root-reducer.type';
import { PersonData } from '../../redux/people/people.types';
import './PeopleList.css';

const PeopleList = () => {
  const list = useSelector<IAppRootState, PersonData[]>(
    (state) => state.people.list,
    shallowEqual
  );
  const viewPerson = list.map((person: IPersonCardProps, index: number) => (
    <Card.Grid key={index} className="person-card-grid">
      <PersonCard {...person} />
    </Card.Grid>
  ));

  return (
    <div>
      <Card>{viewPerson}</Card>
    </div>
  );
};
export default withLoadingPeople(PeopleList);
