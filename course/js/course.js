///tabs
$(document).ready(function () {

    $(".tabsTil p").click(function () {
        showTab($(this).index())
    });

    function showTab(n) {
        $(".tabsTil").each(function () {
            $(this).find('p').eq(n).addClass('cur').siblings().removeClass('cur')
        })
        $(".tabsCon .tabsConItem").eq(n).show().siblings().hide()
    };
    $(".Fixed .tabsTil p").click(function () {
        $(window).scrollTop($("#tabsTil").offset().top)
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#tabsTil").offset().top) {
            $(".Fixed").show()
        } else {
            $(".Fixed").hide()
        }
    });


    // --------模板数据---------

    var data = {
        title: '基本例子',
        isAdmin: true,
        list: ['文艺1', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
    };
    var blog = template('test', data);
    document.getElementById('content').innerHTML = blog;

});