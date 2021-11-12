import { Button, Table, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromSquad } from '../../redux/home-base/homeBase.action';

const Squad = () => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Birth Year',
      dataIndex: 'birth_year',
      key: 'birth_year',
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
                dispatch(removeFromSquad(index));
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
  const squad = useSelector((state: any) => state.homeBase.squad);
  const view = <Table columns={columns} dataSource={squad} />;
  const viewEmpty = (
    <Button type="primary" onClick={() => navigate('/people')}>
      Build your Squad
    </Button>
  );
  return (
    <>
      <Typography.Title level={3}>Squad Members</Typography.Title>
      {squad.length === 0 ? viewEmpty : view}
    </>
  );
};
export default Squad;
