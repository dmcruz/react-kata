import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Card, Skeleton } from 'antd';
import { fetchPeopleStart } from '../../redux/people/people.action';
import { useEffect } from 'react';
import PersonCard, { IPersonCardProps } from './PersonCard';

const PeopleList = () => {
  const dispatch = useDispatch();
  const list: [] = useSelector((state: any) => state.people.list, shallowEqual);
  const loading = useSelector(
    (state: any) => state.people.loading,
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchPeopleStart());
    // eslint-disable-next-line
  }, []);

  const viewPerson = list.map((person: IPersonCardProps, index: number) => (
    <Card.Grid key={index} style={{ width: '25%', textAlign: 'center' }}>
      <PersonCard {...person} />
    </Card.Grid>
  ));

  return (
    <div>
      <Card title="People">
        <Skeleton loading={loading} avatar active>
          {viewPerson}
        </Skeleton>
      </Card>
    </div>
  );
};
export default PeopleList;
