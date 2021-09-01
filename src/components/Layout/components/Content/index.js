import './style.css';

const Content = (props) => {
  const { theme } = props;
  const contentClass = theme === 'light' ? 'contentContainer' : 'contentContainer dark';

  return (
    <div className={contentClass} />
  );
}

export default Content;
