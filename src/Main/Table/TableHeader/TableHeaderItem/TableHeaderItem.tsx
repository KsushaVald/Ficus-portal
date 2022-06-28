import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync } from '../../../../store/post/action';
import { RootState } from '../../../../store/reducer';
import { PostSort } from '../../../../store/sort/action';
import styles from './tableheaderitem.css';

interface ITableHeaderItem {
  value: string
}

export function TableHeaderItem({value}:ITableHeaderItem) {
  const name = value[0].toUpperCase()+value.slice(1);
  const sortname  = useSelector<RootState, string>(state => state.sort.sortField);
  const direction = useSelector<RootState, string>(state => state.sort.sortDirection);
  const dispatch = useDispatch()
  let style = {}
  if (value === 'username' || value === 'Status') style = {width: '15%'};
  if( value === 'email') style = {width: '20%'};
  return (
  <li className={styles.tableHeaderitem} style={style}>
    <button className={sortname===value ? styles.itemBtn+' '+ styles.itemBtnActive : styles.itemBtn} onClick={()=>{
      if(sortname===value) {
        if(direction ==='asc'){
          dispatch(PostSort({sortField: value, sortDirection: 'desc'}));
          dispatch(postRequestAsync());
        }
        else {
          dispatch(PostSort({sortField: value, sortDirection: 'asc'}));
          dispatch(postRequestAsync());
        }
      }
      else {
        dispatch(PostSort({sortField: value, sortDirection: 'asc'}));
        dispatch(postRequestAsync());
      }
    }}>
      {name}
      <svg className={sortname===value && direction==='desc' ? styles.headerItemsvg+' '+styles.headerItemsvgUp  : styles.headerItemsvg} width="14" height="14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 16L29.18 13.18L18 24.34V0H14V24.34L2.84 13.16L0 16L16 32L32 16Z" fill="#98d7af"/>
      </svg>
    </button>
  </li>
  );
}
