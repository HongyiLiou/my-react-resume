import './style.css';

const Footer = (props) => {
  const { theme } = props;
  const footerClass = theme === 'light' ? 'footerContainer' : 'footerContainer dark';

  return (
    <div className={footerClass}>
      <div className="container">
        <footer className="footer">Hong-Yi Liou © 2021 All Rights Reserved</footer>
      </div>
    </div>
  );
}

export default Footer;
