import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadRefs } from '../../../../reducers';
// import { experience as experienceData } from '../../../../configs';
import './style.css';

const Professional = (props) => {
  const { theme } = props;
  const professionalClass = theme === 'light' ? 'professionalContainer' : 'professionalContainer dark';
  const professional = useRef();
  const disPatch = useDispatch();
  disPatch(uploadRefs(professional));

  return (
    <div className={professionalClass} ref={professional}>
      <div className="background" />
      <div className="background2" />
      <div className="container">
        <article className="titleBlock">
          <p className="title">專業經驗</p>
          <p className="subtitle">Professional study & Front-end development</p>
        </article>
        <article className="content">
          <p className="text">
            　　我經常透過網路課程自學，像是 Udemy、Hahow 好學校…等，藉由課程快速吸收並增加自己的專業視野與水平。透過網路課程學習 HTML、CSS、JavaScript，邊學邊做累積經驗。
          </p>
          <p className="text">
            　　使用過 Photoshop、Illustrator，製作與學習包含商標、名片、包裝、CIS 企業形象設計、簡易網頁設計...等，常利用修圖技能幫同學修改合成各種圖片、照片。
          </p>
          <p className="text">
            　　在嘉義縣政府服替代役的期間，常協助製作政府單位課程橫幅、海報，在退役前也舉辦了個人音樂會，也為自己的活動做了海報、活動宣傳品、貴賓邀請卡...等，學以致用，收穫頗豐。
          </p>
          <p className="text">
            　　其後從事為期三年左右的前端工程師職務，設計規劃並透過程式碼實現網頁動態效果、滿足產品規格需求、串接後端等，也不斷吸收學習前端網頁新知。
          </p>
        </article>
      </div>
    </div>
  );
}

export default Professional;
