import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
import { portfolios as personalPortfolios } from '../../../../configs';
import './style.css';

const Portfolio = (props) => {
  const { theme } = props;
  const portfolioClass = theme === 'light' ? 'portfolioContainer' : 'portfolioContainer dark';
  const portfolios = useRef();
  const disPatch = useDispatch();
  disPatch(uploadRefs(portfolios));
  const refs = useSelector(state => state.refs);
  const activeRef = useSelector(state => state.activeRef);
  const refIndex = refs.indexOf(activeRef);
  // const webPortfoliosClass = refIndex === 5 ? 'webPortfolios active' : 'webPortfolios';
  const webPortfoliosClass = refIndex === 11 ? 'webPortfolios active' : 'webPortfolios';

  return (
    <div className={portfolioClass} ref={portfolios}>
      <div className="background" />
      <div className="background2" />
      <div className="container">
        <article className="titleBlock">
          <p className="title">作品</p>
          <p className="subtitle">Personal portfolios</p>
        </article>
        <article className="content">
          <ul className={webPortfoliosClass}>
            {
              personalPortfolios.map(portfolio => {
                return (
                  <li className={`portfolio ${portfolio.cssClass}`}>
                    <div className="inner" />
                    <p className="innerText">{portfolio.title}</p>
                    <p className="info">{portfolio.info}</p>
                    <a className="link" href={portfolio.url} target="_blank" rel="noreferrer" />
                  </li>
                );
              })
            }
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Portfolio;
