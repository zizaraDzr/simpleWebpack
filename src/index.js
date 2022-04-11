import generateJoke from "./generateJoke";
import './style/main.scss'
import picture from './assets/dragon.jpg'

const img = document.getElementById('img')
img.src = picture
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()