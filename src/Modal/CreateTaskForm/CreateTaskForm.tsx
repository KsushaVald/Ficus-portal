import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewTaskSendAsync } from '../../store/newtask/action';
import { RootState } from '../../store/reducer';
import styles from './createtaskform.css';

export function CreateTaskForm() {
  const send = useSelector<RootState, boolean>(state => state.newtask.send);
  const error = useSelector<RootState, string[]>(state => state.newtask.error);
  const sendSuccess = useSelector<RootState, boolean>(state => state.newtask.success);
  const dispatch = useDispatch();

  function handleSubmit(event:FormEvent){
    event.preventDefault();
    const form:HTMLFormElement|null = document.querySelector('#createTaskForm');
    if (!form) return;
    const formData = new FormData(form);
    dispatch(NewTaskSendAsync(formData, form));
  }

  return (
    <form className={styles.createTaskForm} onSubmit={handleSubmit} id='createTaskForm'>
      <label htmlFor="usernameInput" className={styles.createTaskLabel}> User name</label>
      <input type="text" className={styles.createTaskInput} name="username" id="usernameInput" placeholder='Enter username'/>
      <label htmlFor="emailInput" className={styles.createTaskLabel}>E-mail</label>
      <input type="text" className={styles.createTaskInput} name="email" id="emailInput" placeholder='Enter email'/>
      <label htmlFor="textArea" className={styles.createTaskLabel}>Task text</label>
      <textarea className={styles.createTaskInput+ ' '+styles.createTaskArea} name="text" id="textArea" placeholder='Enter text task'/>
      <button className={styles.formBtn+' btn'}>Create</button>
      {send && <p className={styles.formText}>Sending data...</p>}
      {!send && sendSuccess && <p className={styles.formText}>Data added successfully!</p> }
      {!send && error && error.map((er)=>(
        <p className={styles.formText+' '+ styles.errormessege}>{er}</p>
      ))}
    </form>
  );
}
