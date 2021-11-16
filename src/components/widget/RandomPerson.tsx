import { Card, Row, Col, Typography } from 'antd';
import { shallowEqual, useSelector } from 'react-redux';
import { PersonData } from '../../redux/people/people.types';
import { IAppRootState } from '../../redux/root-reducer.type';
import withLoadingPeople from '../wrapper/withLoadingPeople';
import Gravatar from './Gravatar';

const RandomPerson = () => {
  const randomNumber = Math.floor(Math.random() * 82);
  const randomPerson = useSelector<IAppRootState, PersonData>(
    (state) => state.people.list[randomNumber],
    shallowEqual
  );
  const view = (
    <>
      <Typography.Title level={3}>Featured Person</Typography.Title>
      <Card
        title={randomPerson?.name}
        style={{
          width: 300,
          textAlign: 'center',
        }}
      >
        <Row justify="center">
          <Gravatar name={randomPerson?.name} />
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Birth Year</Col>
          <Col>{randomPerson?.birth_year}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Gender</Col>
          <Col className="title-case">{randomPerson?.gender}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Height</Col>
          <Col>{randomPerson?.height}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Hair Color</Col>
          <Col>{randomPerson?.hair_color}</Col>
        </Row>

        <Row justify="space-between">
          <Col className="row-header">Eye Color</Col>
          <Col>{randomPerson?.eye_color}</Col>
        </Row>
        <Row justify="space-between">
          <Col className="row-header">Skin Color</Col>
          <Col>{randomPerson?.skin_color}</Col>
        </Row>
      </Card>
    </>
  );
  if (randomPerson) return view;
  else return null;
};
export default withLoadingPeople(RandomPerson);
