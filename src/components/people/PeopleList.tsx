import { shallowEqual, useSelector } from 'react-redux';
import { Card } from 'antd';
import PersonCard, { IPersonCardProps } from './PersonCard';
import withLoadingPeople from '../wrapper/withLoadingPeople';

const PeopleList = () => {
  const list: [] = useSelector((state: any) => state.people.list, shallowEqual);
  const viewPerson = list.map((person: IPersonCardProps, index: number) => (
    <Card.Grid key={index} style={{ width: '25%', textAlign: 'center' }}>
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
