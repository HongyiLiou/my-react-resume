import { useSelector } from 'react-redux';
import Header from './components/Header';
import Content from './components/Content';
import './style.css';

const Layout = () => {
  const theme = useSelector(state => state.theme);

  return (
    <article className="layoutContainer">
      <div className="container">
        <Header theme={theme} />
        <Content theme={theme} />
      </div>
    </article>
  );
}

export default Layout;