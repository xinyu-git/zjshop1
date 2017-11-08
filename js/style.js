$(function(){
	//页面展示
	function showOpa(obj){
		$(obj).stop().animate({'opacity':1},500)
	}
	function hideOpa(obj){
		$(obj).stop().animate({'opacity':0},500)
	}
	$('.luck_wrap .close').on('click',function(){
		showOpa($('#comMain'))
		hideOpa($('.luck_wrap'))
		$('.luck_wrap').hide();
		$('#comMain').show();
	})
	$('.surprise_box a').on('click',function(){
		showOpa($('.luck_wrap'))
		hideOpa($('#comMain'))
		$('.luck_wrap').show();
		$('#comMain').hide();
	})
})
//锚点
function scroNav(iCount){
    var goto=parseInt($(".contBox .public").eq(iCount).offset().top);
    $("html,body").animate({scrollTop:goto},300);
}
$(".contNav a").click(function(event){
    event.preventDefault();
    var index=$(this).index();
    scroNav($(this).index());
});
//
jQuery.divselect = function(divselectid,inputselectid){
	var inputselect = $(inputselectid);
	$(divselectid+" i").click(function(){
		 var selC=$(this).siblings(".selC");
		 if(selC.css("display")=="none"){
			selC.show();
		 }else{
			selC.hide();
		 }
	});
	$(divselectid+" .selC a").click(function(){
		 var ZoneId=$(this).attr("value");
		 var ZoneTex=$(this).html();
		 $(this).addClass("selectedV").siblings().removeClass("selectedV");
		 $(this).parent().siblings(".sel-ed").val(ZoneId);
		 $(this).parent().siblings("i").html(ZoneTex);
		 $(this).parent().hide();
	});
};
function selectZone(id) {
    var zone = $("#sel-ed").val();
    if (zone == '1500100' || zone == '1500200') {
        $("#_zone").val(zone);
        $("#alertInfo").remove().hide();
        if (id >= 1 && id <= 30) {
            getWotGiftBag(id);
        }
        else if (id >= 31 && id <= 60) {
            getWowsGiftBag(id);
        }
    }
}
$.divselect(".selBox",".sel-ed");
//关闭
function closeDiv(){
    $("#alertInfo").stop(true,true).animate({
        "top":"-100%",
        "opacity":"0"
    },"fast",function(){
        $("#maskLayer,#alertInfo").remove().hide();
    });
}
//遮罩
function maskLayer(){
	$("#maskLayer,#alertInfo").remove();
    var maskLayer="<div id='maskLayer'></div>";
    var alertInfo="<div id='alertInfo'><span class='close'>关闭</span></div>";
    $("body").append(maskLayer,alertInfo);
    $("#maskLayer").height($(document).height()).show();
}
//显示提示信息框
function showInfo(alertHtml){
    maskLayer();
    var _winH=$(window).height();             //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┐
    var _scrollTop=$(document).scrollTop();   //　　　　　　　　　　　├→注意这2断代码的先后顺序
    $("#alertInfo").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
    var _thisDomWidth=$("#alertInfo").width()+parseInt($("#alertInfo").css("border-left-width"))*2;
    var _thisDomHeight=$("#alertInfo").height()+parseInt($("#alertInfo").css("border-left-width"))*2;
    var topD=parseInt(_scrollTop+(_winH-_thisDomHeight)/2);
    var mL=parseInt(_thisDomWidth/2);
    if(_thisDomHeight>=_winH){
        topD=_scrollTop;
        if(_scrollTop+_thisDomHeight>=$(document).height()){
            topD=$(document).height()-_thisDomHeight;
        }
    };
    $("#alertInfo").css({
        "margin-left":"-"+mL+"px",
        "top":topD+"px",
        "margin-left":"-"+mL+"px",
        "opacity":"1"
    })
    //console.log("点击弹层时窗口的高度："+_winH);
}
//改变窗口大小时改变弹出层的位置
function alertInfoPo(){
    var _winHResize=$(window).height();
    var _scrollTopResize=$(document).scrollTop();
	var _thisDomWidthResize=$("#alertInfo").width()+parseInt($("#alertInfo").css("border-left-width"))*2;
    var _thisDomHeightResize=$("#alertInfo").height()+parseInt($("#alertInfo").css("border-left-width"))*2;
    var topResize=parseInt(_scrollTopResize+(_winHResize-_thisDomHeightResize)/2);
    if(_thisDomHeightResize>=_winHResize){
        topResize=_scrollTopResize;
        if(_scrollTopResize+_thisDomHeightResize>=$(document).height()){
            topResize=$(document).height()-_thisDomHeightResize;
        }
    };
	if(topResize>=$("body").height()-_thisDomHeightResize){
		_scrollTopResize=$("body").height()-_thisDomHeightResize;
		topResize=_scrollTopResize-(_winHResize-_thisDomHeightResize)/2;
	}
	$("html,body").css({scrollTop:_scrollTopResize});
    $("#alertInfo").css({
        "top":topResize+"px",
		"margin-left":"-"+(_thisDomWidthResize/2)+"px"
    })
    //console.log("改变大小时窗口的高度："+_winHResize);
	$("#maskLayer").height($("body").height());
}
$(window).on("resize",function(){
    if($("#alertInfo").css("display")=="block") alertInfoPo();
})
$(window).on("scroll",function(){
    if($("#alertInfo").css("display")=="block") alertInfoPo();
})
//关闭
    $(document).on("click","#alertInfo .close",closeDiv);



//选择大区
$('.qiandao').click(function(){
	showInfo('<div class="qu-box"><p>请您选择大区</p><ul class="clearfix">'+
		'<li class="fl">电信南方区</li><li class="fr">联通北方区</li></ul></div>');
});






