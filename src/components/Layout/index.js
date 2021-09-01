import { useSelector } from 'react-redux';
import Header from './components/Header';
import Content from './components/Content';
import './style.css';

const Layout = () => {
  const theme = useSelector(state => state.theme);

  return (
    <article className="layoutContainer">
      <Header theme={theme} />
      <Content theme={theme} />
    </article>
  );
}

export default Layout;