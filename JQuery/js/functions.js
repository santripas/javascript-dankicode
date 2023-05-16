$(function(){
    
    $.ajax({
        'url':'conteudo.html',
        //'method':'post',
        //data:{'nome':'sandro','idade':'23'}

    }).done(function(data){
        console.log(data);
    });
});