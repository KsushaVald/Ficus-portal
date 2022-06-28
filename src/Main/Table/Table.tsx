import React from 'react';
import styles from './table.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { IPost, postRequestAsync } from '../../store/post/action';
import { TableNote } from './TableNote';
import { TableHeader } from './TableHeader';
import { TablePagination } from './TablePagination';
import { currentPage } from '../../store/pages/action';
import { modalCreateClose, modalCreateOpen, modalUpdateClose } from '../../store/modal/action';
import { Modal } from '../../Modal';
import { CreateTaskForm } from '../../Modal/CreateTaskForm';
import { NewTaskInitial } from '../../store/newtask/action';
import { ChangeForm } from '../../Modal/ChangeForm';



export function Table() {
  const posts = useSelector<RootState, IPost[]>(state => state.posts.data);
  const loading = useSelector<RootState, boolean>(state => state.posts.loading);
  const currentpage = useSelector<RootState, number>(state => state.pages.currentpage);
  const allpagenumber = useSelector<RootState, number>(state => state.pages.allpagenumber);
  const isModal = useSelector<RootState, boolean>(state => state.modal.isModalCreateOpen);
  const isUpdateModal = useSelector<RootState, boolean>(state => state.modal.isModalUpdateOpen);
  const sendNewtaskSuccess = useSelector<RootState, boolean>(state => state.newtask.success);
  const sendChangetaskSuccess = useSelector<RootState, boolean>(state => state.newtask.success);
  const dispatch = useDispatch();
  return (
    <div className={styles.tableContainer}>
      <TableHeader/>
      <ul className={styles.tableItems}>
        {loading && <li className={styles.Info}>Loading...</li>}
        {posts.length === 0 && !loading && <li className={styles.Info}>Tasks not found</li>}
        {posts.length > 0 && !loading && posts.map((post)=>(
            <TableNote username={post.username} email={post.email} text={post.text} status={post.status} id={post.id}/>
          ))
        }
        <button className='btnPrev btnNavigation' disabled={currentpage === 1 && true} onClick={()=>{
          dispatch(currentPage(currentpage-1));
          dispatch(postRequestAsync());
        }}>
          <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.83 32.67L21.66 23.5L30.83 14.33L28 11.5L16 23.5L28 35.5L30.83 32.67Z" fill="black"/>
            <defs>
              <clipPath id="clip0_0_1848">
                <rect width="60" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className='btnNext btnNavigation' disabled={currentpage === allpagenumber} onClick={()=>{
          dispatch(currentPage(currentpage+1));
          dispatch(postRequestAsync());
        }}>
          <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.17 32.92L26.34 23.75L17.17 14.58L20 11.75L32 23.75L20 35.75L17.17 32.92Z" fill="black"/>
            <defs>
              <clipPath id="clip0_0_1854">
                <rect width="60" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </ul>
      <TablePagination/>
      <button className={styles.addBtn+' btn'} onClick={
        ()=>{
          dispatch(modalCreateOpen());}
      }>Add task</button>
      {isModal && <Modal header='Create new task' onClose={()=>{
        dispatch(modalCreateClose());
        dispatch(NewTaskInitial());
      }}>
          <CreateTaskForm/>
        </Modal>}

      {isUpdateModal && <Modal header='Change task' onClose={()=>{
        dispatch(modalUpdateClose());
      }}>
        <ChangeForm/>
      </Modal>}
    </div>
  );
}
