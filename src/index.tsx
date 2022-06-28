import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import { Header } from './Header';
import { Main } from './Main';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./main.global.css";
import { Table } from './Main/Table';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {RootState, AllAction, rootReducer} from "./store/reducer";
import { useEffect } from 'react';
import { postRequestAsync } from './store/post/action';
import { tokenFromLocalstore } from './store/token/action';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk as ThunkMiddleware<RootState, AllAction>),
))

export function Ficus() {
  store.dispatch(tokenFromLocalstore());
  useEffect(()=>{
    store.dispatch(postRequestAsync())
  }, [])
  return (
    <Provider store={store}>
      <div className='container'>
        <Header/>
        <Main>
          <Table/>
        </Main>
      </div>
    </Provider>
  )
}

window.addEventListener('load', ()=> {
  ReactDOM.render(<Ficus/>, document.getElementById('react_root'));
})

