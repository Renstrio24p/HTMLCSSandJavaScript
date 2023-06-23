
window.addEventListener('load', function() {
   var images = [
     '/src/images/background.png',
     '/src/images/female.png',
     '/src/images/logo.png'
   ];
 
   var loadedImages = 0;
 
   function imageLoaded() {
     loadedImages++;
     if (loadedImages === images.length) {
       startAnimation();
     }
   }
 
   images.forEach(function(imageUrl) {
     var image = new Image();
     image.addEventListener('load', imageLoaded);
     image.src = imageUrl;
   })
 
   function startAnimation() {
     var femaleCharacter = document.getElementById('female-char');
     var headline1 = document.getElementById('headline1');
     var headline2 = document.getElementById('headline2');
     var subheadline = document.getElementById('subheadline');
     var learnMoreBtn = document.getElementById('learn-more-btn');
     var logo = document.getElementById('logo');
     var replayBtn = document.getElementById('replay-btn');
 
     setTimeout(function() {
       femaleCharacter.style.opacity = '1';
       headline1.style.opacity = '1';
       headline1.style.left = '0';
     }, 500)
 
     setTimeout(function() {
       femaleCharacter.style.opacity = '0';
       headline1.style.opacity = '0';
     }, 3000)
 
     setTimeout(function() {
       headline2.style.opacity = '1';
       headline2.style.right = '0';
       subheadline.style.opacity = '1';
       learnMoreBtn.style.opacity = '1';
     }, 3500)
 
     setTimeout(function() {
       logo.style.opacity = '1';
       logo.style.right = '0';
       replayBtn.style.opacity = '1';
     }, 5000)
   }
 
   var replayBtn = document.getElementById('replay-btn');
   replayBtn.addEventListener('click', function() {
     window.location.reload();
   })
 })
 
document.querySelector('#root').innerHTML = `
   <div id="banner">
      <div id="background">
      <img id="female-char" src="./src/images/female.png" alt="Female Character">
      <div id="headline1">
         <img src='./src/images/headline1.png' alt="headline1" />
      </div>
      <div id="headline2">
         <img src='./src/images/headline2.png' alt="headline2" />
      </div>
      <div> 
         <div id="subheadline">
             <img src='./src/images/subheadline.png' alt="subheadline" />
         </div>
         <div id="learn-more-btn">
            <img src='./src/images/learnmore.png' alt="learnmore" />
         </div>
      </div>
         <img id="logo" src="./src/images/logo.png" alt="Logo">
      <div id="replay-btn">
         <img src='./src/images/replay.png' alt="replay btn"/>
      </div>
   </div>
`