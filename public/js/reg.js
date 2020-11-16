import '../library/jquery.js';
import '../library/jquery.md5.js';
import cookie from '../library/cookie.js';


//input  获得焦点
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



$('#submit').on('click', function() {
    // 省略1万字的表单验证环节
    let password = $.md5($('[name=password]').val());
    $.ajax({
        type: "post",
        url: "http://localhost:8088/users/reg",
        data: {
            username: $('[name=username]').val(),
            password: password,
            email: $('[name=email]').val(),
            phone: $('[name=phone]').val(),
            address: $('[name=address]').val(),
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
            open('../html/login.html');
        }
    });
});