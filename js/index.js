/**
 * 加载头部和尾部
 */
$("#nav").load("data/nav.php",function(){
   var tit=$('#substance>div.left>h3').html();
   var as=$('ul.nav.navbar-nav li').children();
   for(var i=0;i<as.length;i++){
      if(as[i].innerHTML==tit)
      $(as[i]).parent().addClass('active').siblings().removeClass();
   }
});
$("#footer").load("data/footer.php");

/**
 * 信誉条的点击事件
 * @type {Element}
 */
var retract=document.querySelector('#reputation .Authentication p');
$(retract).click(function(){
   $('#reputation') .css('left','100%');
});
//右侧
$('#credit').click(function(){
   $(this).next().css('left','0');
});

/**
 * 主页面a元素的点击跳转事件
 * @type {NodeList}
 */
var a=document.querySelectorAll('#content a');
$(a).click(function(){
   var id=$(this).attr('href').split('l')[1];
   console.log($(this).attr('href'));
   //console.log($(#aDesign));
   $('#aDesign').addClass('active').siblings().removeClass('active');
});


/**
 * 组图
 * @type {NodeList}
 */
//组图上面index
var liList=document.querySelectorAll('#project .index li');
var itemList=document.querySelectorAll('#myCarousel div.item');
$(liList).click(function(){
   $(this).children().addClass('active');
   $(this).siblings().children().removeClass('active');
   var i=$(this).index();
   $(itemList[i]).addClass('active').siblings().removeClass('active');
});
//项目实例组图的轮播事件
var spanList=document.querySelectorAll('#project .index li span');
//得到有.active的div的下标
$('#myCarousel').on('slide.bs.carousel', function (event) {
   var  $hoder = $('#myCarousel').find('.item'), $items = $(event.relatedTarget);
   //getIndex就是轮播到当前位置的索引
   var index= $hoder.index($items);
   $(spanList[index]).addClass('active').parent().siblings().children('.active').removeClass();
});

