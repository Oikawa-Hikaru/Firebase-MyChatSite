// JQuery開始構文
$(function(){

// サイト展開時のフェードイン
$('.main-bgi').animate({'opacity': '1'}, 2000);

// クリックイベントで背景画像を変化させる
$('.bgc').on('click', function() {
    var id = $(this).attr('id');
    if (id === 'return-bgi') {
        $('.main-bgi').animate({'opacity': '0'}, 100);
        $('.main-bgi').css('background-image', 'url(./img/bgi-01.jpg)');
        $('.main-bgi').animate({'opacity': '1'}, 1500);
    } else if (id === 'change-bgi01') {
        $('.main-bgi').animate({'opacity': '0'}, 100);
        $('.main-bgi').css('background-image', 'url(./img/bgi-02.jpg)');
        $('.main-bgi').animate({'opacity': '1'}, 1500);
    } else if (id === 'change-bgi02') {
        $('.main-bgi').animate({'opacity': '0'}, 100);
        $('.main-bgi').css('background-image', 'url(./img/bgi-03.jpg)');
        $('.main-bgi').animate({'opacity': '1'}, 1500);
    } else if (id === 'change-bgi03') {
        $('.main-bgi').animate({'opacity': '0'}, 100);
        $('.main-bgi').css('background-image', 'url(./img/bgi-04.jpg)');
        $('.main-bgi').animate({'opacity': '1'}, 1500);
    } else if (id === 'change-bgi04') {
        $('.main-bgi').animate({'opacity': '0'}, 100);
        $('.main-bgi').css('background-image', 'url(./img/bgi-05.jpg)');
        $('.main-bgi').animate({'opacity': '1'}, 1500);
    }
})

// スクロールアニメーション
$('.top').click(function(){
    $('html, body').animate({'scrollTop':0}, 500);
});

// jQuery終了構文
});