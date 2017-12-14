//左侧菜单的点击事件
//其他页面
var liList=document.querySelectorAll('#substance .left li');
//业务范围页面
var businessList=document.querySelectorAll('#substance .business>div');
//关于我们页面
var aboutList=document.querySelectorAll('#substance .about>div');

var rightList=document.querySelectorAll('#substance .right');
$('.left').on('click','li',function(){
    $(this).addClass('active').siblings('.active').removeClass();
    //获取当前li的下标
    for(var i=0;i<liList.length;i++){
        if($(liList[i]).hasClass('active')){
            //右侧列表的显示
            $(rightList[i]).addClass('active').siblings().removeClass('active');
            $(businessList[i]).addClass('active').siblings().removeClass('active');
            $(aboutList[i]).addClass('active').siblings().removeClass('active');
        }
    }
});





















