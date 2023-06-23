/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var images = ['/src/images/background.png', '/src/images/female.png', '/src/images/logo.png'];\n  var loadedImages = 0;\n  function imageLoaded() {\n    loadedImages++;\n    if (loadedImages === images.length) {\n      startAnimation();\n    }\n  }\n  images.forEach(function (imageUrl) {\n    var image = new Image();\n    image.addEventListener('load', imageLoaded);\n    image.src = imageUrl;\n  });\n  function startAnimation() {\n    var femaleCharacter = document.getElementById('female-char');\n    var headline1 = document.getElementById('headline1');\n    var headline2 = document.getElementById('headline2');\n    var subheadline = document.getElementById('subheadline');\n    var learnMoreBtn = document.getElementById('learn-more-btn');\n    var logo = document.getElementById('logo');\n    var replayBtn = document.getElementById('replay-btn');\n    setTimeout(function () {\n      femaleCharacter.style.opacity = '1';\n      headline1.style.opacity = '1';\n      headline1.style.left = '0';\n    }, 500);\n    setTimeout(function () {\n      femaleCharacter.style.opacity = '0';\n      headline1.style.opacity = '0';\n    }, 3000);\n    setTimeout(function () {\n      headline2.style.opacity = '1';\n      headline2.style.right = '0';\n      subheadline.style.opacity = '1';\n      learnMoreBtn.style.opacity = '1';\n    }, 3500);\n    setTimeout(function () {\n      logo.style.opacity = '1';\n      logo.style.right = '0';\n      replayBtn.style.opacity = '1';\n    }, 5000);\n  }\n  var replayBtn = document.getElementById('replay-btn');\n  replayBtn.addEventListener('click', function () {\n    window.location.reload();\n  });\n});\ndocument.querySelector('#root').innerHTML = \"\\n   <div id=\\\"banner\\\">\\n      <div id=\\\"background\\\">\\n      <img id=\\\"female-char\\\" src=\\\"./src/images/female.png\\\" alt=\\\"Female Character\\\">\\n      <div id=\\\"headline1\\\">\\n         <img src='./src/images/headline1.png' alt=\\\"headline1\\\" />\\n      </div>\\n      <div id=\\\"headline2\\\">\\n         <img src='./src/images/headline2.png' alt=\\\"headline2\\\" />\\n      </div>\\n      <div> \\n         <div id=\\\"subheadline\\\">\\n             <img src='./src/images/subheadline.png' alt=\\\"subheadline\\\" />\\n         </div>\\n         <div id=\\\"learn-more-btn\\\">\\n            <img src='./src/images/learnmore.png' alt=\\\"learnmore\\\" />\\n         </div>\\n      </div>\\n         <img id=\\\"logo\\\" src=\\\"./src/images/logo.png\\\" alt=\\\"Logo\\\">\\n      <div id=\\\"replay-btn\\\">\\n         <img src='./src/images/replay.png' alt=\\\"replay btn\\\"/>\\n      </div>\\n   </div>\\n\";\n\n//# sourceURL=webpack://standalone-javascript/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;