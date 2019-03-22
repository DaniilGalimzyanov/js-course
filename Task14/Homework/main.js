$(document).ready(function(){
    $('.main_btna').on('click', function() {
        popUp();
    });

    $('.main_btn').on('click', function() {
        popUp();
    });

    $('#sheldure').on('click', function() {
        popUp();
    });

    $('.close').on('click', function() {
        popUp();
    });
    
    function popUp() {
        $('.modal').slideToggle(700);
        $('.overlay').fadeToggle(700);
    }
});