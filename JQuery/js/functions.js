$(function(){
    
    var frase = 'Ola mundo';
    var verifica = frase.match(/Ola/);

    console.log(verifica);


    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });

    }

    function verificarCliqueFechar(){

        var el = $('body,.closeBtn');

        el.click(function(){
            $('.bg').fadeOut();
        })

        $('.form').click(function(e){
            e.stopPropagation();
        })

    }

    $('form#form1').submit(function(e){
        e.preventDefault();

        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            for(var i = 0; i < amount; i++ ){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    console.log("Nossa condição bateu, podemos dar continuidade");
                }else{
                    aplicarCampoInvalido($('input[name=nome'));
                    return false;
                }
            }
        }else{
            aplicarCampoInvalido($('input[name=nome'));
            return false;
        }        

    })

    function aplicarCampoInvalido(el){
        el.css('border','2px solid red');
        el.data('invalido','true');
        el.val('Campo inválido!');
    }
 
});