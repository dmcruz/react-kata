import { Card, Row, Col, Space, Typography } from 'antd';
import React from 'react';
import Gravatar from '../widget/Gravatar';

export interface IPersonCardProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const PersonCard = (person: IPersonCardProps) => {
  return (
    <Card
      bordered={false}
      style={{
        width: 300,
        textAlign: 'center',
        display: person ? '' : 'none',
      }}
    >
      <Row justify="center">
        <Space direction="vertical">
          <Gravatar name={person?.name} />
          <Typography.Title level={3}>{person?.name}</Typography.Title>
        </Space>
      </Row>
      <Row justify="space-between">
        <Col className="row-header">Birth Year</Col>
        <Col>{person?.birth_year}</Col>
      </Row>
      <Row justify="space-between">
        <Col className="row-header">Gender</Col>
        <Col className="title-case">{person?.gender}</Col>
      </Row>
      <Row justify="space-between">
        <Col className="row-header">Height</Col>
        <Col>{person?.height}</Col>
      </Row>
      <Row justify="space-between">
        <Col className="row-header">Hair Color</Col>
        <Col>{person?.hair_color}</Col>
      </Row>

      <Row justify="space-between">
        <Col className="row-header">Eye Color</Col>
        <Col>{person?.eye_color}</Col>
      </Row>
      <Row justify="space-between">
        <Col className="row-header">Skin Color</Col>
        <Col>{person?.skin_color}</Col>
      </Row>
    </Card>
  );
};
export default React.memo(PersonCard);
