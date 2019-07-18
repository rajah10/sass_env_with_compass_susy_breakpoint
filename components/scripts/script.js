$(function(){
  var topoffset = 44; // height of the navigation
  var wheight = $(window).height(); //get height of the window
  var halfheight = (wheight/3) * 2;
  //$(".halfheight").css('height', halfheight);

  $(window).resize(function(){
    var wheight = $(window).height(); //get height of the window
    var halfheight = (wheight/3) * 2;
    //$('.halfheight').css('height', halfheight);
  }); // on resize

  //SET UP ScrollMagic

  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  }); // controller

  // let pin = new ScrollScene({
  //   triggerElement: '#nav'
  // }).setPin('#nav').addTo(controller);

 

  //scroll active background color
  $(window).scroll(function(){
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');
    
    if(windowpos > $('#header').offset().top){
      $('nav').removeClass('navBg');
    }

    if(windowpos > $('#services').offset().top){
      $('nav li a').removeClass('active');
      $('#nav').addClass('navBg');
      $('a[href$="#services"]').addClass('active');
    } // services

    if(windowpos > $('#works').offset().top){
      $('nav li a').removeClass('active');
      $('#nav').addClass('navBg');
      $('a[href$="#works"]').addClass('active');
    } // services

  }); // end scroll active background


}); // on load