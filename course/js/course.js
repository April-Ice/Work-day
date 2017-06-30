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
        "good_number": 0,
        "center_number": 0,
        "poor_number": 0,
        "consistent_score": 5,
        "easy_score": 5,
        "answer_score": 5,
        "arlist": comment,
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
            number: buyer.number || 0,
        },
        "studentlist": buyer,
    });
    $("#teacher1_review").html(teacher1_html);


var degree = ['','很差','差','中','良','优','未评分'];

        $(function(){
            //点星星
            $(document).on('mouseover','i[cjmark]',function(){
                var num = $(this).index();
                var pmark = $(this).parents('.revinp');
                var mark = pmark.prevAll('input');
                //var val = mark.val();
                //if(mark.prop('checked')) return false;

                var list = $(this).parent().find('i');
                for(var i=0;i<=num;i++){
                    list.eq(i).attr('class','level_solid');
                }
                for(var i=num+1,len=list.length-1;i<=len;i++){
                    list.eq(i).attr('class','level_hollow');
                }
                $(this).parent().next().html(degree[num+1]);

            });

            $(document).on('mouseout','i[cjmark]',function(){
                var num = $(this).index();
                var pmark = $(this).parents('.revinp');
                var mark = pmark.prevAll('input');
                var val = parseInt(mark.val());
                //if(mark.prop('checked')) return false;

                var list = $(this).parent().find('i');
                //alert(list.length);
                if(val != 0){
                    for(var i=0;i<=val;i++){
                        list.eq(i).attr('class','level_solid');
                    }
                    //alert(val);
                    for(var i=val,len=list.length-1;i<=len;i++){
                        list.eq(i).attr('class','level_hollow');
                    }
                    $(this).parent().next().html(degree[val]);
                }else{
                    for(var i=0;i<=list.length-1;i++){
                        list.eq(i).attr('class','level_hollow');
                    }
                    $(this).parent().next().html("未评分");
                }
            })

            //点击星星
            $(document).on('click','i[cjmark]',function(){
                var num = $(this).index();
                var pmark = $(this).parents('.revinp');
                var mark = pmark.prevAll('input');
                mark.val(num+1);
            })
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

// function reviewStars(num) {
//     console.log("stars");
//     console.log($(this));
//     for (var i = 1; i < num; i++) {
//         $("#restars").find(".star").nthchild(i).addClass("full");
//     }
// }
