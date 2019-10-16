$(function() {
    var num = 1;
    $('.jia').click(function() {
        $('.cont').text(num++);


    });

    $('.jian').click(function() {
        $('.cont').text(--num);


    });

})