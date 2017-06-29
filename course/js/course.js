// --------模板数据---------
var course_id = getUrlParam('course_id') || 1;
var token = getUrlParam('token') || 102;

var detail = {};

var course;
var course_video;
var same_course;
var comment;
var recommend;
var buyer;


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


    test();
    course = detail.course;
    course_video = detail.course_video;
    same_course = detail.same_course;
    comment = detail.comment;
    recommend = detail.recommend;
    console.log(detail);
    buyer = detail.buyer;


    var course_html = template('tpl_course', {
        "cover": course[0].poster,
        "favnum": 520,
        // "title": '深度讲解Linux企业级集群实现方案【马哥linux视频课程】',
        "title": course[0].title,
        "brief": course[0].short_summary,
        "discount": '',
        "acdate": '',
        "lectures": 14,
        "hour": '6小时8分钟',
        "time": course[0].update_time,
        "countprice": course[0].price,
    });
    $("#couse_review").html(course_html);

    var course2_html = template('tpl_course2', {
        "countprice": course[0].price,
    });
    $("#couse2_review").html(course2_html);

    var about_html = template('tpl_about', {
        "abouts": same_course
    });
    $("#about_review").html(about_html);

    var introtab1_html = template('tpl_introtab1', {
        "target": '本课程深入介绍了企业级集群种类，负载均衡、高可用集群常见解决方案，其中负载均衡集群从DNS负载均衡到后端web负载均衡',
        "audience": 'Linux初学者、Linux爱好者、系统管理员。',
        "introduction": '<p>本课程深入介绍了企业级集群种类，负载均衡、高可用集群常见解决方案，其中负载均衡集群从DNS负载均衡到后端web负载均衡，讲解过程中介绍了常见的负载均衡模型以及负载均衡调度算法，涉及到LVS、F5、Haproxy、Nginx、Varnish等对比，以及企业级存储方案的各自不同使用场景。</p>'
    });
    $("#introtab1_review").html(introtab1_html);

    var introtab2_html = template('tpl_introtab2', {
        "catalog": course_video,
    });
    $("#introtab2_review").html(introtab2_html);

    var introtab4_html = template('tpl_introtab4', {
        "all_number": 4,
        "good_number": 0,
        "center_number": 0,
        "poor_number": 0,
        "consistent_score": 5,
        "easy_score": 5,
        "answer_score": 5,
        "arlist": comment,
    });
    $("#introtab4_review").html(introtab4_html);

    var interest_html = template('tpl_interest', {
        "interest_list": [{
            cover: './img/like1.jpg',
            title: '2-老男孩Linux高薪运维集群实战',
        },
        {
            cover: './img/like2.jpg',
            title: '2-老男孩Linux高薪运维集群实战',
        },
        {
            cover: './img/like3.jpg',
            title: '2-老男孩Linux高薪运维集群实战',
        },
        {
            cover: './img/like4.jpg',
            title: '2-老男孩Linux高薪运维集群实战',
        },
        ]
    });
    $("#interest_review").html(interest_html);

    var teacher1_html = template('tpl_teacher1', {
        "teacher": {
            avatar: './img/teacher.jpg',
            name: '马哥',
            good_percent: 97,
            company: '马哥教育泛Linux运维培训',
            tags: '马哥Linux运维学院院长，马哥教育创始人，计算机安全专业硕士，Linux核心专家、红帽中心特邀专家、51CTO专家博主',
        },
        "group": {
            name: '51CTO学院480612985(Linux官方2群)',
        },
        "students": {
            number: buyer,
        },
        "studentlist": buyer,
        // "books": [{
        //         cover: './img/book1.gif',
        //         title: '跟老男孩学Linux运维：Web集群实战',
        //         author: '老男孩',
        //         public: '',
        //         price: 99
        //     },
        //     {
        //         cover: './img/book2.gif',
        //         title: 'Windows内核设计思想',
        //         author: '陈树宝',
        //         public: '博文视点出版社',
        //         price: 108
        //     },

        // ]
    });
    $("#teacher1_review").html(teacher1_html);

});

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function test() {
    $.ajax({
        type: 'GET',
        url: 'http://crm.cike360.com/portal/index.php?r=background/School_course_detail',
        data: {
            course_id: course_id,
            token: token
        },
        async: false,
        success: function (data) {
            var mya = jQuery.parseJSON(data);
            detail = mya;
        },
    });
}

function gotoVideo(id) {
    window.location.href = "./lesson.html?id=" + id + "&course_id=" + this.course_id + "&token" + token;
}


