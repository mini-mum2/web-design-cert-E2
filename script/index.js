$(function(){
    //슬라이드
    let num = 0;
    setInterval(function(){
        num++;
        if(num>2) {num=0}
        $('.slide_wrapper').css('transform',`translateY(${-33.333*num}%)`)
    },3000)

    //팝업
    $('#open').click(function(){
        $('.popup').addClass('active');
        $('.modal').addClass('active');
    })
    $('#close').click(function(){
        $('.popup').removeClass('active');
        $('.modal').removeClass('active');
    })
})