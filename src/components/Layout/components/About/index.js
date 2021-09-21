import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
// import { experience as experienceData } from '../../../../configs';
import './style.css';

const About = (props) => {
  const { theme } = props;
  const aboutClass = theme === 'light' ? 'aboutContainer' : 'aboutContainer dark';
  const about = useRef();
  const disPatch = useDispatch();
  disPatch(uploadRefs(about));

  return (
    <div className={aboutClass} ref={about}>
      <div className="background" />
      <div className="container">
        <article className="titleBlock">
          <p className="title">關於我</p>
          <p className="subtitle">Autobiography & Interests</p>
        </article>
        <article className="content">
          <p className="text">
            　　我是劉弘翊，喜歡繪畫與吉他演奏，曾獲得二次演奏冠軍，也樂在觀察，讓自己保持想像力，常在 Dribble 與 Pinterest 網站上參考不同的繪畫主題與平面設計作品，觀察其構圖、合成方式、視覺感受等，並嘗試使用 HTML、CSS 寫出類似效果，另外也在 YouTube 上學習專業演奏家的表演技巧來精進演奏能力。
          </p>
          <p className="text">
            　　喜歡自學，對於有興趣的事物會很投入，吉他與程式都是自己習得。寫程式既是職業也是興趣，比起使用繪圖軟體畫出設計圖，更喜歡透過寫 code 實現預想的功能和畫面。
          </p>
          <div className="playGuitar" />
          <p className="text interests" style={{ marginTop: '60px' }}>
            　　大學期間任職過吉他老師，教導無經驗的學員彈奏，經過一段時間的指導之後，都具有自彈自唱的功力。而每次享受舞台的當下以及演出結束後的掌聲，都使我有無比的成就感。
          </p>
          <p className="text interests">
            　　最近計畫在 Hahow 好學校網站上，將相關教學經驗製作成課程，讓更多人可以學習 FingerStyle 的音樂，也持續進修前端網頁技能，期許自己能將前端網頁技能專業達到能撰寫技術分享文章的水平。
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
