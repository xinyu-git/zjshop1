// JavaScript Document


var index=1,           //当前亮区位置
prevIndex=8,          //前一位置
Speed=300,           //初始速度
Time,            //定义对象
arr_length = 8; //GetSide(3,3),         //初始化数组
EndIndex=1,           //决定在哪一格变慢
cycle=0,           //转动圈数   
EndCycle=3,           //计算圈数
flagG=false,           //结束转动标志
random_num=4     //中奖数,这里是后台传来的中奖数1--8之间（包括1和8），每次抽奖改变这个数
quick=0,           //加速
arr_prize=["100元商城优惠券","300元商城优惠券","50万银币","5个龙旗","SteelSeries赛睿 M800机械键盘","D系8级战列舰 提尔皮茨","3天高级帐号","5元商城优惠券"];      //对应的奖品详情
   
function StartGame(){//如果条件满足
  $(".luck_list dd").removeClass("active"); //取消选中
   $("body").append("<div class='cjIng'></div>");
   //random_num = parseInt($("#txtnum").val());//
   //random_num =12;//这里是传来的中奖数1--12之间（包括1和12）
   //index=1; //再来一次,从1开始
   cycle=0;
   flagG=false;
   //EndIndex=Math.floor(Math.random()*8);
   if(random_num>5) {
      EndIndex = random_num - 5; //前5格开始变慢
   } else {
      EndIndex = random_num + 8 - 5; //前5格开始变慢
   }
   //EndCycle=Math.floor(Math.random()*3);
   Time = setInterval(Star,Speed);
}
function Star(num){
    //跑马灯变速
    if(flagG==false){
      //走五格开始加速
      if(quick==5){
         clearInterval(Time);
         Speed=50;
         Time=setInterval(Star,Speed);
      }
      //跑N圈减速
      if(cycle==EndCycle+1 && index-1==EndIndex){
         clearInterval(Time);
         Speed=300;
         flagG=true;         //触发结束
         Time=setInterval(Star,Speed);
      }
    }
   
    if(index>arr_length){
        index=1;
        cycle++;
    }
   
   //结束转动并选中号码
   if(flagG==true && index==parseInt(random_num)){ 
      quick=0;
      clearInterval(Time);
	  $(".cjIng").remove();
	  showInfo("<div class='tsInfo'>"
				+" <div class='luck_pic1'><img src='images/luck"+(random_num)+".png' /></div>"
				+" <div class='p'>恭喜您获得 "+arr_prize[random_num-1]+"</div>"
				+"</div>");
   }
   $("#luck"+index).addClass('active'); //设置当前选中样式
   if(index>1){
       prevIndex=index-1;
   }else{
       prevIndex=arr_length;
   }
   $("#luck"+prevIndex).removeClass('active'); //取消上次选择样式 
   index++;
   quick++;
}



