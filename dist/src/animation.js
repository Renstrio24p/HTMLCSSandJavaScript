export default function Animation(){
    window.addEventListener('load', ()=>{
        let images = [
            'background.jpg',
            'female-character.png',
            'logo.png'
        ];

        let ImageLoad = 0;

        function ImagesLoaded(){
            ImageLoad++;
            {
                ImageLoad === images.length && (startAnimate());
            }
        }

        images.forEach((imageURL)=>{
            let image = new Image();
            image.addEventListener('load',ImagesLoaded);
            image.src = imageURL;
        });

        function startAnimate(){
            let background,
                femaleChar,
                headline1,
                headline2,
                subheadline,
                learnMorebtn,
                logo,
                replayBtn;

            background = document.getElementById('background');
            femaleChar = document.getElementById('female-char');
            headline1 = document.getElementById('headline1')
            headline2 = document.getElementById('headline2')
            subheadline = document.getElementById('subheadline');
            learnMorebtn = document.getElementById('learn-more-btn');
            logo = document.getElementById('logo');
            replayBtn = document.getElementById('replay-btn');

            // Animate TimeOuts

            setTimeout(()=>{
                femaleChar.style.opacity = '1';
                headline1.style.opacity = '1';
                headline1.style.left = '0';
            }, 500)

            setTimeout(()=>{
                femaleChar.style.opacity = '0';
                headline1.style.opacity = '0';
            }, 3000)

            setTimeout(()=>{
                headline2.style.opacity = '1';
                headline2.style.right = '0';
                subheadline.style.opacity = '1';
                learnMorebtn.style.opacity = '1';
            }, 3500)

            setTimeout(()=>{
                logo.style.opacity = '1';
                logo.style.right = '0';
                replayBtn.style.opacity = '1';
            }, 5000)
        }

        let replayBtn = document.getElementById('replay-btn');
        replayBtn.addEventListener('click',()=>{
            window.location.reload();
        })
    })
}