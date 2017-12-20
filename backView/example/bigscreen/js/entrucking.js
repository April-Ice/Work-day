;(function(doc, win, undefined) {
	var docEl = doc.documentElement;
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	//orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。
	//resize事件是屏幕缩放时候触发的事件
	var recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		if(clientWidth>=1920){
			docEl.style.fontSize = '100px';
		}else{
			docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
		}
		console.log(docEl.style.fontSize);
	};
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


$(function(){
	$(".nowTimeDiv").html(getNowTime)

    //查询
    $("#searchConBtn").click(function () {
        $("#searchCon").show("slow");
    });
    //全屏点击事件
    $("#fullScreen").click(function () {
        fullScreen();
    });
    //查询按钮点击
    $("#search").click(function(){

        //TODO 向后台发送ajax请求

        //请求成功后执行
        $("#searchCon").hide("slow");
    });

    //每个30秒执行翻页
    var second = $("#re-second").val();
    $("#re-second").change(function(){
        second = $(this).val();
        //clearInterval(int);
    });
    var int = setInterval(function () {
        second --;
        $("#number").html(second);
        if(second <= 0){
            second = $("#re-second").val();
            nextPage();
        }
    }, 1000);
    function nextPage(){
        console.log("-----------请求数据-----------");
        var totalPage = $("#totalPage").val(); //一共有多少页
        var current = $("#current").val(); //当前页
        var parameter_current = parseInt(current) + 1; //下一页
        if(current == totalPage){ //
            parameter_current = 1;
            $("#current").val(parameter_current); //从第一页重新开始
        }else{
            $("#current").val(parameter_current); //当前页赋值
        }

        //TODO ajax请求获取数据，下一页参数：parameter_current，获取到数据后替换tbody里的内容

        // 在ajax success函数里
        $("#currentNum").html(parameter_current);

    }
})

function getNowTime(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	//console.log(year+'年'+month+'月'+day+'日 '+hour+':'+minute+':'+second);
	return (year+'年'+month+'月'+day+'日 '+hour+':'+minute+':'+second)
}
var nowTime = setInterval(function(){
	$(".nowTimeDiv").html(getNowTime)
},1000)

//全屏事件
function fullScreen() {
    var e = arguments.callee.caller.arguments[0] ||event || window.event ;
    //if(e && e.keyCode == 122){//捕捉F11键盘动作
    e.preventDefault();  //阻止F11默认动作
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;//定义不同浏览器的全屏API
    //执行全屏
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    } else if(typeof window.ActiveXObject != "undefined"){
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript!=null) {
            wscript.SendKeys("{F11}");
        }
    }
    //监听不同浏览器的全屏事件，并件执行相应的代码
    document.addEventListener("webkitfullscreenchange", function() {//
        if (document.webkitIsFullScreen) {
            //全屏后要执行的代码
        }else{
            //退出全屏后执行的代码
        }
    }, false);
    document.addEventListener("fullscreenchange", function() {
        if (document.fullscreen) {
            //全屏后执行的代码
        }else{
            //退出全屏后要执行的代码
        }
    }, false);
    document.addEventListener("mozfullscreenchange", function() {
        if (document.mozFullScreen) {
            //全屏后要执行的代码
        }else{
            //退出全屏后要执行的代码
        }
    }, false);
    document.addEventListener("msfullscreenchange", function() {
        if (document.msFullscreenElement) {
            //全屏后要执行的代码
        }else{
            //退出全屏后要执行的代码
        }
    }, false)
    //}
}