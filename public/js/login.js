import '../library/jquery.js';
import '../library/jquery.md5.js';
import cookie from '../library/cookie.js';



$('.reg-flow>input').focus(function() {
    $(this).val('');
    $(this).parent().css('border', '1px solid #87CEFA');
    $(this).parent().siblings().css('border', 'none');
});

//input  失去焦点

$('.reg-flow>input').blur(function() {
    if ($(this).val() == '') {
        $(this).css({ 'opacity': '.5', 'color': 'red' }).val('不能为空');
    }

});


$('#submit').click(function() {
    open('../index.html');
})