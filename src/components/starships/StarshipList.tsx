import { Button, Space, Table, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddToHangar } from '../../redux/home-base/homeBase.action';
import Identicon from '../widget/Identicon';
import withLoadingStarships from '../wrapper/withLoadingStarships';

const Starships = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, row: any, index: any) => {
        return {
          children: (
            <Space direction="vertical" align="center">
              <Identicon name={text} size />
              <Typography.Title level={5}>{text}</Typography.Title>
            </Space>
          ),
        };
      },
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: 'Cost in Credits',
      dataIndex: 'cost_in_credits',
      key: 'cost_in_credits',
    },
    {
      title: 'Length',
      dataIndex: 'length',
      key: 'length',
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
      title: 'Cargo Capacity',
      dataIndex: 'cargo_capacity',
      key: 'cargo_capacity',
    },
    {
      title: 'Consumables',
      dataIndex: 'consumables',
      key: 'consumables',
    },
    {
      title: 'Hyperdrive Rating',
      dataIndex: 'hyperdrive_rating',
      key: 'hyperdrive_rating',
    },
    {
      title: 'MGLT',
      dataIndex: 'MGLT',
      key: 'MGLT',
    },
    {
      title: 'Starship Class',
      dataIndex: 'starship_class',
      key: 'starship_class',
    },
    {
      title: 'Add to Hangar',
      dataIndex: 'name',
      render: (text: any, row: any, index: any) => {
        return {
          children: (
            <Button
              type="primary"
              onClick={() => {
                const starshipName = text;
                dispatch(requestAddToHangar(starshipName));
              }}
            >
              Add
            </Button>
          ),
        };
      },
    },
  ];

  const starships = useSelector((state: any) =>
    // adding key to the list by remapping the array
    state.starships.list.map((item: any, index: number) => ({
      ...item,
      key: index,
    }))
  );
  return <Table columns={columns} dataSource={starships} />;
};
export default withLoadingStarships(Starships);
