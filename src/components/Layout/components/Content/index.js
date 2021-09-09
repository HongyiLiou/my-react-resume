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
  const experienceData = [
    {
      name: 'Mayo鼎恒數位科技',
      unit: '薪酬及招募產品發展部　前端工程師',
      works: '(使用 React 前端框架，開發UI/功能元件，串接後端API，依照規格書開發產品)',
      year: '2021',
    },
    {
      name: '鼎新電腦台中分公司',
      unit: '產品研發部　前端工程師',
      works: '(使用 Angular 前端框架開發產品功能，實現UI設計圖，串接後端API，依照規格書開發產品)',
      year: '2019',
    },
    {
      name: '格子科技',
      unit: '網頁設計部　網頁設計師',
      works: '(網頁切版，將設計圖轉換成網頁程式碼，於此時精通了HTML/CSS)',
      year: '2018',
    },
    {
      name: '私立南台科技大學',
      unit: '工業管理系　碩士',
      works: null,
      year: '2014 ~ 2016',
    },
  ];

  return (
    <div className={contentClass} ref={experience}>
      <div className="container">
        <article className="titleBlock">
          <p className="title">學經歷</p>
          <p className="subtitle">Education & Work Experience</p>
        </article>
        <article className="timelineBlock">
          <ul className="timeline">
            {
              experienceData.map(d => {
                return (
                  <li className="item">
                    {d.name}
                    <p className="unit">{d.unit}</p>
                    <p className="works">{d.works || null}</p>
                    <p className="year">{d.year}</p>
                    <div className="line" />
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

export default Content;
