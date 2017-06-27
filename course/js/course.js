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

    var ppt_html = template('tpl-ppt', {
        "info": "order_info.order_data",
        "show": "hello"
    });
    $("#ppt_preview").html(ppt_html);

    var course_html = template('tpl_course', {
        "cover": './img/course.jpg',
        "favnum": 520,
        "title": '深度讲解Linux企业级集群实现方案【马哥linux视频课程】',
        "brief": '适用人群： Linux初学者、Linux爱好者、系统管理员。',
        "discount": '6折',
        "acdate": '7.1-7.7',
        "lectures": 14,
        "hour": '6小时8分钟',
        "time": '2014-07-29',
        "countprice": 119,
    });
    $("#couse_review").html(course_html);

    var course2_html = template('tpl_course2', {
        "countprice": 119,
    });
    $("#couse2_review").html(course2_html);

    var about_html = template('tpl_about', {
        "abouts": [
            {
                img: './img/about1.jpg',
                title: '拯救未来1：名师三人行联手打造最强系统/网络视频课程专题',
                time: '7.1-7.7',
                activity: '折上8折',
                count: 5641,
            },
            {
                img: './img/about1.jpg',
                title: '拯救未来2：名师三人行联手打造最强系统/网络视频课程专题',
                time: '7.1-7.7',
                activity: '折上8折',
                count: 5643,
            },
            {
                img: './img/about1.jpg',
                title: '拯救未来3：名师三人行联手打造最强系统/网络视频课程专题',
                time: '7.1-7.7',
                activity: '折上8折',
                count: 5645,
            },
        ],
    });
    $("#about_review").html(about_html);

    var introtab1_html = template('tpl_introtab1', {
        "target": '本课程深入介绍了企业级集群种类，负载均衡、高可用集群常见解决方案，其中负载均衡集群从DNS负载均衡到后端web负载均衡',
        "audience": 'Linux初学者、Linux爱好者、系统管理员。',
        "introduction": '<p>本课程深入介绍了企业级集群种类，负载均衡、高可用集群常见解决方案，其中负载均衡集群从DNS负载均衡到后端web负载均衡，讲解过程中介绍了常见的负载均衡模型以及负载均衡调度算法，涉及到LVS、F5、Haproxy、Nginx、Varnish等对比，以及企业级存储方案的各自不同使用场景。</p>'
    });
    $("#introtab1_review").html(introtab1_html);

    var introtab2_html = template('tpl_introtab2', {
        "catalog": [
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '[免费观看]',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '[免费观看]',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '[免费观看]',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '[免费观看]',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '[免费观看]',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '[免费观看]',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '[免费观看]',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },
            {
                title: '企业级集群方案演变、从DNS负载均衡到专业负载均衡应用',
                free: '',
                time: '47:00',
                intro: '介绍了早期DNS负载均衡方式随之慢慢演变成专业的负载均衡方案，深入讲解均衡原理和相关细节，如持久链接、Session同步、健康状态检测等相关机制。 如果课程内容对你有帮助，请进行评价来支持马哥教育，你的支持是我们前进的最大动力！',
            },

        ],
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
        "arlist": [
            {
                avatar: './img/student.jpg',
                nick_name: 'ljl603',
                consistent_score: 5,
                easy_score: 5,
                answer_score: 5,
                time: '2017-06-16 21:00',
                about_review: '讲解思路清晰，购买得很有价值',
            },
            {
                avatar: './img/student.jpg',
                nick_name: 'tianchaoinn',
                consistent_score: 5,
                easy_score: 5,
                answer_score: 5,
                time: '2017-06-16 21:00',
                about_review: '对集群的讲解非常详细，通俗易懂，是马哥课程的精髓之一。',
            },
            {
                avatar: './img/student.jpg',
                nick_name: '张_宝龙',
                consistent_score: 5,
                easy_score: 5,
                answer_score: 5,
                time: '2017-06-16 21:00',
                about_review: '老师讲的特别好，非常实用',
            },
            {
                avatar: './img/student.jpg',
                nick_name: 'gzy3836',
                consistent_score: 5,
                easy_score: 5,
                answer_score: 5,
                time: '2017-06-16 21:00',
                about_review: '之其然更只其所以然，顶马哥',
            },
        ]
    });
    $("#introtab4_review").html(introtab4_html);

    var interest_html = template('tpl_interest', {
        "interest_list": [
            {
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
            number: 30334,
        },
        "studentlist": [
            {
                avatar: './img/student.jpg',
                name: 'onlyjyf',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: 'bobo87',
                vip: 1
            },
            {
                avatar: './img/student.jpg',
                name: 'qq404730028',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: 'onlyjyf',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: 'onlyjyf',
                vip: 1
            },
            {
                avatar: './img/student.jpg',
                name: 'qq404730028',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: 'sickles',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: 'onlyjyf',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: '2914712111',
                vip: 1
            },
            {
                avatar: './img/student.jpg',
                name: 'xbw123',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: 'jinchuan_127',
                vip: ''
            },
            {
                avatar: './img/student.jpg',
                name: 'bobo87',
                vip: ''
            },
        ],
        "books": [
            {
                cover: './img/book1.gif',
                title: '跟老男孩学Linux运维：Web集群实战',
                author: '老男孩',
                public: '',
                price: 99
            },
            {
                cover: './img/book2.gif',
                title: 'Windows内核设计思想',
                author: '陈树宝',
                public: '博文视点出版社',
                price: 108
            },

        ]
    });
    $("#teacher1_review").html(teacher1_html);

});