import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireThree = (state:any)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={store.getState()}
                    addPost={store.addPost.bind(store)}
                    newPostTextEdit={store.newPostTextEdit.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
