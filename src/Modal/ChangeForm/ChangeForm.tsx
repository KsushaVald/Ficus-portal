import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeTaskSendAsync } from '../../store/changetask/action';
import { noteStatusChange, noteTextChange } from '../../store/notedata/action';
import { RootState } from '../../store/reducer';
import styles from './changeform.css';


export function ChangeForm() {
  const username = useSelector<RootState, string>(state => state.note.username);
  const email = useSelector<RootState, string>(state => state.note.email);
  const text = useSelector<RootState, string>(state => state.note.text);
  const status = useSelector<RootState, number>(state => state.note.status);
  const id = useSelector<RootState, number>(state => state.note.id);
  const token = useSelector<RootState, string>(state => state.token.token);
  const send = useSelector<RootState, boolean>(state => state.changetask.send);
  const sendSuccess = useSelector<RootState, boolean>(state => state.changetask.succes);
  const error = useSelector<RootState, string[]>(state => state.changetask.error);
  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('text', text);
    formData.append('status', String(status));
    formData.append('token', token);
    dispatch(ChangeTaskSendAsync(formData, String(id)));
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if( status === 0 || status === 10){
      dispatch(noteStatusChange(status+1));
    }
    dispatch(noteTextChange(event.target.value));
  }

  return (
    <div className={styles.changeFormContainer}>
      <span className={styles.changeTaskFormSubtext}>Username</span>
      <p className={styles.changeTaskFormText}>{username}</p>
      <span className={styles.changeTaskFormSubtext}>Email</span>
      <p className={styles.changeTaskFormText}>{email}</p>
      <span className={styles.changeTaskFormSubtext}>Current status</span>
      <button className={status<10 ? styles.btnStatus + ' '+styles.btnStatusNo : styles.btnStatus + ' '+styles.btnStatusDo} onClick={()=>{
        status<10 ?
        dispatch(noteStatusChange(status+10)) : dispatch(noteStatusChange(status-10))
      }}>
        {status === 0 && 'No done'}
        {status === 1 && 'No done, was change'}
        {status === 10 && 'Done'}
        {status === 11 && 'Done, was change'}
      </button>
      <form className={styles.changeTaskForm}  id='changeTaskForm' onSubmit={handleSubmit}>
        <label htmlFor="textAreaUpdate" className={styles.changeTaskFormSubtext}>Task text</label>
        <textarea className={styles.changeTaskArea} name="text" id="textAreaUpdate" defaultValue={text} onChange={handleChange}/>
        <button className={styles.formBtn+' btn'}>Change</button>
      </form>
      {send && <p className={styles.formText}>Sending data...</p>}
      {!send && sendSuccess && <p className={styles.formText}>Data update successfully!</p>}
      {!send && error && error.map((er)=>(
        <p className={styles.formText+' '+ styles.errormessege}>{er}</p>))}
    </div>

  );
}
