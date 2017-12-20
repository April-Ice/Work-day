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

    //echart图表--完成数
    var colors = ['#5793f3', '#fe0000'];
    var option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 60,
            data: [
                '车辆数', '运单数'
            ],
            right: '40%',
            top: 20,
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            // top: 50,
            // bottom: 40
            left: '5%',
            right: '5%',
            bottom: '15%',
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: ' #fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '运单数'
                        }
                    }
                },
                data: [
                    "8:00",
                    "10:00",
                    "12:00",
                    "2:00",
                    "4:00",
                    "6:00"
                ]
            }, {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#132760'
                    }
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '车辆数'
                        }
                    }
                },
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: ' #fff'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#132760'
                    }
                }
            }
        ],
        series: [
            {
                name: '运单数',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                symbol: 'circle',
                symbolSize: 4,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                data: [
                    2.6,
                    5.9,
                    9.0,
                    26.4,
                    28.7,
                    0.7,
                    48.7,
                    18.8,
                    6.0,
                    2.3
                ]
            }, {
                name: '车辆数',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 4,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                data: [
                    3.9,
                    5.9,
                    11.1,
                    68.7,
                    8.3,
                    0.7
                ]
            }
        ]
    };
    var myChart = echarts.init($("#finish").get(0), "macarons");
    myChart.setOption(option);

    var option2 = {
        color: ['#4882ff'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    '张姐',
                    '王功伟',
                    '张旭',
                    '李小东',
                    '刘宏伟',
                    '张倩'
                ],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: ' #fff'
                    }
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: ' #fff'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#132760'
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                data: [
                    200,
                    400,
                    700,
                    500,
                    700,
                    400
                ]
            }
        ]
    };
    var myChart2 = echarts.init($("#person").get(0), "macarons");
    myChart2.setOption(option2);

    window.onresize = function () {
        myChart.resize();
        myChart2.resize();
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
