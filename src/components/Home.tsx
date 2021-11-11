import { Col, Row } from 'antd';
import RandomPerson from './widget/RandomPerson';
const Home = () => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <RandomPerson />
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};
export default Home;
