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

    var course = {
        cover: 'assets/img/course.jpg',
        favnum: 520,
        title: '深度讲解Linux企业级集群实现方案【马哥linux视频课程】',
    }
    var courseTop = template('top-t', course);
    document.getElementById('couse-top').innerHTML = courseTop;


    var abouts = [{
            img: 'assets/img/about1.jpg',
            title: '拯救未来：名师三人行联手打造最强系统/网络视频课程专题',
            time: '7.1-7.7',
            activity: '折上8折',
            count: 5641,
        },
        {
            img: 'assets/img/about1.jpg',
            title: '拯救未来：名师三人行联手打造最强系统/网络视频课程专题',
            time: '7.1-7.7',
            activity: '折上8折',
            count: 5641,
        },
        {
            img: 'assets/img/about1.jpg',
            title: '拯救未来：名师三人行联手打造最强系统/网络视频课程专题',
            time: '7.1-7.7',
            activity: '折上8折',
            count: 5641,
        },
    ]
    var aboutCon = template('about-t', course);
    document.getElementById('about-con').innerHTML = aboutCon;

});