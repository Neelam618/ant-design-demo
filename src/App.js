import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import AppHeader from './components/common/Header';
import AppHome from '../src/views/Home';

import { Layout } from 'antd';
const { Header, Content } = Layout;

function App() {
  return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
      </Layout>
    );
}

export default App;
