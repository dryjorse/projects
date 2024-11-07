const music = new Audio('musics/shake.mp3')
const load = document.querySelector('.load')
const loader = document.querySelector('.load__player')
const totalTime = document.querySelector('.total__time')
const currTime = document.querySelector('.current__time')
const texts = document.querySelectorAll('.text span')
console.log(texts);

const getTime = (endTime) => {
    const minutes = Math.floor(endTime / 60)
    const seconds = Math.floor(endTime % 60) < 10 
        ? '0' + Math.floor(endTime % 60)
        : Math.floor(endTime % 60)

    return {minutes, seconds}
}

music.onloadedmetadata = () => {
    const {minutes, seconds} = getTime(music.duration)

    totalTime.innerHTML = `${minutes}:${seconds}`
}

const playMusic = () => {
    music.play()
}

const stopMusic = () => {
    music.pause()
}

const paintText = (i) => {
    texts.forEach(text => text.style.fontWeight = '400')
    texts[i].style.fontWeight = '700'
}

const musicInfo = () => {
    const {currentTime, duration} = music
    const {minutes, seconds} = getTime(currentTime)
    const proccessProc = (currentTime / duration) * 100

    currTime.innerHTML = `${minutes}:${seconds}`
    loader.style.width = `${proccessProc}%`

    paintText(Math.floor(texts.length * proccessProc / 100))
}

const moveMusic = (e) => {
    const duration = music.duration
    const clickX = e.offsetX
    const width = e.target.classList.contains('load') ? e.target.clientWidth : e.target.parentNode.clientWidth

    music.currentTime = (clickX / width) * duration
}

load.addEventListener('click', moveMusic)
music.addEventListener('timeupdate', musicInfo)
document.querySelector('.start').addEventListener('click', playMusic)
document.querySelector('.stop').addEventListener('click', stopMusic)