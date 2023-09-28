const {createApp} = Vue;

createApp ({
  data(){
    return{
      counter : 0,

      carouselImg : [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp'
      ],

      carousel : [
        {
          title: ['Marvel\'s Spiderman Miles Morale',
          'Ratchet & Clank: Rift Apart',
          'Fortnite','Stray',
          "Marvel's Avengers"
          ],
          text: [
            'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
          ]
        } 
      ]

      
    }
  }
}).mount('#app');






//     VECCHIA STRUTTURA DELL ARRAY



// images : [
//   {
//       image: 'img/01.webp',
//       title: 'Marvel\'s Spiderman Miles Morale',
//       text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//   }, {
//       image: 'img/02.webp',
//       title: 'Ratchet & Clank: Rift Apart',
//       text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//   }, {
//       image: 'img/03.webp',
//       title: 'Fortnite',
//       text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//   }, {
//       image: 'img/04.webp',
//       title: 'Stray',
//       text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//   }, {
//       image: 'img/05.webp',
//       title: "Marvel's Avengers",
//       text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//   }
// ];
//     /ARRAY OBJECTS
























// NEW CAROUSEL WITH OBJECTS AND forEach
// images.forEach((element) =>{
//   itemsCarousel.innerHTML += `
//   <div class = 'block-carousel newItem hide'>
//     <img src="${element.image}">
//     <div class = 'block-description'>
//       <h3>${element.title}</h3>
//       <p>${element.text}</p>
//     </div>
//   </div>`;
//   thumbnails.innerHTML += `<img src="${element.image}"class= "thumbItem inactive">`;
// })

// const newItem = document.getElementsByClassName('newItem');

// const thumbItem = document.getElementsByClassName('thumbItem')


// prendi indice 0 del nuovo array
// newItem[0].classList.remove('hide');
// thumbItem[0].classList.add('active');


// // bottone down
// btnDown.addEventListener('click',function(){

//   addRemove();

//   counter++;
  
//   if (counter === newItem.length) counter = 0;

//   removeAdd();
// })


// // Auto carousel down btn
// btnDown.addEventListener('click',startDown)

//   function startDown(){
//     this.removeEventListener('click',startDown)
//     validCarousel = false;
    
    
//     const clock = setInterval(function() {
//         if(!validCarousel){
  
//         addRemove();
      
//         counter++;
        
//         if (counter === newItem.length) counter = 0;
      
//         removeAdd();

//         btnUp.addEventListener('click',startUp);

//       }else {
//         clearInterval(clock);
//       }   
//       }, 2000);
//   }

// // bottone  su
// btnUp.addEventListener('click',function(){
    
//   addRemove();

//   counter--;

//   if(counter < 0) counter = newItem.length -1;

//   removeAdd();
// })

// // Auto carousel up btn
// btnUp.addEventListener('click',startUp)

//   function startUp(){
//     this.removeEventListener('click',startUp)
//     validCarousel = true;
    
    
//     const clock = setInterval(function() {
//         if(validCarousel){
  
//         addRemove();
      
//         counter--;
        
//         if(counter < 0) counter = newItem.length -1;
      
//         removeAdd();
        
//         btnDown.addEventListener('click',startDown);
//       }else {
//         clearInterval(clock);
        
//       }   
//       }, 2000);
//   }



// // function add/remove
// function addRemove(){
//   newItem[counter].classList.add('hide');
//   thumbItem[counter].classList.remove('active');
// }


// // function remove/add
// function removeAdd(){
//   newItem[counter].classList.remove('hide');
//   thumbItem[counter].classList.add('active');
// }

 


