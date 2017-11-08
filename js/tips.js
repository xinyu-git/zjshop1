var Tips; if (!Tips) Tips = {};
/**
 * 显示 提示框
 */
Tips.showTips = function(msg){
	$("#tips").html(msg);
	showHide('#fade_div','.tishi_pop');
}
/**
 * 隐藏 提示框
 */
Tips.hideTips = function(){
	hide('#fade_div','.tishi_pop');
}
/**
 * 显示 登陆框
 */
Tips.showLogin = function(){
	Tips.hideTips();
	//显示登陆框的时候刷新验证码
	$("#logmsg").text("");
	//Util.verifyImg();
	showHide('#fade_div','.log_pop');
}
/**
 * 隐藏 登陆框
 */
Tips.hideLogin = function (){
	hide('#fade_div','.log_pop');
}

/**
 * 显示 登陆框2
 */
Tips.showLoginTwo = function(){
	//显示登陆框的时候刷新验证码
	//Util.verifyImg();
	showHide('#fade_div','.loginbg');
}
/**
 * 隐藏 登陆框
 */
Tips.hideLoginTwo = function (){
	hide('#fade_div','.loginbg');
}
/**
 * 显示 确认框
 */
Tips.showConfirm = function (obj){
	$(obj).addClass("curr_confirm").siblings().removeClass("curr_confirm");
	showHide('#fade_div','.confirmation_box');
}

/**
 * 隐藏 确认框
 */
Tips.hideConfirm = function (){
	hide('#fade_div','.confirmation_box');
}
/**
 * 显示 日志框
 */
Tips.showLog = function(){
	showHide('#fade_div','.example4');
}

/**
 * 隐藏 日志框
 */
Tips.hideLog = function (){
	hide('#fade_div','.example4');
}
/**
 * 显示 正在处理
 */
Tips.showProcess = function(){
	showHide('.black_overlay2','.process');
}

/**
 * 隐藏 正在处理
 */
Tips.hideProcess = function (){
	hide('.black_overlay2','.process');
}

/**
 * 显示 领取弗林特
 */
Tips.showFlt = function(){
	showHide('#fade_div','.flt_lq');
}

/**
 * 隐藏 领取弗林特
 */
Tips.hideFlt = function (){
	hide('#fade_div','.flt_lq');
}





/**
 * 显示 抽奖2
 */
Tips.showCj = function(obj){
	$(".cj2 li").removeClass('random_current');
	var bx = $(obj).attr('bx');
	_index_bx= bx;
	showHide('#fade_div','.zp1');
}

/**
 * 隐藏 抽奖2
 */
Tips.hideCj = function (){
	hide('#fade_div','.zp1');
}




/**
 * 隐藏 抽奖2
 */
Tips.hideZp_img = function (){
	$("#maskLayer,.zp_img").remove().hide();
}



/**
 * 显示 抽奖20 星
 */
Tips.showCj2 = function(obj){
	var bx = $(obj).attr('bx');
	_index_bx= bx;
	showHide('#fade_div','.zp2');
}

/**
 * 隐藏 抽奖20 星
 */
Tips.hideCj2 = function (){
	hide('#fade_div','.zp2');
}

/**
 * 显示 抽奖30 星
 */
Tips.showCj3 = function(obj){
	var bx = $(obj).attr('bx');
	_index_bx= bx;
	showHide('#fade_div','.zp3');
}

/**
 * 隐藏 抽奖30 星
 */
Tips.hideCj3 = function (){
	hide('#fade_div','.zp3');
}

/**
 * 显示 抽奖40 星
 */
Tips.showCj4 = function(obj){
	var bx = $(obj).attr('bx');
	_index_bx= bx;
	showHide('#fade_div','.zp4');
}

/**
 * 隐藏 抽奖40 星
 */
Tips.hideCj4 = function (){
	hide('#fade_div','.zp4');
}

/**
 * 显示 抽奖50 星
 */
Tips.showCj5 = function(obj){
	var bx = $(obj).attr('bx');
	_index_bx= bx;
	showHide('#fade_div','.zp5');
}

/**
 * 隐藏 抽奖40 星
 */
Tips.hideCj5 = function (){
	hide('#fade_div','.zp5');
}

/**
 * 显示 2次确认框
 */
Tips.showConfirm2 = function (msg){
	$("#confi").html(msg);
	showHide('#fade_div','.confirmation_box_two');
}

/**
 * 隐藏 2次 确认框
 */
Tips.hideConfirm2 = function (){
	hide('#fade_div','.confirmation_box_two');
}