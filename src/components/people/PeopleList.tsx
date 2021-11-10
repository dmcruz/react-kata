import { Button } from "antd";
import { useState } from "react";
const PeopleList = () => {
  const [list, setList] = useState([]);
  const handleClickFetch = (e: any) => {
    fetch("https://swapi.dev/api/people")
      .then((res: Response) => res.json())
      .then(
        (data: any) => {
          console.log(data.results);
          setList(data.results);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const viewPerson = list.map((item: any, index: number) => (
    <li key={index}>{item.name}</li>
  ));
  return (
    <div>
      <div>
        <Button type="primary" onClick={handleClickFetch}>
          Fetch Data
        </Button>
      </div>
      <div>
        <ul>{viewPerson}</ul>
      </div>
    </div>
  );
};
export default PeopleList;
