import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
import './style.css';

const Skills = (props) => {
  const { theme } = props;
  const skillsClass = theme === 'light' ? 'skillsContainer' : 'skillsContainer dark';
  const skills = useRef();
  const disPatch = useDispatch();
  disPatch(uploadRefs(skills));
  const skillsData = [
    { name: 'Web APP', content: '網頁應用程式開發' },
    { name: 'Interaction', content: '網頁前端互動設計' },
    { name: 'Animations', content: '網頁動態效果與動畫' },
    { name: 'UI', content: '網頁視覺畫面設計' },
    { name: 'RWD', content: '響應式網頁設計' },
  ];
  const toolsData = [
    {
      type: 'Visual',
      names: [
        'Adobe Photoshop', 'Adobe Illustrator',
      ],
    },
    {
      type: 'Engineering drawing',
      names: [
        'AutoCAD',
      ],
    },
    {
      type: 'Development',
      names: [
        'HTML / Pug',
        'CSS / Sass / Scss',
        'JavaScript / TypeScript / jQuery',
        'React / Angular / Ionic',
        'Webpack / git',
      ],
    },
  ];

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
