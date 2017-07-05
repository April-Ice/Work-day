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
var amount = 0;


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
    buyer = detail.buyer;


    var course_html = template('tpl_course', {
        "cover": course[0].poster,
        // "favnum": 520,
        "title": course[0].title,
        "brief": course[0].short_summary,
        "discount": '',
        "acdate": '',
        "lectures": course_video.length,
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
        "introduction": course[0].summary,
    });
    $("#introtab1_review").html(introtab1_html);
    $("#content_code").html(course[0].summary);

    var introtab2_html = template('tpl_introtab2', {
        "catalog": course_video,
    });
    $("#introtab2_review").html(introtab2_html);

    var introtab4_html = template('tpl_introtab4', {
        "all_number": comment.length,
        "arlist": comment,
        "course_id": course_id,
        "token": token,
        "amount": amount,
        stars: [0, 0, 0, 0, 0]
    });
    $("#introtab4_review").html(introtab4_html);

    var interest_html = template('tpl_interest', {
        "interest_list": recommend
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
            number: buyer.length || 0,
        },
        "studentlist": buyer,
    });
    $("#teacher1_review").html(teacher1_html);

    $("form").submit(function (e) {
        subpost();
    });
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
    window.location.href = "./lesson.html?id=" + id + "&course_id=" + this.course_id + "&token=" + token;
}

function gotoCourse(cid) {
    window.location.href = "./course.html?course_id=" + cid + "&token" + token;
}

function review() {
    $(".quiz").addClass("active")
}

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function subpost() {
    var data = $('#postsform').serializeObject();;
    var AjaxURL = "http://crm.cike360.com/portal/index.php?r=background/Insert_course_comment";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: AjaxURL,
        data: JSON.stringify(data),
        success: function (result) {
        },
        error: function (data) {
        }
    });
}

function setstars(num) {
    amount = num;
    $("#star_num").attr("value", num);
    $("#setstar").find(".star").removeClass("full");
    for (var j = 0; j < num; j++) {
        console.log(j);
        $("#setstar").find(".star").eq(j).addClass("full");
    }
}