import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../reducers';
import { navItems, links } from '../../configs';
import './style.css';

const Sidebar = () => {
  const theme = useSelector(state => state.theme);
  const refs = useSelector(state => state.refs);
  const activeRef = useSelector(state => state.activeRef);
  const refIndex = refs.indexOf(activeRef);
  const disPatch = useDispatch();
  const sidebarClass = theme === 'light' ? 'sidebarContainer' : 'sidebarContainer dark';
  const [isminiButtonsOpen, setMiniButtonsOpen] = useState(false);
  const setNavActive = (index) => {
    document.body.parentNode.scrollTop = refs[index].current.offsetTop;
  }

  return (
    <aside className={sidebarClass}>
      <div className="header">Hong-Yi Liou</div>
      <article className={`photo ${refIndex !== 0 && refIndex > -1 ? 'active' : ''}`}>
        <section className={`miniButtonGroup ${isminiButtonsOpen ? 'active' : ''}`} title="相關連結們">
          <button className="handleClick" onClick={() => setMiniButtonsOpen(() => !isminiButtonsOpen)} />
          {
            links.map(link => {
              return (
                <div className={`link ${link.name}`} title={link.title}>
                  <a className="handleClick" href={link.url} target="_blank" rel="noreferrer" />
                </div>
              );
            })
          }
        </section>
      </article>
      <ul className="navList">
        {
          navItems.map(item => {
            return (
              <li
                className={`navItem ${item.icon} ${((refIndex === item.activeRefIndex) || (refIndex === -1 && item.activeRefIndex === 0)) ? 'active' : ''}`}
                onClick={() => setNavActive(item.activeRefIndex)}
              >
                {item.title}
                {
                  item.content &&
                  <p className="navItemDetail">{item.content}</p>
                }
              </li>
            );
          })
        }
        <li className="navItem resume">
          紙本履歷
          <a
            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
            href="https://drive.google.com/uc?export=view&id=1ItBKh2xqbQ_vnRbOaJvsvGyAqZpgMfMa"
            target="_blank"
            rel="noreferrer"
          />
        </li>
      </ul>
      <label className="toggleSwitch" title={`${theme === 'dark' ? '開燈' : '關燈'}`}>
        <input type="checkbox" checked={theme === 'dark'} />
        <div className="toggle" />
        <button
          className="handleClick"
          type="button"
          onClick={() => { disPatch(changeTheme(theme === 'dark' ? 'light' : 'dark')); }}
        />
      </label>
    </aside>
  );
};

export default Sidebar;
