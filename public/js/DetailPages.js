import '../library/jquery.js';
import { baseUrl } from '../library/config.js';
import cookie from '../library/cookie.js';



(function() {
    let id = location.search.split('=')[1];

    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getItem`,
        data: { id: id },
        dataType: "json",
        success: function(res) {
            res = res[0];
            let picture = JSON.parse(res.picture);
            let temp = `<!-- main -->
                <!-- 左边图片 -->
                <div class="img">
                    <img src="../${picture[0].src}" alt="">
                </div>
                <!-- 右边介绍 -->
                <div class="introduce">
                    <!-- 标题 -->
                    <div class="introduce-title">
                        <h1>${res.title}</h1>
                        <h2> ${res.subhead} </h2>
                    </div>
                    <!-- 促销活动 -->
                    <div class="promotion-activity">
                        <span>促销活动</span>
                        <i>下载 App 领新人大礼包，首单优惠购最低只要 ¥ 9.9 </i>
                    </div>
                    <!-- 颜色选择 -->
                    <div class="color-show">
                        <span>颜色选择</span>
                        <div class="select">
                            <div class="select1">
                                <h3>浅黑色</h3>
                            </div>
                            <div class="select1">
                                <h3>松绿色</h3>
                            </div>
                            <div class="select1">
                                <h3>纯白色光阴特别版</h3>
                            </div>
                        </div>
                    </div>
                    <!-- 容量选择 -->
                    <div class=" capacity-show">
                        <span>容量选择</span>
                        <div class="select">
                            <div class="select2">
                                <h3> 8G + 128GB </h3>
                            </div>
                            <div class="select2">
                                <h3> 8G + 128GB </h3>
                            </div>
                            <div class="select2">
                                <h3> 12G + 256GB </h3>
                            </div>
                            <div class="select2">
                                <h3> 16G + 512G </h3>
                            </div>
                        </div>
                    </div>
                </div>`;
            $('.DetailPages-main').append(temp);
        }
    });





})();



(function() {
    let id = location.search.split('=')[1];

    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getItem`,
        data: { id: id },
        dataType: "json",
        success: function(res) {
            res = res[0];
            let picture = JSON.parse(res.picture);
            let temp = `
            <div class="bar-device">
            <h5>您选择了</h5>
            <span class="product-name">坚果 R2</span>
            <span _ngcontent-c6="" class="price">
                <i>¥</i> 
                <span>${res.price}元</span>
            </span>
        </div>
        <div class="price">
            <span _ngcontent-c6="" class="price">
                <i>¥</i>       
                <span>共计${res.price}元</span>
            </span>
        </div>
        <div class="mai">
            <div class="buy">
                <h2>现在购买</h2>
            </div>
            <div class="cart">
                <h2>加入购物车</h2>
            </div>
        </div>`;


            $('#Fixed-nav').append(temp).find('.cart').one('click', function() {
                addItem(res.id);
            });

        }
    });




    function addItem(id) {
        let shop = cookie.get('shop');
        let product = {
            id: id
        };
        if (shop) {
            shop = JSON.parse(shop);
            console.log(shop);
            shop.forEach(elm => {
                id == elm.id ? shop.splice(elm, 1) : null;
            })
        } else {
            shop = [];

        }
        shop.push(product);
        cookie.set('shop', JSON.stringify(shop));
    }





})();