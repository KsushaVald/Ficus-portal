import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { requestTokenAsync } from '../../store/token/action';
import styles from './authform.css';

export function AuthForm() {
  const requestToken = useSelector<RootState, boolean>(state => state.token.loading);
  const requestTokenError = useSelector<RootState, string>(state => state.token.error);
  const dispatch = useDispatch();

  function handleSubmit(event:FormEvent){
    event.preventDefault();
    const form:HTMLFormElement|null = document.querySelector('#AuthForm');
    if (!form) return;
    const formData = new FormData(form);
    console.log(formData.get('username'), formData.get('password'))
    dispatch(requestTokenAsync(formData))
  }

  return (
    <form className={styles.authForm} onSubmit={handleSubmit} id='AuthForm'>
      <label htmlFor="name" className={styles.authLabel}> User name</label>
      <input type="text" className={styles.authInput} name="username" id="name" placeholder='Enter username'/>
      <label htmlFor="passwordInput" className={styles.authLabel}>E-mail</label>
      <input type="password" className={styles.authInput} name="password" id="passwordInput" placeholder='Enter password'/>
      <button className={styles.formBtn+' btn'}>Login</button>
      {requestToken && <p className={styles.formText}>Wait...</p>}
      {!requestToken && requestTokenError &&
        <p className={styles.formText+' '+ styles.errormessege}>{requestTokenError}</p>}
    </form>
  );
}
