import { Col, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CaptainModal from './widget/CaptainModal';
import Hangar from './widget/Hangar';
import RandomPerson from './widget/RandomPerson';
import RandomStarship from './widget/RandomStarship';
import Squad from './widget/Squad';

const Home = () => {
  const dispatch = useDispatch();
  const captainName = useSelector(
    (state: any) => state.homeBase.captain || 'Captain'
  );
  return (
    <div>
      <CaptainModal />
      <Typography.Title level={2}>
        Welcome back,{' '}
        <span
          onClick={() => dispatch({ type: 'SET_MODAL_VISIBLE', payload: true })}
          style={{ cursor: 'pointer' }}
        >
          {captainName}
        </span>
      </Typography.Title>
      <Row justify="space-around">
        <Col span={5}>
          <RandomPerson />
          <br />
          <RandomStarship />
        </Col>
        <Col span={8}>
          <Squad />
        </Col>
        <Col span={10}>
          <Hangar />
        </Col>
      </Row>
    </div>
  );
};
export default Home;
