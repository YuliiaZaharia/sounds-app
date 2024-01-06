const nature = ['rain', 'birds', 'waves', 'thunder', 'cat', 'river']
let isPlay = false;
const audio = new Audio();
audio.src = './assets/audio/waves.mp3';
function playAudio() {
    if (!isPlay) {
        audio.play();
        isPlay = true
    }
    else {
        audio.pause();
        isPlay = false
    }
}

const buttonPlay = document.querySelector('.play')

buttonPlay.onclick = function () {
    buttonPlay.classList.toggle('is-active')
    playAudio();
}

const navItems = document.querySelectorAll('.nav-item')
const mainS = document.querySelector('.main')

const rain = document.querySelector(".rain")
rain.onclick = function () { switchSound(rain) }

const birds = document.querySelector(".birds")
birds.onclick = function () { switchSound(birds) }

const waves = document.querySelector(".waves")
waves.onclick = function () { switchSound(waves) }

const thunder = document.querySelector(".thunder")
thunder.onclick = function () { switchSound(thunder) }

const cat = document.querySelector(".cat")
cat.onclick = function () { switchSound(cat) }

const river = document.querySelector(".river")
river.onclick = function () { switchSound(river) }

function switchSound(items) {
    if (!items.classList.contains('is-active')) {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('is-active')
            mainS.classList.remove(nature[i])
        }
        items.classList.add('is-active')
        mainS.classList.toggle(items.dataset.item)
        audio.src = `./assets/audio/${items.dataset.item}.mp3`
        if (!buttonPlay.classList.contains('is-active'))
            buttonPlay.classList.toggle('is-active')
        isPlay = false
        playAudio()
    } else {
        playAudio()
        buttonPlay.classList.toggle('is-active')
    }
}

function preload() {
    for (let j = 0; j < nature.length; j++) {
        const img = new Image();
        img.src = `./assets/${nature[j]}.jpg`;
        const sound = new Audio();
        sound.src = `./assets/audio/${nature[j]}.mp3`;
    }
}

preload()