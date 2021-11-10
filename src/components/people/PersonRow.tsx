import { Col, Row } from "antd";

export interface PersonRowProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
const PersonRow = (person: PersonRowProps) => {
  return (
    <Row className="row-item" gutter={[16, 16]}>
      <Col span={3} className="title-case">
        {person.name}
      </Col>
      <Col span={3} className="title-case">
        {person.gender}
      </Col>
      <Col span={3} className="title-case">
        {person.height}
      </Col>
      <Col span={3} className="title-case">
        {person.mass}
      </Col>
      <Col span={3} className="title-case">
        {person.hair_color}
      </Col>
      <Col span={3} className="title-case">
        {person.skin_color}
      </Col>
      <Col span={3} className="title-case">
        {person.eye_color}
      </Col>
      <Col span={3} className="title-case">
        {person.birth_year}
      </Col>
    </Row>
  );
};
export default PersonRow;
