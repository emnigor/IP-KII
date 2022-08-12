const burger = document.querySelector('.burger')
const wraper = document.querySelector('.wraper')
const logo = document.querySelector('.logo_title')
const logoSub = document.querySelector('.logo_subtitle')
const opas = document.querySelector('#opas')
const line = document.querySelectorAll('.line')
const mobileMenu = document.querySelector('.mobile-menu')
const main = document.querySelector('.main')
const header = document.querySelector('.header')
const leftBut = document.querySelector('.left_but')
const rightBut = document.querySelector('.right_but')
const carousel = document.querySelector('.carousel')
const rightBut320 = document.querySelector('.right_but320')
const leftBut320 = document.querySelector('.left_but320')


const btnClose = document.querySelector('.close')
const popapWraper = document.querySelector('.popap_wraper')
const menuLink = document.querySelectorAll('.menu_link')

function toggleMenu() {
  header.classList.toggle('open-header-menu')
    mobileMenu.classList.toggle('open-mobile-menu')
    burger.classList.toggle('open');
    opas.classList.toggle('opasity');
    logo.classList.toggle('none')
    logoSub.classList.toggle('none')
  }
  burger.addEventListener('click', toggleMenu);
  

  function deleteOpas() {
    opas.classList.remove('opasity');
    header.classList.remove('open-header-menu')
    mobileMenu.classList.remove('open-mobile-menu')
    burger.classList.remove('open');
    
    logo.classList.remove('none')
    logoSub.classList.remove('none')
  }
  opas.addEventListener('click', deleteOpas);

  menuLink.forEach((e)=> {e.addEventListener('click', deleteOpas)})

  import arrDog from './inform.js';

let nameCard1 = document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.active_slide > div.card_pets.num1 > span").innerText
//let nameCard2=document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.active_slide > div.card_pets.num2 > span").innerText
//let nameCard3=document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.active_slide > div.card_pets.num3 > span").innerText

// let arrName=[nameCard1, nameCard2, nameCard3]
// let arrIndActive=[]
// let arrIndLeft=[]
// let arrIndRight=[]

// function createIndActive () {  // формирования индексов активных карт
//   arrName.forEach((ev)=>{           
//     arrDog.forEach((ev2,index)=>{
//       if(ev2.name===ev) {
//         arrIndActive.push(index)
//       }
//     })
//   })
// } 
// createIndActive ()


// function generateLeft() {  // генерация последовательности карт левой стороны
//   arrIndLeft.splice(0,3)
//   while(true){
//     let r = Math.floor(Math.random()*8);
//     if (r!==arrIndActive[0] && r!==arrIndActive[1] && r!==arrIndActive[2]) {    
//       arrIndLeft.push(r);
//         break;
//     }}
//     while(true){
//       let r = Math.floor(Math.random()*8);
//       if (r!==arrIndActive[0] && r!==arrIndActive[1] && r!==arrIndActive[2] && r!==arrIndLeft[0]) {    
//         arrIndLeft.push(r);
//           break;
//       }}
//       while(true){
//         let r = Math.floor(Math.random()*8);
//         if (r!==arrIndActive[0] && r!==arrIndActive[1] && r!==arrIndActive[2] && r!==arrIndLeft[0] && r!==arrIndLeft[1]) {    
//           arrIndLeft.push(r);
//             break;
//         }}
//     }

    // function generateRight() {  // генерация последовательности карт правой стороны
    //   arrIndRight.splice(0,3)
    //   while(true){
    //     let r = Math.floor(Math.random()*8);
    //     if (r!==arrIndActive[0] && r!==arrIndActive[1] && r!==arrIndActive[2]) {    
    //       arrIndRight.push(r);
    //         break;
    //     }}
    //     while(true){
    //       let r = Math.floor(Math.random()*8);
    //       if (r!==arrIndActive[0] && r!==arrIndActive[1] && r!==arrIndActive[2] && r!==arrIndRight[0]) {    
    //         arrIndRight.push(r);
    //           break;
    //       }}
    //       while(true){
    //         let r = Math.floor(Math.random()*8);
    //         if (r!==arrIndActive[0] && r!==arrIndActive[1] && r!==arrIndActive[2] && r!==arrIndRight[0] && r!==arrIndRight[1]) {    
    //           arrIndRight.push(r);
    //             break;
    //         }}
    //     }

    let count= 0
    
// создание рандомных карт левой стороны

 function createRandomLeftCard () {
  document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.left_slide > div.card_pets.num1 > div > img").src=arrDog[count].img
  document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.left_slide > div.card_pets.num1 > span").innerText=arrDog[count].name
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.left_slide > div.card_pets.num2 > div > img").src=arrDog[arrIndLeft[1]].img
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.left_slide > div.card_pets.num2 > span").innerText=arrDog[arrIndLeft[1]].name
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.left_slide > div.card_pets.num3 > div > img").src=arrDog[arrIndLeft[2]].img
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.left_slide > div.card_pets.num3 > span").innerText=arrDog[arrIndLeft[2]].name
 }

// создание рандомных карт правой стороны

 function createRandomRightCard () {
   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.right_slide > div.card_pets.num1 > div > img").src=arrDog[count].img
   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.right_slide > div.card_pets.num1 > span").innerText=arrDog[count].name
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.right_slide > div.card_pets.num2 > div > img").src=arrDog[arrIndRight[1]].img
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.right_slide > div.card_pets.num2 > span").innerText=arrDog[arrIndRight[1]].name
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.right_slide > div.card_pets.num3 > div > img").src=arrDog[arrIndRight[2]].img
//   document.querySelector("#Friends > div > div.pets_slider > div.wraper_slider > div > div.pets_slider_nonebut.right_slide > div.card_pets.num3 > span").innerText=arrDog[arrIndRight[2]].name
 }


function moveRight () {   // слайд вправо
  // generateRight()
  // console.log(arrIndRight)
  if (count<arrDog.length-1) {
    count = count + 1
    console.log(count)
    createRandomRightCard ()
    carousel.classList.add('transition-right')
    rightBut.removeEventListener('click', moveRight);
    rightBut320.removeEventListener('click', moveRight);
  }
 
  // arrIndActive.splice(0,3,...arrIndRight)
}
rightBut.addEventListener('click', moveRight);
rightBut320.addEventListener('click', moveRight);

function moveLeft () {   // слайд влево
  // generateLeft()
  // console.log(arrIndLeft)
  if (count>0) {
    count = count - 1
    console.log(count)
  createRandomLeftCard ()
  
  carousel.classList.add('transition-left')
  leftBut.removeEventListener('click', moveLeft);
  leftBut320.removeEventListener('click', moveLeft);
  }
  
  // arrIndActive.splice(0,3,...arrIndLeft)
  // console.log(cardPets)
}
leftBut.addEventListener('click', moveLeft);
leftBut320.addEventListener('click', moveLeft);



  carousel.addEventListener('animationend', (animationEvent)=>{
    if (animationEvent.animationName ==='move-left') {
      const leftEtems = document.querySelector('.left_slide').innerHTML
      // const leftEtemsChild = document.querySelector('.left_slide')
      // console.log(leftEtems)
      // console.log(leftEtemsChild)
      // console.log(document.querySelector('.active_slide').innerHTML)

      document.querySelector('.active_slide').innerHTML = leftEtems
      // document.querySelector('.active_slide').innerHTML = ''
      // document.querySelector('.active_slide').appendChild(leftEtemsChild)
    } else if (animationEvent.animationName ==='move-right') {
      const rightEtems = document.querySelector('.right_slide').innerHTML
      document.querySelector('.active_slide').innerHTML = rightEtems
    }
    carousel.classList.remove('transition-left')
    carousel.classList.remove('transition-right')
    leftBut.addEventListener('click', moveLeft);
    rightBut.addEventListener('click', moveRight);
    leftBut320.addEventListener('click', moveLeft);
    rightBut320.addEventListener('click', moveRight);
  })

  let cardPets = document.querySelectorAll('.card_pets')

  function createCardcontent (e) {                                   //функция заполнения карточек
    let a =''
    if (e.target.classList.contains('card_pets')) {
      a = e.target.querySelector("div.card_pets > span").innerText 
    } else {
     a= e.target.closest('.card_pets').querySelector('span').innerText
    }
    console.log(a)
    arrDog.forEach(function(el){
      if(el.name === a) {
        document.querySelector("#Friends > div.popap_wraper > div.popap > img").src=el.img
        document.querySelector("#Friends > div.popap_wraper > div.popap > div > span.popap_name").innerText=el.name
        document.querySelector("#Friends > div.popap_wraper > div.popap > div > span.popap_breed").innerText=el.breed
        document.querySelector("#Friends > div.popap_wraper > div.popap > div > span.popap_story").innerText=el.description
        document.querySelector("#Friends > div.popap_wraper > div.popap > div > div > span.Age > span").innerText=el.age
        document.querySelector("#Friends > div.popap_wraper > div.popap > div > div > span.Inoculations > span").innerText=el.inoculations
        document.querySelector("#Friends > div.popap_wraper > div.popap > div > div > span.Diseases > span").innerText=el.diseases
        document.querySelector("#Friends > div.popap_wraper > div.popap > div > div > span.Parasites > span").innerText=el.parasites
      }
    })
    document.querySelector('body').style.overflowY='hidden'
    opas.classList.add('opasity')
    popapWraper.style.display='block'
  }

 // cardPets.forEach((el)=>{el.addEventListener('click', createCardcontent)})

  opas.addEventListener('click', ()=>{
    popapWraper.style.display='none'
    document.querySelector('body').style.overflowY='auto'
    
  });

  opas.addEventListener('mouseover', ()=>{
    btnClose.style.background='#FDDCC4'
  });

  opas.addEventListener('mouseout', ()=>{
    btnClose.style.background=''
  });

  btnClose.addEventListener('click', ()=>{
    popapWraper.style.display='none'
    opas.classList.remove('opasity')
    document.querySelector('body').style.overflowY='auto'
  });


//Открыть большой формат сертификата
  const lists=document.querySelector('.lists')
    lists.addEventListener('click', (e)=>{
    if (e.target.nodeName==='IMG') {
      let div = document.createElement('div');
      let img = document.createElement('img');
      img.className = 'sertif';
      console.log(e.target.alt)
      img.id = e.target.alt;
  div.classList.add('opasitySertif')
  img.src=e.target.src
  wraper.append(div);
  div.append(img);
    }
  })

  //закрыть большой формат сертификата
 
  document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('opasitySertif') || e.target.closest('.opasitySertif')) {
      const div=document.querySelector('.opasitySertif')
      console.log('22')
      div.remove()
    }
  })
 