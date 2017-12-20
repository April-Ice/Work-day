(function (doc, win, undefined) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window
        ? 'orientationchange'
        : 'resize';
    //orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。 resize事件是屏幕缩放时候触发的事件
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) 
            return;
        if (clientWidth >= 1920) {
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
        }
        console.log(docEl.style.fontSize);
    };
    if (!doc.addEventListener) 
        return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function () {
    //页面时间
    $(".nowTimeDiv").html(getNowTime);
    var nowTime = setInterval(function () {
        $(".nowTimeDiv").html(getNowTime)
    }, 1000);

    //库件百分比进度条  根据div属性data-percent控制百分比
    $(".Kcircle").each(function () {
        var percent = $(this).attr("data-percent");
        var degrees = percent * 3.6;
        console.log(percent)
        var rightRot = $(this).find("#load_right span");
        var leftRot = $(this).find("#load_left span");
        if (degrees <= 180) {
            console.log("val" + percent)
            rightRot.css({'transform':'rotate(' + degrees + 'deg)'});
            leftRot.css({'transform':'rotate(0deg)'});
        }
        if (degrees > 180) {
            leftRot.css({'transform':'rotate(' + (degrees - 180) + 'deg)'});
            rightRot.css({'transform':'rotate(180deg)'});
        }
    })

    function getNowTime() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return (year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second)
    }
})