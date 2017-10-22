$(function(){
    setTimeout(function(){
        $('.login-container').fadeIn(500);
    },1000);
     console.log('w');
    // var week = [mon, tue, wed, thu, fri];

    $('.time-table').find('td').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').text(' ');
        }else{
            $(this).addClass('active').text('○');
        }
    })
})
