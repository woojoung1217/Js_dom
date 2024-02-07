


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]






const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');



function handleSlide(e) {
  e.preventDefault()
  const target = e.target.closest('li')
  const a = e.target.closest('a');
  const list = [...navigation.children]
  const index = target.dataset.index;

  console.log(a.href)
  if (!target | !a) return

  visualImage.setAttribute('src', `./assets/part01/${data[index - 1].src}`);
  visualImage.setAttribute('alt', data[index - 1].alt);

  list.forEach((item) => {
    removeClass(item, 'is-active')
  })
  addClass(target, 'is-active')
}


navigation.addEventListener('click', handleSlide)

















