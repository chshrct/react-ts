import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let users = [
    {id: 1, name: 'Алеша'},
    {id: 2, name: 'Володя'},
    {id: 3, name: 'Анюта'},
    {id: 4, name: 'Федя'},
    {id: 5, name: 'Вика'},
    {id: 6, name: 'Леся'},
    {id: 7, name: 'Зина'}
]
let messages = [
    {id: 1, message: 'hello there'},
    {id: 2, message: 'How r u doing?'},
    {id: 3, message: 'No comprende'}
]
let posts = [
    {id: 1, message: 'hello', likeCount: 10},
    {id: 2, message: 'hiho', likeCount: 5}
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                dialogs={
                    {users, messages}
            }
                posts={posts}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
