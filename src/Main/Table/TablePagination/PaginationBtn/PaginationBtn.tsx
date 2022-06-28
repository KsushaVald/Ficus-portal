import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentPage } from '../../../../store/pages/action';
import { postRequestAsync } from '../../../../store/post/action';
import { RootState } from '../../../../store/reducer';
import styles from './paginationbtn.css';

interface IPropsPagination {
  value: number
}
export function PaginationBtn({value}:IPropsPagination) {
  const currentpage = useSelector<RootState, number>(state => state.pages.currentpage);
  const disaptch = useDispatch();
  return (
    <li className={styles.paginationitem}>
      <button className={ styles.pagintaionBtn}  disabled={value===currentpage} onClick={()=>{
        disaptch(currentPage(value));
        disaptch(postRequestAsync())
      }}>{value}</button>
    </li>
  );
}
