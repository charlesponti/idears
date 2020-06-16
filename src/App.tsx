import React, { useEffect } from 'react';
import styles from './App.module.scss';
import IdeaForm from './containers/IdeaForm';
import Ideas from './containers/Ideas';
import { GlobalProvider } from './context/GlobalState';

function Brain () {
  return (
    <span 
      role="img" 
      className={styles.brain}
      aria-label="brain">🧠</span>
  )
}

function App() {
  useEffect(() => {
    document.title = 'Idears ??'
    return () => {}
  }, [])
  
  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Brain />
          <h1 style={{ marginLeft: '3rem' }}>Idearz</h1>
          <Brain/>
        </header>
        <main className={styles.main}>
          <GlobalProvider>
            <IdeaForm/>
            <Ideas/>
          </GlobalProvider>
        </main>
      </div>
  );
}

export default App;
