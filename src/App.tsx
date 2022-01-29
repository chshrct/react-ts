import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="apple" />
      </header>
      <nav className='nav'>
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Messages</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png" alt="mountain" />
        </div>
        <div>
          ava+description
          <img src="https://i.pinimg.com/originals/b8/5f/58/b85f58e2e1e38407f50ea4e2cf30f08f.png" alt="dog" />
        </div>
        <div>
          my post
          <div>
            new post
            </div>
            <div>post1</div>
            <div>post2</div>
            <div>post3</div>
        </div>


      </div>
      <footer></footer>
    </div>
  );
}

export default App;
