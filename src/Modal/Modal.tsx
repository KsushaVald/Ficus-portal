import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync } from '../store/post/action';
import { RootState } from '../store/reducer';
import styles from './modal.css';

interface IModalProps {
  header: string;
  children?: React.ReactNode;
  onClose?: ()=>void;
}

export function Modal(props:IModalProps) {
  console.log(props.header)
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() =>{
    function handleClick(event:MouseEvent){
      console.log(event.target)
      if (event.target instanceof Node && (!ref.current?.contains(event.target))){
        console.log(event.target, !ref.current?.contains(event.target))
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null
  return ReactDOM.createPortal((
  <div className={styles.modaleScene}>
    <div className={styles.modalwindow} ref={ref}>
      <button className={styles.modalBtnClose} onClick={props.onClose}>
        <svg width="35" height="35" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.0418 11.4847L31.5156 8.9585L21.5002 18.9739L11.4847 8.9585L8.9585 11.4847L18.9739 21.5002L8.9585 31.5156L11.4847 34.0418L21.5002 24.0264L31.5156 34.0418L34.0418 31.5156L24.0264 21.5002L34.0418 11.4847Z" fill="#98d7af" fill-opacity="0.87"/>
        </svg>
      </button>
      <h2 className={styles.modalHeader}>{props.header}</h2>
        {props.children}
    </div>
  </div>
  ), node);
}
