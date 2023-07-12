
document.addEventListener("DOMContentLoaded", function () {
    DoAnimation();
  });

    const DOM = document.getElementById('app');

    DOM.innerHTML = (
        `
        <div id='banner'>
          <img id="female-char" src="../images/female.png" alt="female image" />
          <img id="headline1" src="../images/headline1.png" alt="headline image" />
          <img id="headline2" src="../images/headline2.png" alt="headline2 image" />
          <img id="subheadline" src="../images/subheadline.png" alt="subheadline image" />
          <img id="learn-more-btn" src="../images/learnmore.png" alt="learn more button image" />
          <img id="logo" src="../images/logo.png" alt="logo image" />
          <img id="replay-btn" src="../images/replay.png" alt="replay button image" />
        </div>
        `
        )

        function DoAnimation(){
            const female_img = document.getElementById('female-char'),
            first_headline = document.getElementById('headline1'),
            second_headline = document.getElementById('headline2'),
            sub_headline = document.getElementById('subheadline'),
            learnmore = document.getElementById('learn-more-btn'),
            logo_img = document.getElementById('logo'),
            replay = document.getElementById('replay-btn');
            
            setTimeout(function () {
                fadeIn(female_img, 1000);
              }, 1000);
            
              setTimeout(function () {
                fadeIn(first_headline, 100);
                slideIn(first_headline, 5, 0, 300);
              }, 2000);
            
              setTimeout(function () {
                fadeOut(female_img, 1000);
              }, 3000);
            
              setTimeout(function () {
                fadeIn(second_headline, 100);
                slideIn(second_headline, -45, 0, 500);
                slideOut(first_headline, 20, -10, 300);
              }, 4000);
            
              setTimeout(function () {
                fadeOut(first_headline, 100);
                fadeIn(sub_headline, 500);
              }, 4500);
            
              setTimeout(function () {
                fadeIn(learnmore, 500);
              }, 5000);
            
              setTimeout(function () {
                fadeIn(logo_img, 100);
                slideIn(logo_img, 150, 0, 300);
              }, 6000);
            
              setTimeout(function () {
                fadeIn(replay, 500);
                replay.addEventListener("click", function () {
                  resetBanner();
                  DoAnimation();
                });
              }, 6500);
            }
            
            function resetBanner() {
              const elements = document.querySelectorAll(
                `#female-char,
                 #headline1,
                 #headline2, 
                 #subheadline, 
                 #learn-more-btn, 
                 #logo, 
                 #replay-btn`
              );
              for (let i = 0; i < elements.length; i++) {
                elements[i].style.transition = "none";
                elements[i].style.opacity = "0";
                elements[i].style.transform = "";
              }
            }
            
            function fadeIn(element, duration) {
              element.style.transition = `opacity ${duration}ms`;
              element.style.opacity = "1";
            }
            
            function fadeOut(element, duration) {
              element.style.transition = `opacity ${duration}ms`;
              element.style.opacity = "0";
            }
            
            function slideIn(element, offsetX, offsetY, duration) {
              element.style.transition = `transform ${duration}ms`;
              element.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
            }
            
            function slideOut(element, offsetX, offsetY, duration) {
              element.style.transition = `transform ${duration}ms`;
              element.style.transform = `translate(${offsetX}%, ${offsetY}%) scale(0.5)`;
            
              setTimeout(() => {
                element.style.transform = `translate(${offsetX}%, ${offsetY}%) scale(0.01)`;
              }, 0);
        }

    

    




    





