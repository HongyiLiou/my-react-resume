import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
import { experience as experienceData } from '../../../../configs';
import './style.css';

const Experience = (props) => {
  const { theme } = props;
  const experienceClass = theme === 'light' ? 'experienceContainer' : 'experienceContainer dark';
  const experience = useRef();
  const disPatch = useDispatch();
  disPatch(uploadRefs(experience));

  return (
    <div className={experienceClass} ref={experience}>
      <div className="background" />
      <div className="container">
        <article className="titleBlock">
          <p className="title">學經歷</p>
          <p className="subtitle">Education & Work experience</p>
        </article>
        <article className="timelineBlock">
          <ul className="timeline">
            {
              experienceData.map((d, i) => {
                return (
                  <li className="item" key={`timelineItem_${i}`}>
                    {d.name}
                    <p className="unit">{d.unit}</p>
                    {
                      d.works?.map((work, index) => {
                        return <p className="works" key={`work_${index}`}>{work}</p>;
                      })
                    }
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

export default Experience;
