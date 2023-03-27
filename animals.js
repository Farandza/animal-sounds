const animals = document.querySelectorAll('.animals');
let altnKey;
for (let i = 0; i < animals.length; i++) {
    animals[i].addEventListener('click', function () {

        altnKey = this.alt;
        animalSound(altnKey);
        imgAnimation(altnKey);
    }
    )
};

document.addEventListener('keypress', function (event) {
    altnKey = event.key.toLowerCase();
    animalSound(altnKey);
    imgAnimation(altnKey);
}

);

function animalSound(key) {

    switch (key) {
        case "b":
            var audio = new Audio('audio/bull.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "c":
            var audio = new Audio('audio/cat.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "d":
            var audio = new Audio('audio/dog.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "e":
            var audio = new Audio('audio/elephant.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);;
            break;

        case "f":
            var audio = new Audio('audio/frog.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "g":
            var audio = new Audio('audio/goat.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);;
            break;

        case "h":
            var audio = new Audio('audio/horse.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "l":
            var audio = new Audio('audio/lion.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);;
            break;

        case "m":
            var audio = new Audio('audio/monkey.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "p":
            var audio = new Audio('audio/pig.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "s":
            var audio = new Audio('audio/squirrel.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        case "t":
            var audio = new Audio('audio/turkey.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 1000);
            break;

        default: alert('No Match Found');

    }
};


function imgAnimation(currentKey) {

    const activeImg = document.querySelector("." + currentKey);

    activeImg.classList.add("pressed");

    setTimeout(function () {
        activeImg.classList.remove("pressed");
    }, 300);
    console.log(currentKey);
};

