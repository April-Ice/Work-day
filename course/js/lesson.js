
// --------模板数据---------
var course_id = getUrlParam('course_id') || 1;
var token = getUrlParam('token') || 102;
var id = getUrlParam('id') || 102;

var detail = {};

var course;
var course_video;

///tabs
$(document).ready(function () {

    getLesson();
    course = detail.course;
    course_video = detail.course_video;
    console.log(detail);

    $("#memulist").find("li:nthchild(id)").addClass("active");

    var video_html = template('tpl_video', {
        "video": course_video[id-1],
    });
    $("#video_review").html(video_html);

    var title_html = template('tpl_title', {
        "title": course_video[id-1].name,
    });
    $("#title_review").html(title_html);


    var introtab2_html = template('tpl_introtab2', {
        "catalog": course_video,
        "id": id,
    });
    $("#introtab2_review").html(introtab2_html);

});

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getLesson() {
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
