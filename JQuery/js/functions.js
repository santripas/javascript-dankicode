$(function(){
    
    /*$('.box').fadeOut(2000,function(){
        $('.box2').fadeIn(3000,function(){
            console.log('Terminamos a nossa animação!');
        });
    
    });
    */

    var timeOut = function(){
        $('.box2').animate({
            'width':'40%',
            'height':'500px'
        },2000);
    }

    $('.box1').animate({
        'width':'40%',
        'height':'500px'
    },2000,function(){
       setTimeOut(timeOut,3000);
    });

   
});