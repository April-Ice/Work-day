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
    var nowTime = setInterval(function () {
        $(".nowTimeDiv").html(getNowTime)
    }, 1000)

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

function clickTd(){
    console.log("clicktd");
}