import { Col, Row } from 'antd';
import Hangar from './widget/Hangar';
import RandomPerson from './widget/RandomPerson';
import Squad from './widget/Squad';
const Home = () => {
  return (
    <div>
      <Row justify="space-around">
        <Col span={5}>
          <RandomPerson />
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
