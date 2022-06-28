import React from 'react';
import styles from './tableheader.css';
import { TableHeaderItem } from './TableHeaderItem';

export function TableHeader() {

  return (
    <ul className={styles.tableHeader}>
      <TableHeaderItem value='username'/>
      <TableHeaderItem value='email'/>
      <li className={styles.tableHeaderItem} style={{width: '50%'}}>Task</li>
      <TableHeaderItem value='Status'/>
      <li className={styles.tableHeaderCaption}>Sort by:</li>
  </ul>
  );
}

