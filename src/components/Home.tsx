import { useSelector } from "react-redux";

const Home = () => {
  const randomNumber = Math.floor(Math.random() * 82);
  const randomPerson = useSelector(
    (state: any) => state.people.list[randomNumber]
  );

  return (
    <div>
      <h1>Home</h1>
      {randomPerson?.name}
    </div>
  );
};
export default Home;
