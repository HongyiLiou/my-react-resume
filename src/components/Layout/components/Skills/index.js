import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
import {
  skills as skillsData,
  tools as toolsData,
} from '../../../../configs';
import './style.css';

const Skills = (props) => {
  const { theme } = props;
  const skillsClass = theme === 'light' ? 'skillsContainer' : 'skillsContainer dark';
  const skills = useRef();
  const disPatch = useDispatch();
  disPatch(uploadRefs(skills));

  return (
    <div className={skillsClass} ref={skills}>
      <div className="background" />
      <div className="background2" />
      <div className="container">
        <article className="titleBlock">
          <p className="title">技能</p>
          <p className="subtitle">Skills & Tools</p>
        </article>
        <article className="skillBlock">
          <ul className="skills">
            {
              skillsData.map(data => {
                return (
                  <li className="skillItem">
                    <p className="skillName">{data.name}</p>
                    <p className="skillContent">{data.content}</p>
                  </li>
                );
              })
            }
          </ul>
        </article>
        <article className="toolBlock">
          <div className="tools">
            {
              toolsData.map(data => {
                return (
                  <section>
                    <p className="toolType">{data.type}</p>
                    <div className="line" />
                    <ul>
                      {
                        data.names.map(name => {
                          return (
                            <li className="toolName">{name}</li>
                          );
                        })
                      }
                    </ul>
                  </section>
                );
              })
            }
          </div>
        </article>
      </div>
    </div>
  );
}

export default Skills;
