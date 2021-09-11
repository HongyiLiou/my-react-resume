import { useSelector } from 'react-redux';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './style.css';

const Layout = () => {
  const theme = useSelector(state => state.theme);

  return (
    <article className="layoutContainer">
      <Header theme={theme} />
      <Experience theme={theme} />
      <Skills theme={theme} />
    </article>
  );
}

export default Layout;