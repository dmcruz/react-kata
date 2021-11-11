import { useDispatch, useSelector } from 'react-redux';
import { Card, message } from 'antd';
import { FetchHelper } from '../../services/FetchHelper';
import { setPeople } from '../../redux/people/people.action';
import { useEffect } from 'react';
import PersonCard, { IPersonCardProps } from './PersonCard';

const PeopleList = () => {
  const dispatch = useDispatch();
  const list: [] = useSelector((state: any) => state.people.list);
  useEffect(() => {
    (async () => {
      try {
        const peopleList = await FetchHelper.getAllPeople();
        dispatch(setPeople(peopleList));
      } catch (error: any) {
        message.error(`${error}`);
      }
    })();
    // eslint-disable-next-line
  }, []);

  const viewPerson = list.map((person: IPersonCardProps, index: number) => (
    <Card.Grid style={{ width: '25%', textAlign: 'center' }}>
      <PersonCard key={index} {...person} />
    </Card.Grid>
  ));

  return (
    <div>
      <Card title="People">{viewPerson}</Card>
    </div>
  );
};
export default PeopleList;
