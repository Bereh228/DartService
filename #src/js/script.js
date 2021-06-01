const dropDownMenuItems = document.querySelectorAll('.favor__element-item');
const headerExit = document.getElementById('header__exit');
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const hamburgerItems = document.querySelectorAll('.hamburger__item');

function bodyOverflow(item){
  if(item.classList.contains('header_active')){
    document.body.style.overflow = 'hidden';
  }
  else{
    document.body.style.overflow = 'visible';
  }
}

function activeNoHamburger(item){
  item.addEventListener('click',function(){
    header.classList.toggle('header_active');
    bodyOverflow(header);  
  }); 
}

function removeClassActiveHamburger(item){
  item.forEach(element => {
    element.classList.remove('hamburger__item_active');
  });
}

function checkHamburger(){
  let windowY = window.pageYOffset;

  if(windowY > 350 && windowY < 5307){
    hamburgerItems.forEach(element => {
      element.classList.add('hamburger__item_active');
      hamburger.classList.add('hamburger_bMain');
    });
  }else if(windowY > 5307 && windowY > 350){
    removeClassActiveHamburger(hamburgerItems);
    hamburger.classList.remove('hamburger_bMain');
  }
  else{
    removeClassActiveHamburger(hamburgerItems);
    hamburger.classList.remove('hamburger_bMain');
  }
}


activeNoHamburger(headerExit);
activeNoHamburger(hamburger);


document.addEventListener('DOMContentLoaded',checkHamburger);
window.addEventListener('scroll',checkHamburger);

for(let item of dropDownMenuItems){
    item.addEventListener('click',function(){
        item.classList.toggle('favor__element-item_active');
    });
}


 $('.about__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    touchThreshold: 20,
    verticalSwipping: true,
    swipe: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 992,
        settings:{
          vertical: false,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
    
  });

  $('.promo__movie-button').click(function(){
      $(this).fadeOut();
      $('.promo__movie-descr').fadeOut();
      $('.promo__youtube').fadeIn();
  })

  $('.team__carousel').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    arrows: false,
    touchThreshold: 20,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 1,
          centerMode: false,
          centerPaddint: '40px',
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


function fadeInLogin(){
    $('#modal__login').fadeIn('slow');
}

function fadeInReg(){
    $('#modal__reg').fadeIn('slow');
}

  $('.modal__login-header__reg').click(function(){
    $('#modal__login').fadeOut('fast');
    setTimeout(fadeInReg,700);
  });

$('.modal__reg-header__log').click(function(){
    $('#modal__reg').fadeOut('fast');
    setTimeout(fadeInLogin, 700);
});

$('#headerSiglog').click(function(){
    $('#modal, #modal__login').fadeIn('slow');
});


$(window).scroll(function(){
  if($(this).scrollTop()> 1300){
    $('.arrowUp').fadeIn();
  }else{
    $('.arrowUp').fadeOut();
  }
});

$(".arrowUp").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});