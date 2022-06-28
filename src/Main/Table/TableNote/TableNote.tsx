import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../Modal';
import { ChangeForm } from '../../../Modal/ChangeForm';
import { CreateTaskForm } from '../../../Modal/CreateTaskForm';
import { modalCreateClose, modalLoginClose, modalLoginOpen, modalUpdateClose, modalUpdateOpen } from '../../../store/modal/action';
import { NewTaskInitial } from '../../../store/newtask/action';
import { noteInitial, noteTextChange } from '../../../store/notedata/action';
import { postRequestAsync } from '../../../store/post/action';
import { RootState } from '../../../store/reducer';
import styles from './tablenote.css';

interface ITableProps {
  id?: string,
  username?: string,
  email?: string,
  text?: string,
  status?: number
}

export function TableNote({username, email, text, status, id}:ITableProps) {
  const token = useSelector<RootState, string>(state => state.token.token);
  const dispatch = useDispatch();
  return (
    <li className={styles.tableNote} key={id}>
      <ul className={styles.tableNoteList}>
        <li className={styles.tableNoteListItem +' '+ styles.tableNote15}>
          <span className={styles.ItemCaption}>Name</span>
          {username}</li>
        <li className={styles.tableNoteListItem +' '+ styles.tableNote20}>
          <span className={styles.ItemCaption}>E-mail</span>
          {email}</li>
        <li className={styles.tableNoteListItem +' '+ styles.tableNote50}>
          <span className={styles.ItemCaption}>Task text</span>
          {text}</li>
        <li className={styles.tableNoteListItem +' '+ styles.tableNote15}>
          <span className={styles.ItemCaption}>Status</span>
          {status === 0 &&  <p className={styles.tableNoteStatus}>
            <svg className={styles.tableNoteStatusSvgNo} width="21" height="20" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.6206 48.12H6.37698C5.54337 48.12 4.77309 47.6832 4.35629 46.9741C3.9395 46.2651 3.9395 45.3915 4.35631 44.6825L25.977 8.01582C26.3941 7.30795 27.1637 6.87207 27.9965 6.87207C28.8292 6.87207 29.5988 7.30795 30.016 8.01582L51.6366 44.6825C52.0532 45.3912 52.0535 46.2642 51.6372 46.9731C51.221 47.682 50.4515 48.1191 49.6183 48.12H49.6206ZM25.6666 36.6617V41.245H27.8436H27.9953H28.147H30.3286V36.6617H25.6666ZM25.6666 20.62V32.0783H30.3333V20.62H25.6666Z" fill="#FF7F50"/>
            </svg>
            <span className={styles.tableNoteStatusSpanNo}>
              No done
            </span>
          </p>}
          {status === 1 && <p className={styles.tableNoteStatus}>
            <svg className={styles.tableNoteStatusSvg} width="21" height="20" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.6206 48.12H6.37698C5.54337 48.12 4.77309 47.6832 4.35629 46.9741C3.9395 46.2651 3.9395 45.3915 4.35631 44.6825L25.977 8.01582C26.3941 7.30795 27.1637 6.87207 27.9965 6.87207C28.8292 6.87207 29.5988 7.30795 30.016 8.01582L51.6366 44.6825C52.0532 45.3912 52.0535 46.2642 51.6372 46.9731C51.221 47.682 50.4515 48.1191 49.6183 48.12H49.6206ZM25.6666 36.6617V41.245H27.8436H27.9953H28.147H30.3286V36.6617H25.6666ZM25.6666 20.62V32.0783H30.3333V20.62H25.6666Z" fill="#FF7F50"/>
            </svg>
            <span className={styles.tableNoteStatusSpanNo}>
              No done, was changed
            </span>
          </p>}
          {status === 10 && <p className={styles.tableNoteStatus}>
            <svg className={styles.tableNoteStatusSvg}  width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 32.34L9.65999 24L6.82999 26.83L18 38L42 14L39.17 11.17L18 32.34Z" fill="#98d7af"/>
            </svg>
            <span className={styles.tableNoteStatusSpanDo}>
              Done
            </span>
          </p>}
          {status === 11 &&  <p className={styles.tableNoteStatus}>
            <svg className={styles.tableNoteStatusSvg}  width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 32.34L9.65999 24L6.82999 26.83L18 38L42 14L39.17 11.17L18 32.34Z" fill="#98d7af"/>
            </svg>
            <span className={styles.tableNoteStatusSpanDo}>
              Done, was changed
            </span>
          </p>}
        </li>
      </ul>
      {token &&<button className='btn' onClick={()=>{
        dispatch(noteInitial({status: status, text: text, id: id, username: username, email: email}))
        dispatch(modalUpdateOpen())
      }}>Change</button>}
    </li>
  );
}
