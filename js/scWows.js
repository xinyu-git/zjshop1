/*wlo:Cflower*/  

var isLoginFlag=false;


function getCookie(c_name){
	if(document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=")
	    if(c_start!=-1){ 
			c_start=c_start + c_name.length+1 
			c_end=document.cookie.indexOf(";",c_start)
			if(c_end==-1) c_end=document.cookie.length
			return unescape(document.cookie.substring(c_start,c_end))
	    }	
	}
	return ""
}

function logIn(){
	window.location.href="http://mall.kongzhong.com/m/login?rtn="+window.location.href;
	return;
}

function logOut(){
	window.location.href="https://sso.kongzhong.com/logout?service="+window.location.href;
	return;
}

  
function isLogin(){ 
	var getcookie = getCookie("UDT-KZG");
	if (getcookie != ""){
		isLoginFlag=true;
		$("#loginname").html(getcookie);
		$(".login_box").show();
		$(".go_loadin").hide();
	}
}  
$(function(){
	$(".getBtn1").click(function(){
		if(isLoginFlag){
			var yhq=$(this).attr("yhq");
			if(!yhq){
				return false;
			}
			goTogogo(yhq);
		}else{
			logIn();
		}
	});
	isLogin();
})

var http1="http://hd.wows.kongzhong.com/sc1111";

var SUBMITTING = 0;
function goTogogo(yhq){
	if(SUBMITTING == 1){
		return false;
	}
	SUBMITTING = 1;
	$.ajax({
		url : http1,
		type : "get",
		dataType : "jsonp",
		data : {
			op : "sign",
			yhq:yhq,
			ids:123
		},
		jsonp : "jsonpcallback",
		success : function(json) {
			SUBMITTING = 0;
			Tips.showTips(json.msg);
		}
	});
}
