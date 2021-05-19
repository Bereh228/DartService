const dropDownMenuItems = document.querySelectorAll('.favor__element-item');

for(let item of dropDownMenuItems){
    item.addEventListener('click',function(){
        item.classList.toggle('favor__element-item_active');
    });
}


// function checkAddClass(item){
//     for(let value of item){
//         value.classList.remove('favor__element-item_active');
//     }

//     for(let value of item){
//         value.addEventListener('click',function(){
//         value.classList.toggle('favor__element-item_active');
//     });
//   }
// }

//   checkAddClass(dropDownMenuItems);


// let divWrapper = document.querySelector('.favor__element');
// let divElement = document.querySelectorAll('.favor__element-item');

// divWrapper = addEventListener('click', (event)=>{
// let div = event.target;
// div.classList.add('favor__element-item_active');
// for(let item of divElement){
//   console.log(item)
//   if(item.classList.contains('favor__element-item_active') && item!==event.target)
//   item.classList.remove('favor__element-item_active');
// }
// })


 $('.about__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    verticalSwipping: true,
    swipe: true,
    waitForAnimate: false,
    
  });

  $('.team__carousel').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    arrows: false,
    touchThreshold: 100,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


// let selectedTd;

// const myElement = document.querySelector('.favor__element-item');

// myElement.onclick = function(event) {
//     let target = event.target; // где был клик?
  
//     if (target.tagName != 'div') return; // не на div? тогда не интересует
  
//     showBlock(target); // подсветить div
//   };

// function showBlock(td) {
//   if (selectedTd) { // убрать существующую подсветку, если есть
//     selectedTd.classList.remove('favor__element-item_active');
//   }
//   selectedTd = td;
//   selectedTd.classList.add('favor__element-item_active'); // подсветить новый td
// }
