$(function(){
   
   var el = $('.box');
   var meutexto = 'Olá mundo!';

    el.html("<div class=\"teste\">"+meutexto+"</div>");
    el.html('<h1 class="texto1">Meu texto via javascript!</h1>');

    $('.box2').text("<div></div>");
    $('.box2').text("Olá mundo!");

    console.log(el.text());

});