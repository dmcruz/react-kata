import { Table } from 'antd';
import { useSelector } from 'react-redux';
import withLoadingStarships from '../wrapper/withLoadingStarships';

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
];

const Starships = () => {
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
