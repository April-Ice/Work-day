$(document).ready(function () {

    function getSubTotal(row) {
        var price = parseFloat($(row).find(".selling-price").data("bind"));
        var qty = parseInt($(row).find(":text").val());
        var result = price * qty;
        $(row).find(".selling-price").text($.formatMoney(price, 2));
        $(row).find(".subtotal").text($.formatMoney(result, 2)).data("bind", result.toFixed(2));
    };

    function getTotal() {
        var qtyTotal = 0;
        var itemCount = 0;
        var priceTotal = 0;
        $(cartTable).find("tr:gt(0)").each(function () {
            getSubTotal(this);
            console.log($(this).find(":checkbox").prop("checked"));
            if ($(this).find(":checkbox").prop("checked") == true && $(this).find(":checkbox").prop("checked") != "undefined") {
                itemCount++;
                qtyTotal += parseInt($(this).find(":text").val());
                priceTotal += parseFloat($(this).find(".subtotal").data("bind"));
            }
        });
        $("#itemCount").text(itemCount).data("bind", itemCount);
        $("#qtyCount").text(qtyTotal).data("bind", qtyTotal);
        $("#priceTotal").text($.formatMoney(priceTotal, 2)).data("bind", priceTotal.toFixed(2));
    };

    var cartTable = $(".cart");
    var cartWrap = $(".cart-wrap");

    getTotal();

    $(cartWrap).find(":checkbox").click(function () {
        var cartone = $(this).parents('.cart');
        var cartwrap = $('.cart-wrap');

        //全选框单击
        if ($(this).hasClass("check-cart")) {
            console.log("底部全选");
            var checked = $(this).prop("checked");
            cartwrap.children('.cart').find(".check-one").prop("checked", checked);
            cartwrap.children('.cart').find(".check-all").prop("checked", checked);
        }
        //类别全选框单击
        if ($(this).hasClass("check-all")) {
            var checked = $(this).prop("checked");
            $(this).parents('.cart').find(".check-one").prop("checked", checked);
        }

        //“全选”勾上或是取消
        var items = cartone.find("tr:gt(0)");
        var items2 = cartwrap.find("tr:gt(0)");
        cartone.find(".check-all").prop("checked", items.find(":checkbox:checked").length == items.find(":checkbox").length);
        cartwrap.find(".check-cart").prop("checked", items2.find(":checkbox:checked").length == items2.find(":checkbox").length);
        //设置结算按钮disabled属性
        // $("#btn_settlement").attr("disabled", items.find(":checkbox:checked").length == 0);

        getTotal();
    });

    $(cartTable).find("tr:gt(0)").each(function () {
        var input = $(this).find(":text");

        $(input).keyup(function () {
            var val = parseInt($(this).val());
            if (isNaN(val) || (val < 1)) {
                $(this).val("1");
            }
            getSubTotal($(this).parent().parent());
            getTotal();
        });

        $(this).click(function () {
            var val = parseInt($(input).val());
            if (isNaN(val) || (val < 1)) {
                val = 1;
            }

            if ($(window.event.srcElement).hasClass("minus")) {
                if (val > 1) val--;
                input.val(val);
                getSubTotal(this);
            } else if ($(window.event.srcElement).hasClass("plus")) {
                if (val < 9999) val++;
                input.val(val);
                getSubTotal(this);
            } else if ($(window.event.srcElement).hasClass("delete")) {
                if (confirm("确定要从购物车中删除此产品？")) {
                    $(this).remove();
                }
            }
            getTotal();
        });
    });

    $(".delete-all").click(function () {
        if (confirm("确定要从购物车中删除所有选中产品？")) {
            $(".cart-wrap").find("tr:gt(0)").each(function () {
                if ($(this).find(".check-one").is(':checked')) {
                    $(this).find(".check-one").prop("checked", false);
                    $(this).remove();
                }
            })
            getTotal();
        }
    });
    function deleteall() {
        if (confirm("确定要从购物车中删除所有选中产品？")) {
            $(".cart-wrap").find("tr:gt(0)").each(function () { 
                if ($(this).find(".check-one").is(':checked')) {
                    // $(this).find(".form-control").value(0);
                    // $(this).find(".check-one").prop("checked", false);
                    console.log("$(this).find");
                    console.log($(this).find(".check-one").is(':checked'));
                    $(this).remove();
                }
            });
            $(cartTable).find("tr:gt(0)").each(function () {
                var input = $(this).find(":text");

                $(input).keyup(function () {
                    var val = parseInt($(this).val());
                    if (isNaN(val) || (val < 1)) {
                        $(this).val("1");
                    }
                    getSubTotal($(this).parent().parent()); 
                    getTotal();
                });

                $(this).click(function () {
                    var val = parseInt($(input).val());
                    if (isNaN(val) || (val < 1)) {
                        val = 1;
                    }

                    if ($(window.event.srcElement).hasClass("minus")) {
                        if (val > 1) val--;
                        input.val(val);
                        getSubTotal(this);
                    } else if ($(window.event.srcElement).hasClass("plus")) {
                        if (val < 9999) val++;
                        input.val(val);
                        getSubTotal(this);
                    } else if ($(window.event.srcElement).hasClass("delete")) {
                        if (confirm("确定要从购物车中删除此产品？")) {
                            $(this).remove();
                        }
                    }
                    getTotal();
                });
            });
            getTotal();
        }
    }

});



function supporthHtml5() {
    return (typeof (Worker) !== "undefined") ? true : false;
}

function addfavorite(theUrl) {
    if (document.all) {
        window.external.addFavorite(theUrl, 'Emerson Web Order');
    }
    else if (window.sidebar) {
        window.sidebar.addPanel('Emerson Web Order', theUrl, '');
    }
}

$(document).ready(function () {
    jQuery.ajaxSetup({ cache: false });
});

function selectAll() {
    var aChecked = $(".select_all").prop("checked");
    if (typeof (aChecked) == "undefined") { aChecked = false; }
    $(".selectable").each(function () {
        if (typeof ($(this).attr("disabled")) == "undefined") {
            var subchecked = $(this).prop("checked");
            if (subchecked != aChecked) {
                $(this).prop("checked", aChecked);
            }
        }
    });
}

function EnsureDecimal(e) {
    e.value = e.value.replace(/[^\d.]/g, ""); //先把非数字的都替换掉，除了数字和.
    e.value = e.value.replace(/^\./g, ""); //必须保证第一个为数字而不是.
    e.value = e.value.replace(/\.{2,}/g, "."); //保证只有出现一个.而没有多个.
    e.value = e.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."); //保证.只出现一次，而不能出现两次以上
}

function EnsureInt() {
    if (((event.keyCode < 48) || (event.keyCode > 57))) {
        event.returnValue = false;
    }
}

/*********************HTML5 Notification Functions **************************************/

/**
 * 金额按千位逗号分割
 * @character_set UTF-8
 * @author Jerry.li(hzjerry@gmail.com)
 * @version 1.2014.08.24.2143
 *  Example
 *  <code>
 *      alert($.formatMoney(1234.345, 2)); //=>1,234.35
 *      alert($.formatMoney(-1234.345, 2)); //=>-1,234.35
 *      alert($.unformatMoney(1,234.345)); //=>1234.35
 *      alert($.unformatMoney(-1,234.345)); //=>-1234.35
 *  </code>
 */
!(function ($) {
    $.extend({
        /**
         * 数字千分位格式化
         * @public
         * @param mixed mVal 数值
         * @param int iAccuracy 小数位精度(默认为2)
         * @return string
         */
        formatMoney: function (mVal, iAccuracy) {
            var fTmp = 0.00;//临时变量
            var iFra = 0;//小数部分
            var iInt = 0;//整数部分
            var aBuf = new Array(); //输出缓存
            var bPositive = true; //保存正负值标记(true:正数)
            /**
             * 输出定长字符串，不够补0
             * <li>闭包函数</li>
             * @param int iVal 值
             * @param int iLen 输出的长度
             */
            function funZero(iVal, iLen) {
                var sTmp = iVal.toString();
                var sBuf = new Array();
                for (var i = 0, iLoop = iLen - sTmp.length; i < iLoop; i++)
                    sBuf.push('0');
                sBuf.push(sTmp);
                return sBuf.join('');
            };

            if (typeof (iAccuracy) === 'undefined')
                iAccuracy = 2;
            bPositive = (mVal >= 0);//取出正负号
            fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp);//强制转换为绝对值数浮点
            //所有内容用正数规则处理
            iInt = parseInt(fTmp); //分离整数部分
            iFra = parseInt((fTmp - iInt) * Math.pow(10, iAccuracy) + 0.5); //分离小数部分(四舍五入)

            do {
                aBuf.unshift(funZero(iInt % 1000, 3));
            } while ((iInt = parseInt(iInt / 1000)));
            aBuf[0] = parseInt(aBuf[0]).toString();//最高段区去掉前导0
            return ((bPositive) ? '' : '-') + aBuf.join(',') + '.' + ((0 === iFra) ? '00' : funZero(iFra, iAccuracy));
        },
        /**
         * 将千分位格式的数字字符串转换为浮点数
         * @public
         * @param string sVal 数值字符串
         * @return float
         */
        unformatMoney: function (sVal) {
            var fTmp = parseFloat(sVal.replace(/,/g, ''));
            return (isNaN(fTmp) ? 0 : fTmp);
        },
    });
})(jQuery);