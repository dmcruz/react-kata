import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchPeopleStart } from '../../redux/people/people.action';
import { fetchStarshipsStart } from '../../redux/starships/starships.action';
import './MyLayout.css';

const { Header, Content, Footer } = Layout;

const MyLayout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeopleStart());
    dispatch(fetchStarshipsStart());
    // eslint-disable-next-line
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <Typography.Title>SW Manager</Typography.Title>
        </div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home" title="Home">
            <Link to="/">Home Base</Link>
          </Menu.Item>
          <Menu.Item key="people" title="People">
            <Link to="/people">People</Link>
          </Menu.Item>
          <Menu.Item key="starships" title="Starships">
            <Link to="/starships">Starships</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '50px' }}>
        <div className="site-content">{children}</div>
      </Content>
      <Footer>React Kata &copy; 2021</Footer>
    </Layout>
  );
};

export default MyLayout;
