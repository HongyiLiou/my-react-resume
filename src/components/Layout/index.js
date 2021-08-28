import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Content from './components/Content';
import { changeTheme } from '../../reducers';
import './style.css';

const Layout = () => {
  const theme = useSelector(state => state.theme);
  const disPatch = useDispatch();

  return (
    <article className="layoutContainer">
      <Header theme={theme} />
      <Content theme={theme} />
      <span>Theme: </span>
      <input value={theme} />
      <button
        type="button"
        onClick={() => { disPatch(changeTheme(theme === 'dark' ? 'light' : 'dark')); }}
      >
        按按看R
      </button>
    </article>
  );
}

export default Layout;