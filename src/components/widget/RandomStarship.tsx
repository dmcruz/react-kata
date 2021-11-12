import { Card, Row, Col, Typography } from 'antd';
import { shallowEqual, useSelector } from 'react-redux';
import withLoadingStarships from '../wrapper/withLoadingStarships';
import Identicon from './Identicon';

const RandomStarship = () => {
  const randomNumber = Math.floor(Math.random() * 36);
  const randomStarship = useSelector(
    (state: any) => state.starships.list[randomNumber],
    shallowEqual
  );
  const view = (
    <>
      <Typography.Title level={3}>Featured Starship</Typography.Title>
      <Card
        title={randomStarship?.name}
        style={{
          width: 300,
          textAlign: 'center',
        }}
      >
        <Row justify="center">
          <Identicon name={randomStarship?.name} />
          <i>
            {randomStarship?.model} / {randomStarship?.manufacturer}
          </i>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Cost</Col>
          <Col>{randomStarship?.cost_in_credits}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Crew</Col>
          <Col>{randomStarship?.crew}</Col>
        </Row>

        <Row justify="space-between">
          <Col className="row-header">Passengers</Col>
          <Col>{randomStarship?.passengers}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Cargo Capacity</Col>
          <Col>{randomStarship?.cargo_capacity}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Consumables</Col>
          <Col>{randomStarship?.consumables}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Hyperdrive Rating</Col>
          <Col>{randomStarship?.hyperdrive_rating}</Col>
        </Row>
      </Card>
    </>
  );
  if (randomStarship) return view;
  else return null;
};
export default withLoadingStarships(RandomStarship);
