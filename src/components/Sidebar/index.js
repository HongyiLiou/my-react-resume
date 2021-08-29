import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../reducers';
import './style.css';

const Sidebar = () => {
  const theme = useSelector(state => state.theme);
  const disPatch = useDispatch();
  const sidebarClass = theme === 'light' ? 'sidebarContainer' : 'sidebarContainer dark';
  const navItems = [
    { active: true, title: '基本資料', content: '簡介、聯絡方式', icon: 'basicInfo' },
    { active: false, title: '學經歷', content: '學歷科系、工作經歷', icon: 'experience' },
    { active: false, title: '技能', content: '專長、擅長工具', icon: 'skills' },
    { active: false, title: '關於我', content: '自傳、興趣延伸', icon: 'about' },
    { active: false, title: '專業經驗', content: '專業學習、平面設計、網頁前端相關經驗', icon: 'autobiography' },
    { active: false, title: '作品', content: 'Web前端作品展示', icon: 'works' },
    { active: false, title: '紙本履歷', icon: 'works' },
  ];
  const [stateNavItems, setNavItems] = useState(navItems);
  const setNavActive = (index) => {
    const newNavItems = stateNavItems.map(item => item);
    newNavItems.forEach(item => item.active = false);
    newNavItems[index].active = true;
    setNavItems(() => newNavItems);
  }

  return (
    <aside className={sidebarClass}>
      <div className="header">Hong-Yi Liou</div>
      <ul className="navList">
        {
          stateNavItems.map((item, index) => {
            return (
              <li className={`navItem ${item.icon} ${item.active ? 'active' : ''}`} onClick={() => setNavActive(index)}>
                {item.title}
                {
                  item.content &&
                  <p className="navItemDetail">{item.content}</p>
                }
              </li>
            );
          })
        }
      </ul>
      <div style={{ position: 'absolute', bottom: '0' }}>
        <span>Theme: </span>
        <input value={theme} />
        <button
          type="button"
          onClick={() => { disPatch(changeTheme(theme === 'dark' ? 'light' : 'dark')); }}
        >
          按按看R
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
// 基本資料-簡介、聯絡方式
// 學經歷-學歷科系、工作經歷
// 技能-專長、擅長工具
// 關於我-自傳、興趣延伸
// 專業經驗-專業學習、平面設定、網頁前端相關經驗
