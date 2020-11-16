import '../library/jquery.js';
import { baseUrl } from '../library/config.js';
import cookie from '../library/cookie.js';







$(function() {


    (function() {
        let shop = cookie.get('shop');
        console.log(shop);
        if (shop) {
            let shop1 = JSON.parse(shop);
            let idList = shop1.map(elm => elm.id).join();
            // console.log(idList);



            $.ajax({
                type: "get",
                url: `${baseUrl}/product/getItems`,
                data: {
                    idList: idList
                },
                dataType: "json",
                success: function(res) {
                    let tempLi = '';
                    res.forEach((elm, i) => {
                        let arr = shop1.filter(val => val.id == elm.id)
                        console.log(arr);
                        let picture = JSON.parse(elm.picture);
                        tempLi += ` 
                        <div class="shop-bg">
                        <!-- 选择按钮 -->
                        <div class="choice"></div>
                        <!-- 商品图片 -->
                        <div class="items-thumb">
                            <a href="">
                                <img src="../${picture[0].src}" alt="">
                            </a>
                        </div>
                        <!-- 商品说明 -->
                        <div class="state">
                            <a href="">
                                <h3>${elm.title}</h3>
                            </a>
                            <li>${elm.subhead}</li>
                        </div>
                        <!-- 商品价格 -->
                        <div class="price">
                            <i>¥</i>
                            <span>${elm.price}</span>
                        </div>
                        <!-- 添加数量 -->
                        <div class="item-cols-num">
                            <span class="button down disabled">-</span>
                            <span class="num">
                            <input type="text" value="1" readonly  unselectable="on">
                        </span>
                            <span class="button up">+</span>
                        </div>
                        <div class="subtotal">
                           <i>¥</i>
                           <span>59.00</span>
                        </div>
                        <div class="operation">
                            <a href="">×</a>
                       </div>
                       </div>
                        `;

                    });
                    $('.shoping-main1').append(tempLi);
                    let count = 0;
                    if (count % 2 == 0) {
                        $('.shoping-main1').on('click', '.choice', function() {
                            $(this).html('√').css({ 'text-align': 'center', 'background': 'blue' });
                        });
                        count++;
                    } else {
                        $('.shoping-main1').on('click', '.choice', function() {
                            $(this).html(' ').css({ 'text-align': 'center', 'background': 'none' });

                        });
                        count++;
                    };

                    $('.shoping-main1').on('click', '.up', function() {
                        let up = 1;
                        let subtotal = $('.item-cols-num>.num>input').val() * $('.subtotal>span').html();
                        up = up + Number($('input').val());
                        $('input').val(up);
                        $('.subtotal>span').html(subtotal);
                    });


                    $('.shoping-main1').on('click', '.down', function() {
                        let down = 1;
                        let subtotal = $('.subtotal>span').val() - 59;
                        if ($('input').val() >= 1) {
                            $('input').val(1);
                        } else {
                            down = Number($('input').val()) - down;
                            $('input').val(down);
                            $('.subtotal>span').html(subtotal);
                        }

                    });



                }
            });
        }
    })();


})