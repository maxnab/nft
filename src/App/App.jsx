import React from 'react';
import '../reset.css';
import styles from './App.module.scss';
import Header from '../Components/Header/Header';
import Caesar from '../Components/Caesar/Caesar';

function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <Caesar />
    </div>
  );
}

export default App;
