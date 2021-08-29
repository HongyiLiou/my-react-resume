// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Layout/>
      <Sidebar/>
    </React.Fragment>
  );
}

export default App;
