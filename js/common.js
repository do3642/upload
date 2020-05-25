window.addEventListener('DOMContentLoaded',function(){
  
    var intro = document.querySelector('.intro');

    // 인트로 스크롤 락
    function lock(){
        $('.intro').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
          });
         
    }
   
    lock();
    
    function movescroll(ele,time){
        
        var move = $(ele).offset().top;
        $('html').stop().animate({
            scrollTop:move
        },time);
    
    }
 

    //인트로 버튼 클릭시 캔버스 활성화/스크롤 이동
    function introbtn(i){
        $('.btn').on('click',function(){

        
            $('.allCanvas canvas').addClass('active');
           setTimeout(function(){
         movescroll('.container',0);
           },1000);
          
        });
    };
    introbtn();
 

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













    //원에 마우스 엔터시 발생 이벤트
    function floor(){
        var floorBln = true;

        $('.floor').on('mouseenter',function(){
            $(this).addClass('active');
            
            setTimeout(function(){
                $('.aboutTxt dl').slideDown(1500);
                setTimeout(function(){
                    $('nav').slideDown();
                    $('.aboutTxt dl').css({
                        transition:'2s'
                    });

                    $('.about').on('wheel',function(e){
                        var delta = e.originalEvent.wheelDelta;
                        e.preventDefault();
                        e.stopPropagation();

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
                                $('.port').addClass('active');
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
            var delta = e.originalEvent.wheelDelta;
            e.preventDefault();
            e.stopPropagation();
           
        
 
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
        $('.port').addClass('active');
        $('.port').css({width:'70%'});
        $('.port >span').removeClass('active');
        $('.port div ul').eq(1).removeClass('active');
    }
    function portReverse(){
        $('.port').on('wheel',function(e){
            var delta = e.originalEvent.wheelDelta;
            e.preventDefault();
            e.stopPropagation();
            if(delta <0){

                movescroll('.ability',500);

            }else{
              
             movescroll('.container',500);
            portReverse2();
            }//엘스문
          
 
        });
    }
    portReverse()




    function ability3D(){

      var x = 1200;
      var bln=true;
      var idx = 0;
        $('.ability').on('wheel',function(e){
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
                    }
                   
                    $('.trans ul').after().css({
                        width:'100%'
                    });
                }else{ //휠 올렸을 때
                    idx--;
                    movescroll('.ability',500);
                    if(idx == -1) {
                        movescroll('.port',500);
                        idx = 0;
                    }
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

        });

    }
    ability3D();
    


   
})