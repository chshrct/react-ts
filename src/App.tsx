import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App(props: any) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route
                        path={'/profile/*'}
                        element={<Profile profile={props.state.profilePage.posts}/>}/>

                    <Route
                        path={'/dialogs/*'}
                        element={<Dialogs
                            users={props.state.dialogsPage.users}
                            messages={props.state.dialogsPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
