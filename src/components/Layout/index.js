import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Professional from './components/Professional';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { setActiveRef } from '../../reducers';
import './style.css';

/** 執行 Scroller */
function onScroll(handleScroller) {
  window.addEventListener('scroll', () => {
    if (handleScroller) {
      handleScroller();
    }
  });
}

const Layout = () => {
  const theme = useSelector(state => state.theme);
  const refs = useSelector(state => state.refs);
  const disPatch = useDispatch();
  useEffect(() => {
    /* componentDidMount */
    const getActiveRef = () => {
      const windowHeight = window.innerHeight;
      let activeRef = null;
      refs.map(ref => {
        const refTop = ref.current && ref.current.getBoundingClientRect().top;
        const refBottom = ref.current && ref.current.getBoundingClientRect().bottom;
        if ((refTop < (windowHeight / 2) && refTop > 0) || (refBottom > (windowHeight / 2) && refTop < (windowHeight / 2))) {
          activeRef = ref;
        }
      });
      return activeRef;
    };

    const setCurrentRef = () => {
      const activeRef = getActiveRef();
      if (activeRef) {
        disPatch(setActiveRef(activeRef));
      }
    }

    onScroll(setCurrentRef);
  }, []);

  return (
    <article className="layoutContainer">
      <Header theme={theme} />
      <Experience theme={theme} />
      <Skills theme={theme} />
      <About theme={theme} />
      <Professional theme={theme} />
      <Portfolio theme={theme} />
      <Footer theme={theme} />
    </article>
  );
}

export default Layout;