import React from 'react';
import styles from './userblock.css';
import userIcon from '../../img/avatar.jpg'
export function UserBlock() {
  return (
    <a className = {styles.userblockLink} href="#">
      <div className={styles.userblock}>
        <img src={userIcon} alt="usericon" className={styles.userblockImg}/>
        <span className={styles.userblockSpan}>Admin</span>
      </div>
    </a>

  );
}
