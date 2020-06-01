window.addEventListener('DOMContentLoaded',function(){

    
    
//모바일 환경 dt클릭시 dd 슬라이드 
    function abTxt(){ 
        $('.aboutTxt dl dt').on('click',function(){
            if(!$('body').hasClass('control')){
                $('.aboutTxt dl dd').slideToggle();
           
            }
           
           
        })
    }

  //버거메뉴
    function bugger(){
        $('.bugger').on('click',function(){
            $(this).toggleClass('active')
            $(this).toggleClass('Hover')
            if($('.bugger').hasClass('active')){
                $('nav div').eq(0).slideDown();
             
            }else{
                $('nav div').eq(0).slideUp();
            }
        });
    }
    bugger();
  

    // 인트로 스크롤 락
    function lock(){
        $('.intro').on('scroll touchmove mousewheel', function(event) {
            if($('body').hasClass('control')){
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
          });
         
    }
   
    lock();
    
    //클릭시 스크롤시 해당 offset으로 이동 함수
    function movescroll(ele,time){
       
        var move = $(ele).offset().top;
        if(ele == '.port'){
                move +=80
        }
 
        $('html').stop().animate({
            scrollTop:move
        },time);
    
    }
 

    //인트로 버튼 클릭시 바탕채우기 활성화/스크롤 이동
    function introbtn(i){
        $('.btn').on('click',function(){

            $('.effectDiv').show(0);
            $('.effectDiv div').addClass('active');
           setTimeout(function(){
         movescroll('.container',0);
         $('.effectDiv div').eq(0).css({
             left:'-100%'
         });
         $('.effectDiv div').eq(1).css({
            right:'-100%'
        });
        setTimeout(function(){
            $('.effectDiv').hide();
        },1500);
           },2000);
          
        });
    };
    introbtn();
 

    //네비버튼 클릭시 해당 텍스트 감지하여 스크롤 이동
    function navbtn(){
        $('nav li a').on('click',function(e){
            e.preventDefault();
            if($(this).text() == 'Home'){
                movescroll('.intro',500);
            }else if($(this).text() =='About'){
                movescroll('.about',500);
                portReverse2();
            }else if($(this).text()=='Portfolio'){
                $('.port >span').click();
            }else if($(this).text()=='Ability'){
                movescroll('.ability',500);
            }else{
                movescroll('.contact',500);

            }
           
        
           
            // $('nav li').eq(0).find('a').on('click',movescroll('.intro',500));
            // $('nav li').eq(1).find('a').on('click',movescroll('.about',500));
          
        })
        
    }








    //윈도우 스크롤 감지 이벤트 모음
    function navscroll(){
        var sTop;
        $(window).on('scroll',function(){
            sTop = $(this).scrollTop();
            var homeTop = $('.intro').offset().top;
            var conTop = $('.container').offset().top;
            var portTop = $('.port').offset().top;
            var abilityTop = $('.ability').offset().top;
            var last = $('.contact').offset().top;
           
            
            
          
            
        $('.scrollEvent').each(function(i){
            
            var con = $('.scrollEvent').eq(i).offset().top;
            if(sTop >con-500){
                $('nav li').removeClass('active');
                $('nav li').eq(i).addClass('active');
             
            }else{
              
            }
          
        
        });










            if(sTop < conTop){
                $('nav').css({
                    position:'absolute'
                })
            }else{
                $('nav').css({
                    position:'fixed'
                })
                $('.port >span').addClass('active');
                $('.port').removeClass('active');
                $('.port').css({width:'100%'});
                $('.port div ul').eq(1).addClass('active');
            }

            if(sTop > last-600){
                $('.tri p').addClass('active');
            }else{
                $('.tri p').removeClass('active');
            }

            if(sTop > portTop-200){
              
            }else{
                portReverse2()
            }

        });
    }
    navscroll();



    //원에 마우스 엔터시 발생 이벤트
    function floor(){
        var floorBln = true;

        $('.floor').on('mouseenter click',function(){
            $(this).addClass('active'); // 원에 에니메이션 줌
           
            setTimeout(function(){ //원 애니가 2초 임으로 2초 뒤에 해당 실행
                $('.aboutTxt dl').slideDown(1500);
                setTimeout(function(){
                    $('nav').slideDown();
                    
                    $('.aboutTxt dl').css({
                        transition:'2s'
                    });

                    $('.about').on('wheel',function(e){
                        var delta = e.originalEvent.wheelDelta;
                        if($('body').hasClass('control')){
                            e.preventDefault();
                            e.stopPropagation();
                        }
                      
                    
                        if(floorBln) {
                            floorBln = !floorBln
                            
                            if(delta <0){
                                
                                if($('.aboutTxt dl').hasClass('active')){
                                    $('.port >span').click();
                                }

                                $('.aboutTxt dl').addClass('active');
                                $('.aboutTxt dl').removeClass('active2');

                            }else{
                               
                                $('.aboutTxt dl').removeClass('active');
                                $('.aboutTxt dl').addClass('active2');
                    
                            }//엘스문

                            if($('.aboutTxt dl').hasClass('active')){
                                if($('body').hasClass('control')){
                                    $('.port').addClass('active');
                                }
                            }else{
                                $('.port').removeClass('active');
                            }
                         


                            setTimeout(function(){
                                floorBln = !floorBln;
                            },1500);
                        }

                    });


                },1500);
            },2000);
          
           
          
        })

        $('.about').on('wheel',function(e){
            if($('body').hasClass('control')){
                e.preventDefault();
                e.stopPropagation();
            }
          
 
        });
    }
    floor();

    function abilityfloor(){
        $('.ability .floor').on('mouseenter',function(){
            setTimeout(function(){
                $('.trans ul').addClass('active')
            },2000);
        });
       
        
    }
    abilityfloor()

   
    //포트폴리오 페이지 올라왔을때 클릭
    function slidePort(){
        $('.port >span').on('click',function(){
            // $('.about').slideUp();
            $('.port').removeClass('active');
            $('.port').css({width:'100%'});
            $(this).addClass('active');
            movescroll('.port',500);
            $('.port div ul').eq(1).addClass('active');
        });

    }

    slidePort();
    navbtn();
    

    //포트폴리오 페이지에서 올라갈때
    function portReverse2(){
        if($('.aboutTxt dl').hasClass('active')){
            if($('body').hasClass('control')){
                $('.port').addClass('active');
            }
        }
       
        $('.port').css({width:'70%'});
        $('.port >span').removeClass('active');
        $('.port div ul').eq(1).removeClass('active');
        
    }
    function portReverse(){
        $('.port').on('wheel',function(e){
            if($('body').hasClass('controlPort')){

                var delta = e.originalEvent.wheelDelta;
                e.preventDefault();
                e.stopPropagation();
                if(delta <0){
    
                    movescroll('.ability',500);
    
                }else{
                  
                 movescroll('.container',500);
                portReverse2();
                }//엘스문



            }
           
          
 
        });
    }
    portReverse()




    var idx = 0;
    function ability3D(){
      
      var x = 1200;
      var bln=true;
     
         
        $('.ability').on('wheel',function(e){
            if($('body').hasClass('control')){
            e.preventDefault();
            e.stopPropagation();
            
              
            var delta = e.originalEvent.wheelDelta;
            if(bln) {
                bln = !bln;

                if(delta <0){ //휠 내렸을 때
                    idx++;
                   
                    if(idx == $(".trans li").length) {
                        movescroll('.contact',500);
                        idx = $(".trans li").length-1;
                        $('.tri p').addClass('active');
                    }
                  
                   
                }else{ //휠 올렸을 때
                    idx--;
                    movescroll('.ability',500);
                    if(idx == -1) {
                        movescroll('.port',500);
                        idx = 0;
                    }
                    $('.tri p').removeClass('active');
                }//엘스문
            

                $('.trans ul').css({
                    transform: 'rotateY(25deg) translateY(200px) translateZ(-100px)translateX('+ -(1200 - (idx * 500)) +'px)'
                });

                $(".trans li").css({
                    opacity: 0.2
                    
                })

                $(".trans li").eq(idx).css({
                    opacity: 1
                });
                
                
                setTimeout(function(){
                    bln = !bln;
                },500);
            }
        }
        });
   

    }

    function abilityMob(){
        $('.trans ul').css({
            transform: 'rotateY(0) translateY(0) translateZ(0)translateX(0)'  
        });
        $(".trans li").css({
            opacity: 1
        });
    }
    function abilityDesk(){
        $('.trans ul').css({
            transform: 'rotateY(25deg) translateY(200px) translateZ(-100px)translateX(-1200px)'
        });
         $(".trans li").css({
            opacity: 0.2
        })

        $(".trans li").eq(idx).css({
            opacity: 1
        });
    }
    




    function contact(){

        $('.contact').on('wheel',function(e){
            var delta = e.originalEvent.wheelDelta;
            if(delta <0){ //휠 내렸을 때
              
                $('.tri p').addClass('active');
            }else{ //휠 올렸을 때
                $('.tri p').removeClass('active');
            }//엘스문
        });
    }
    contact();
    

    




//모바일 반응형 제어 스크립트

    function localControl(){
        if(!localStorage.cheak==1){
            localStorage.cheak=1;
            ability3D();
            abTxt();
        }
    }
    localStorage.clear();
    localControl();
    var m550 = window.matchMedia("screen and (max-width: 550px)");
    var m = window.matchMedia("screen and (max-width: 860px)");
    var m1200 = window.matchMedia("screen and (max-width: 1200px)");


m550.addListener(function(e){

    if(e.matches){
            
            $('.port').removeClass('active');
            $('.aboutTxt dl dd').eq(1).slideUp();
    }else{
        $('.aboutTxt dl dd').slideDown();
    }
});





m.addListener(function(e){
if(e.matches){
 $('body').removeClass('control');
 abilityMob();
 $('nav div').eq(0).slideUp(0);
 $('nav').slideDown();


//이하

}
else{
     
    $('body').addClass('control');


    if($('body').hasClass('control')){
        idx=0;
        localControl();
        abilityDesk();
     
    }
    $('.bugger').removeClass('active');
    $('.bugger').addClass('Hover');
    $('nav div').eq(0).slideDown(0); //네비 데스크탑일때

    


  //이상
}
});
m1200.addListener(function(e){
    if(e.matches){
        $('body').removeClass('controlPort');
    }else{
        $('body').addClass('controlPort');
        $('.port >div').animate({ // 포트에 서브스크롤이 내려왔을때 데스크탑 환경에서 깨지는걸 방지
            scrollTop:0
        },0);
      
    
    }
});







function startJS(){
	var windowWidth = $( window ).width();
    if(windowWidth < 860) {
        $('body').removeClass('control');
       
	
	}else{
        $('body').addClass('control');
    
        
	}


    if(windowWidth < 1200){
        $('body').removeClass('controlPort');
    }else{
        $('body').addClass('controlPort');
    }
    

}
startJS();






   
})









