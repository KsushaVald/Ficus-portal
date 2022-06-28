import React, { ReactText } from 'react';
import styles from './main.css';

interface IMainProps {
  children: React.ReactNode;
}

export function Main({children}:IMainProps) {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {children}
      </section>
    </main>
  );
}
