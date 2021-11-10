import { useDispatch, useSelector } from "react-redux";
import { Button, Col, message, Row } from "antd";
import { FetchHelper } from "../../services/FetchHelper";
import PersonRow, { PersonRowProps } from "./PersonRow";
import "./PeopleList.css";
import { setPeople } from "../../redux/people/people.action";

const PeopleList = () => {
  // const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const list: [] = useSelector((state: any) => state.people.list);
  const handleClickFetch = (e: any) => {
    (async () => {
      try {
        // setList(await FetchHelper.getAllPeople());
        const peopleList = await FetchHelper.getAllPeople();
        dispatch(setPeople(peopleList));
      } catch (error: any) {
        message.error(`${error}`);
      }
    })();
  };

  const viewPerson = list.map((person: PersonRowProps, index: number) => (
    <PersonRow key={index} {...person} />
  ));
  return (
    <div>
      <div>
        <Button type="primary" onClick={handleClickFetch}>
          Fetch Data
        </Button>
      </div>
      <div>
        <Row
          className="row-header"
          gutter={[16, 16]}
          style={{ display: list.length > 0 ? "" : "none" }}
        >
          <Col span={3}>Name</Col>
          <Col span={3}>Gender</Col>
          <Col span={3}>Height</Col>
          <Col span={3}>Mass</Col>
          <Col span={3}>Hair Color</Col>
          <Col span={3}>Skin Color</Col>
          <Col span={3}>Eye Color</Col>
          <Col span={3}>Birth Year</Col>
        </Row>
        {viewPerson}
      </div>
    </div>
  );
};
export default PeopleList;
