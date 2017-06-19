$(document).ready(function () {

    var adressTable = $(".address-check");
    var payType = $(".pay-type");

    $(adressTable).find(":radio").click(function () {
        $(this).parents('.address-check').find(".radio-active").removeClass("radio-active");
        $(this).parents('tr').addClass("radio-active");
    });

    $(adressTable).find("tr").each(function () {
        $(this).click(function () {
            if ($(window.event.srcElement).hasClass("remove")) {
                if (confirm("确定删除此地址？")) {
                    $(this).remove();
                    $('.address-check').find("tr:first-child").addClass("radio-active");
                    $('.address-check').find("tr:first-child").find(":radio").prop("checked", true);
                }
            }
        });
    });

    $(payType).find(":radio").click(function () {
        console.log("type");
        $(this).parents('.pay-type').find(".pay-active").removeClass("pay-active");
        $(this).parents('.radio-inline').addClass("pay-active");
    });

});