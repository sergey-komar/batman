$(function(){

    let tabsItem = $('.tabs-item'); 
    tabsItem.on('click', function (event){
     event.preventDefault(); 
      let activeContant = $(this).attr('href');
      $('.visible').toggleClass('visible');
      $(activeContant).toggleClass('visible');
    });
});