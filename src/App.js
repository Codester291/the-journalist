import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Icon from '@material-ui/core/Icon'
import FirstC from './Components/FirstC';
import CardC from './Components/CardC';
import ArticleC from './Components/ArticleC';
import CategoriesC from './Components/CategoriesC';
// import MaterialIcon, { colorPalette } from 'material-icons-react';
// import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function App() {
  let loader = <div className="lds-ripple"><div></div><div></div></div>
  return (
    <div className="App">
      <header className="App-header">
        <span className="material-icons">library_books</span>
        <h1 className="mad">The Journalist</h1>

        <FirstC />
        {/* <div className="navigations"></div> */}
      </header>
      <div>
        <CardC />
        <ArticleC />
        <CategoriesC />
      </div>

      <div className="serve">
        <img src="https://cdn.dribbble.com/users/476811/screenshots/2996772/dribblegif.gif"/>
        <h1 className="mad">Write your own story</h1>
        <h1 className="mad">Explore your Imagination</h1>
        <img src="https://cdn.dribbble.com/users/1240308/screenshots/7065106/media/c310c197bf17f66b18fc5f81ccf9abff.gif"/>
        <img src="https://cdn.dribbble.com/users/2336039/screenshots/4712610/worktogether.gif"/>
        <h1 className="mad">Interact with other humans!</h1>
      </div>
      <div className="serve">
        <img src="https://cdn.dribbble.com/users/1119962/screenshots/2802094/joinus2.jpg"/>
        <h1 className="mad">Join us today!</h1>
        <h1 className="mad">We need you!</h1>
        <button class="btn">Get Started</button>
      </div>
    </div>
  );
}

export default App;
