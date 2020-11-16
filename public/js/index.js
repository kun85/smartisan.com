import '../library/jquery.js';
import '../library/jquery.lazyload.min.js';

import { baseUrl } from '../library/config.js';



// 渲染main2


(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        dataType: "json",
        success: function(res) {
            //console.log(res);
            //字符串拼接
            let temp = '';
            res.forEach((elm, i) => {
                if (i == 0) {
                    // console.log(elm.id);
                    let picture = JSON.parse(elm.picture);

                    temp += `<li>
                <a href="./html/DetailPages.html?id=${elm.id}">
                    <img src="${picture[0].src}" alt="">
                    <h3>${elm.title}</h3>
                    <h5>${elm.subhead}</h5>
                    <span>￥${elm.price}</span>
                </a>
            </li>
            <li>
                <a href="./html/DetailPages.html?id=${elm.id}"><img src="${picture[1].src}" alt="">
                    <h3>${elm.title}</h3>
                    <h5>${elm.subhead}</h5>
                    <span>￥${elm.price}</span>
                </a>

            </li>
            <li>
                <a href="./html/DetailPages.html?id=${elm.id}"><img src="${picture[2].src}" alt="">
                    <h3>${elm.title}</h3>
                    <h5>${elm.subhead}</h5>
                    <span>￥${elm.price}</span>
                </a>

            </li>
            <li>
                <a href="./html/DetailPages.html?id=${elm.id}"><img src="${picture[3].src}" alt="">
                    <h3>${elm.title}</h3>
                    <h5>${elm.subhead}</h5>
                    <span>￥${elm.price}</span>
                </a>

            </li>`;
                }
            });
            $('.main2>.animation>.theme').append(temp);
        }
    });
})();

// 渲染main3


(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        dataType: "json",
        success: function(res) {
            let temp = '';
            res.forEach((elm, i) => {
                if (i == 0) {
                    let picture = JSON.parse(elm.picture);
                    temp += `<li>
                <img src="./img/main3.1.webp" alt="">
            </li>
            <li>
                <a href="./html/DetailPages.html?id=${elm.id}">
                    <img src="${picture[0].src}" alt="">
                    <h3>${elm.title}</h3>
                    <h5>${elm.subhead}</h5>
                    <span>￥${elm.price}</span>
                </a>
            </li>

            <li>
                <a href="./html/DetailPages.html?id=${elm.id}">
                    <img src="${picture[0].src}" alt="">
                    <h3>${elm.title}</h3>
                    <h5>${elm.subhead}</h5>
                    <span>￥${elm.price}</span>
                </a>
            </li>`;
                }
            })
            $('.main3>.main3-main').append(temp);
        }
    });
})();

// 渲染main3-main2

(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        dataType: "json",
        success: function(res) {
            let temp = '';
            res.forEach((elm, i) => {

                if (i == 1) {
                    let picture = JSON.parse(elm.picture);
                    temp += `<li>
                    <a href="./html/DetailPages.html?id=${elm.id}">
                        <img src="${picture[0].src}" alt="">
                        <h3>${elm.title}</h3>
                        <h5>${elm.subhead}</h5>
                        <span>￥${elm.price}</span>
                    </a>
                </li>
                <li>
                    <a href="./html/DetailPages.html?id=${elm.id}">
                        <img src="${picture[1].src}" alt="">
                        <h3>${elm.title}</h3>
                        <h5>${elm.subhead}</h5>
                        <span>￥${elm.price}</span>
                    </a>
                </li>
                <li>
                    <a href="./html/DetailPages.html?id=${elm.id}">
                        <img src="${picture[2].src}" alt="">
                        <h3>${elm.title}</h3>
                        <h5>${elm.subhead}</h5>
                        <span>￥${elm.price}</span>
                    </a>
                </li>
                <li>
                    <a href="./html/DetailPages.html?id=${elm.id}">
                        <img src="${picture[3].src}" alt="">
                        <h3>${elm.title}</h3>
                        <h5>${elm.subhead}</h5>
                        <span>￥${elm.price}</span>
                    </a>
                </li>`;
                }
            })
            $('.main3>.main3-main2').append(temp);
        }
    });
})();



// header-------------------------------------------------


// cart-------------
$('header>.header-user').hover(function() {

    $('header>#cart-in').css('display', 'block');
}, function() {
    $('header>#cart-in').css('display', 'none');
});
// user-----------------

$('header>.header-cart').hover(function(e) {
    $('header>.user-in').css('display', 'block');
});


$('body').click(function() {
        $('header>.user-in').css('display', 'none');
    })
    // -----nav  隐藏内容消失

$('.wrap>img').hover(function() {
    $('.sub-hide').slideUp();
})



//注册
$('header .user-in-reg').click(function() {
    window.open('../html/reg.html');
});

//登录
$('header .user-in-login').click(function() {
    window.open('../html/login.html');
});

// nav-----------------------------------------------------

//// 封装一个scrollTop兼容性函数

$(document).ready(function() {

    let navH = $('#nav').offset().top;
    $(window).on('scroll', function() {
        let scroH = $(this).scrollTop();
        if (scroH >= navH) {
            $('#nav').css({ "position": "fixed", "top": 0, "z-index": 110 })
        } else {
            $("#nav").css({ "position": "static" });
        }
    })



    //tbs 选项卡---------------------------------------------------


    $('#nav>.nav-main li').hover(function() {
        // over
        $("#nav li").eq($(this).index()).addClass('cur').siblings().removeClass('cur');
        $(".sub-hide").slideUp().eq($(this).index()).slideDown();
    }, function() {
        $('nav li').eq($(this).index()).addClass('restore');
        $('.sub-hide').addClass('on');
    });
    //轮播图----------------------------------------------------------------------------
    var wrap = document.querySelector('.wrap');
    var images = wrap.querySelectorAll('.wrap img');
    var spans = wrap.querySelectorAll('.follow span');

    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            spans[i].index = i; //自定义属性，得到对应的下标
            images[i].index = i; //自定义属性，得到对应的下标
            images[i].style.zIndex = 100 - i; //为图片排列顺序
            images[i].style.opacity = '0'; //将图片透明度全部赋值为0
            spans[i].style.background = 'gray'; //圆点北京色全部设置为黑色
        }
        //将传入参数下标值的图片透明度赋值为 1
        images[index].style.opacity = '1';
        //将传入参数下标值的图片的背景色赋值为white 运行一下
        spans[index].style.background = 'white';
    }
    showImage(0); //初始设置下标为0的图片和圆点的样式

    //获取计数器
    var count = 0;
    // 定义自动轮播函数
    function Automatically_round() {
        clearInterval();
        // 判断count的值如果能被4整除，则将count重新赋值为0；
        if (count == 9) {
            count = 0;
        };
        // 将count值当做参数传给函数showImage();
        showImage(count);
        count++; //执行一次 ＋1

    }
    // 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
    //window.setInterval(Automatically_round, 2000);
    var imageInitailMove = setInterval(Automatically_round, 2000);
    // 圆点的点击事件
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            clearInterval(imageInitailMove);
            // 将当前点击的圆点的下标值赋值给count
            count = event.target.index;
            console.log(count)
                // 调用函数
            showImage(count);
            imageInitailMove = setInterval(Automatically_round, 2000);
            clearInterval();
        }
    }
});

// mian1

$('#main>figure').hover(function() {
    // over
    $("#main a").eq($(this).index()).css('box-shadow', 'inset 1px 1px 15px #cccccc');
}, function() {
    $('#main a').eq($(this).index()).css('box-shadow', 'none');
});


//main2 移入的效果
$('.main2>.animation>.theme').on('mouseover', 'li', function() {
    $('.main2>.animation>.theme>li').eq($(this).index()).css('box-shadow', 'inset 1px 1px 15px #cccccc').siblings().css('box-shadow', 'none');
});


//main2 移出的效果
$('.main2>.animation>.theme').on('mouseout', 'li', function() {
    $('.main2>.animation>.theme>li').eq($(this).index()).css('box-shadow', 'none');
});


//main3-main 移入的效果
$('.main3>.main3-main').on('mouseover', 'li', function() {
    $('.main3>.main3-main>li').eq($(this).index()).css('box-shadow', 'inset 1px 1px 15px #cccccc').siblings().css('box-shadow', 'none');
});

//main3-main 移出的效果
$('.main3>.main3-main').on('mouseout', 'li', function() {
    $('.main3>.main3-main>li').eq($(this).index()).css('box-shadow', 'none');
});




//main3-main2 移入添加阴影
$('.main3>.main3-main2').on('mouseover', 'li', function() {
    $('.main3>.main3-main2>li').eq($(this).index()).css('box-shadow', 'inset 1px 1px 15px #cccccc').siblings().css('box-shadow', 'none');
});

//main3-main2 移出添加阴影
$('.main3>.main3-main2').on('mouseout', 'li', function() {
    $('.main3>.main3-main2>li').eq($(this).index()).css('box-shadow', 'none');
});