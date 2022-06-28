import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../Modal';
import { AuthForm } from '../Modal/AuthForm';
import { modalLoginClose, modalLoginOpen } from '../store/modal/action';
import { RootState } from '../store/reducer';
import { UserBlock } from './UserBlock';
import styles from './header.css';

export function Header() {
  const isModal = useSelector<RootState, boolean>(state => state.modal.isModalLoginOpen);
  const token = useSelector<RootState, string>(state => state.token.token);
  const dispatch = useDispatch();
  return (
    <header className={styles.headerblock}>
      <div>
        <h1 className={styles.header}>Welcom to Ficus portal</h1>
        <p className={styles.subheader}>good luck</p>
      </div>
      {token ? <UserBlock/>:
                <button className='btn'onClick={()=>{dispatch(modalLoginOpen());}}>Log in</button>}

      {isModal && <Modal header="Authorization" onClose={()=>{
        dispatch(modalLoginClose());
      }}>
         <AuthForm/>
        </Modal>}
    </header>
  );
}
