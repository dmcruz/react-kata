import { Button, Table, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromHangar } from '../../redux/home-base/homeBase.action';
import { IAppRootState } from '../../redux/root-reducer.type';
import { StarshipData } from '../../redux/starships/starships.types';

const Hangar = () => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Max Speed',
      dataIndex: 'max_atmosphering_speed',
      key: 'max_atmosphering_speed',
    },
    {
      title: 'Crew',
      dataIndex: 'crew',
      key: 'crew',
    },
    {
      title: 'Passengers',
      dataIndex: 'passengers',
      key: 'passengers',
    },
    {
      title: 'Remove',
      dataIndex: 'name',
      render: (text: any, row: any, index: any) => {
        return {
          children: (
            <Button
              type="primary"
              onClick={() => {
                dispatch(removeFromHangar(index));
              }}
            >
              Remove
            </Button>
          ),
        };
      },
    },
  ];

  const navigate = useNavigate();
  const hangar = useSelector<IAppRootState, StarshipData[]>(
    (state) => state.homeBase.hangar
  );
  const view = <Table columns={columns} dataSource={hangar} />;
  const viewEmpty = (
    <Button type="primary" onClick={() => navigate('/starships')}>
      Buy Ships
    </Button>
  );
  return (
    <>
      <Typography.Title level={3}>Hangar</Typography.Title>
      {hangar.length === 0 ? viewEmpty : view}
    </>
  );
};
export default Hangar;
