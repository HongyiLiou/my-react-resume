import { useRef } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const { theme } = props;
  const headerClass = theme === 'light' ? 'headerContainer' : 'headerContainer dark';
  const basicInfo = useRef();
  const disPatch = useDispatch();
  const refs = useSelector(state => state.refs);
  disPatch(uploadRefs(basicInfo));
  const links = [
    { name: 'github', title: 'Github', link: 'https://github.com/HongyiLiou' },
    { name: 'codepen', title: 'Codepen', link: 'https://codepen.io/HongyiLiou' },
    { name: 'facebook', title: 'Facebook', link: 'https://www.facebook.com/uchiha.zhu' },
    { name: 'instagram', title: 'Instagram', link: 'https://www.instagram.com/hongyi_liou' },
    { name: 'youtube', title: 'Youtube', link: 'https://goo.gl/vZ8g9S' },
  ];

  return (
    <header className={headerClass} ref={basicInfo}>
      <div className="background" />
      <div className="container">
        <div className="userInfo">
          <div className="photo" />
          <div className="titleArea">
            <h1 className="title">劉弘翊　Hong-Yi Liou</h1>
            <h2 className="subtitle">Front-end Developer & Acoustic Guitarist</h2>
            <p className="contact email">t30034a7@gmail.com</p>
            <p className="contact tel">0925-518-508</p>

            <ul className="links">
              {
                links.map(link => {
                  return (
                    <li className={link.name} title={link.title}>
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer"
                      />
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <button
            style={{ position: 'absolute', right: '20px' }}
            onClick={() => { console.log('getBoundingClientRect', refs); }}
          >
            看看
          </button>
        </div>
        <div className="summary">
          <p>三年實務經驗的前端工程師，熱愛音樂、影像視覺，樂於學習新技術。</p>
          <p>喜歡一點一滴累積完成一首曲子、一幅影像、一個網頁的成就感。</p>
          <p>
            好溝通、善於配合。
          </p>
        </div>
        <article className="titleBackground">Basic Info</article>
      </div>
    </header>
  );
}

export default Header;
