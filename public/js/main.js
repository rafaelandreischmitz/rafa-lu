$(function() {
    setTimeout(function(){
        $('.lds-ellipsis div').addClass('toTop');
    
        setTimeout(function(){
            $('.lds-ellipsis').addClass('toBottom');
            $('.notify').removeClass('show');
        }, 450);
    
        setTimeout(function(){
            $('.lds-ellipsis').remove();
        }, 1500);
    }, 1500);

    var winWidth = window.innerWidth - 100;
    var winHeight = window.innerHeight - 100;

    $('button#lu').on('mouseover', function(){
        $('button#lu').addClass('absolute');

        randomTop = getRandomNumber($('body').outerHeight(), winHeight);
        randomLeft = getRandomNumber(0, winWidth);
        
        $('button#lu').attr('style', 'top: '+randomTop+'px; left: '+randomLeft+'px; transform: none');
    });
    
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    $('button#rafa span').on('click', function(){
        handleNotify("Acertou!");
    });

    $('button#lu span').on('click', function(){
        handleNotify("Como tu conseguiu clicar???");
    });

    function handleNotify(message){
        $('.notify').text(message);
        $('.notify').addClass('show');

        setTimeout(function(){
            $('.notify').addClass('popup');
        }, 1);

        setTimeout(function(){
            $('.notify').removeClass('popup');
        }, 1000);
    
        setTimeout(function(){
            $('.notify').removeClass('show');
        }, 1300);
    }
});
