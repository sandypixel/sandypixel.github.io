// event pada saat di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elmen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // erintahkan scrool
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top -60
    }, 1250, 'swing' );


    e.preventDefault();

});


// paralax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();


    // jumbotron

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


});