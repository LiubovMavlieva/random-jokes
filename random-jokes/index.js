const changeJokeBtn = document.querySelector('.content__change-joke');
const url = 'https://api.icndb.com/jokes';
const textOfJoke = document.querySelector('.content__text');
const rus = document.querySelector('.ru')
const en = document.querySelector('.en');

rus.addEventListener('click' , () => {
  rus.classList.add('content__lang_active');
  en.classList.remove('content__lang_active')
})

en.addEventListener('click' , () => {
  en.classList.add('content__lang_active');
  rus.classList.remove('content__lang_active')
})

function showData (data) {
  let randomNumber = Math.floor(Math.random() * 574);
  if(rus.classList.contains('content__lang_active')){
    let randomNumberRu = Math.floor(Math.random() * 16);
    textOfJoke.textContent = `${rusJokes[randomNumberRu]}`;
  } else {
    textOfJoke.textContent = `${data.value[randomNumber].joke}`;
  }
}

const rusJokes = {
 0 : "Когда вы говорите: «Никто не идеален», Чак Норрис считает это личным оскорблением."
,
 1 : "Чак Норрис может заставить воду течь под лежачий камень."
 ,

 2 : "Чак Норрис может дышать даже вакуумом."
 ,

 3 : "Чак Норрис никогда не спит. Он выжидает."
 ,

 4 : "Чак Норрис может захлопнуть вращающуюся дверь."
 ,

 5 : "Чак Норрис может выжать апельсиновый сок из лимона."
 ,

 6 : "Чак Норрис может убить два камня одной птицей."
 ,

 7 : "Чак Норрис может слепить снеговика из дождя."
 ,

 8 : "Чак Норрис может ударить циклопа между глаз."
 ,

 9 : "Чак Норрис может удалить корзину."
 ,

 10 : "Однажды Чак Норрис переходил дорогу в неположенном месте и сбил автомобиль…"
 ,

 11 : "Чак Норрис может разлочить iPhone, не вынимая его из коробки."
 ,

 12 : "Чак Норрис может заставить плакать лук."
 ,

 13 : "Чак Норрис — единственный артист в мире, кто отказался выступать на корпоративе «Газпрома»."
,
 14 : "Когда Чак Норрис переходит дорогу, светофор автоматически включает машинам красный свет."
,

 15 : "Если у вас и у Чака Норриса одинаковое количество денег, то у Чака все равно больше."
,
 16 : "Чак Норрис выиграет у вас в крестики-нолики за один ход."
} 

function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showData(data)
    });
}
getData();


const words = {
  0 : 'Amazing' ,
  1 : 'Wow',
  2 : 'Great' ,
  3 : 'omg' ,
  4 : 'Good one' ,
  5 : 'Love it' , 
  6 : 'IMAO',
  7 : 'Haha' ,
  8 : 'LOL' ,
  9 : 'Hoho' ,
  10 : 'Funny' ,
  11 : 'Woohoo' ,
  12 : 'Ohhh',
  13 : 'Crazy' ,
  14 : 'Hahah' ,
  15 : 'So good' ,
  16 : 'The best' , 
  17 : 'Yaay' ,
  18 : 'Hihi' ,
  19 : 'Cooool' ,
  20 : 'Wooow' ,
}

const allWords = document.querySelectorAll('.content__text-decor')

const firstWord = document.querySelector('.content__text-decor_type_first');
const secondWord = document.querySelector('.content__text-decor_type_second');
const thirdWord = document.querySelector('.content__text-decor_type_third');
const fourthWord = document.querySelector('.content__text-decor_type_fourth');
const fifthWord = document.querySelector('.content__text-decor_type_fifth');
const sixthWord = document.querySelector('.content__text-decor_type_sixth');

function changeWords () {
  allWords.forEach (word => {
    let randomNumber = Math.floor(Math.random() * 19);
      word.textContent = `${words[randomNumber]}`
})
  
}

changeJokeBtn.addEventListener('click' , () => {
  getData()
  changeWords()
})
