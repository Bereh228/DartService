const dropDownMenuItems = document.querySelectorAll('.favor__element-item');

for(let item of dropDownMenuItems){
    item.addEventListener('click',function(){
        item.classList.toggle('favor__element-item_active');
    });
}


