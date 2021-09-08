import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
import './style.css';

const Content = (props) => {
  const { theme } = props;
  const contentClass = theme === 'light' ? 'contentContainer' : 'contentContainer dark';
  const experience = useRef();
  const disPatch = useDispatch();
  disPatch(uploadRefs(experience));

  return (
    <div className={contentClass} ref={experience}>
      <div className="container">
        <article className="titleBlock">
          <p className="title">學經歷</p>
          <p className="subtitle">Education & Work Experience</p>
        </article>
        <article className="timelineBlock">
          <ul className="timeline">
            <li className="item">
              私立南台科技大學
              <div className="unit">工業管理系</div>
              <div className="post">碩士</div>
            </li>
            <li className="item">格子科技</li>
            <li className="item">鼎新電腦台中分公司</li>
            <li className="item">Mayo鼎恒數位科技</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Content;
