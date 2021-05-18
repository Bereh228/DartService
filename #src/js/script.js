const dropDownMenuItems = document.querySelectorAll('.favor__element-item');

// // for(let item of dropDownMenuItems){
// //     item.addEventListener('click',function(){
// //         item.classList.toggle('favor__element-item_active');
// //     });
// // }


function checkAddClass(item){
     for(let value of item){
         value.classList.remove('favor__element-item_active');
     }

     for(let value of item){
         value.addEventListener('click',function(){
             value.classList.toggle('favor__element-item_active');
         });
     }
 }

 checkAddClass(dropDownMenuItems);

 $('.about__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    vertical: true
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
