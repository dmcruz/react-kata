import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./MyLayout.css";
const { Header, Content, Footer } = Layout;

const MyLayout: React.FC = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home" title="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="people" title="People">
            <Link to="/people">People</Link>
          </Menu.Item>
          <Menu.Item key="nav2" title="Nav 2">
            Nav 2
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", minHeight: "50px" }}>
        <div className="site-content">{children}</div>
      </Content>
      <Footer>React Kata &copy; 2021</Footer>
    </Layout>
  );
};

export default MyLayout;
