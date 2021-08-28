import './style.css';

const Header = (props) => {
  const { theme } = props;
  const headerClass = theme === 'light' ? 'headerContainer' : 'headerContainer dark';

  return (
    <header className={headerClass}>
      <div className="background" />
    </header>
  );
}

export default Header;
