import './assets/css/index.css';
import styles from './assets/css/modules/app.module.css'
import Animation from './animation';

Animation();

document.querySelector('#root').innerHTML = `
   <div id="banner" class=${styles.root}>
      <div id="background">
      <img id="female-char" src="./src/images/female.png" alt="Female Character">
      <div id="headline1>
         <img src='./src/images/headline1.png' alt="headline1" />
      </div>
      <div id="headline2">
         <img src='./src/images/headline2.png' alt="headline2" />
      </div>
      <div id="subheadline">
         <img src='./src/images/subheadline.png' alt="subheadline" />
      </div>
      <div id="learn-more-btn">
         <img src='./src/images/learnmore.png' alt="learnmore" />
      </div>
         <img id="logo" src="./src/images/logo.png" alt="Logo">
      <div id="replay-btn">
         <img src='./src/images/replay.png' alt="replay btn"/>
      </div>
   </div>
`