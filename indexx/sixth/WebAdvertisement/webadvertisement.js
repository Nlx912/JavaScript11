/* 定义广告参数 */
var ad_width = "100px";
var ad_height = "250px";
var ad_img = "img/ad1.jpg";
var close_img = "img/close.png";

/* 创建广告容器的div */
var ad_left= document.createElement("div");
ad_left.style.width = ad_width;
ad_left.style.height = ad_height;
ad_left.style.padding = "0px";
ad_left.style.position = "absolute";
ad_left.style.left = "30px";
ad_left.style.top = "20px";

/* 创建img元素，并加入到ad_left中 */
var adimg = document.createElement("img");
adimg.src = ad_img;
ad_left.appendChild(adimg);

/* 创建关闭按钮，并加入到ad_left */
var closeing = document.createElement("img");
closeing.src = close_img;
closeing.style.width = "50px";
closeing.style.position = "relative";
closeing.style.left = "50px";
closeing.style.top = "-20px";
closeing.style.cursor = "pointer";
ad_left.appendChild(closeing);

/* 将ad_Left添加到html中 */
document.documentElement.appendChild(ad_left);

/* 实现关闭广告功能 */
closeing.addEventListener("click",function(){
	this.style.display = "none";
	ad_left.style.display ="none";
});

/* 实现对联广告随滚动条移动 */
window.addEventListener("scroll",function(){
	var st1 = document.documentElement.scrollTop || document.body.scroll;
	ad_left.style.top = (st1 + 20) +"px";
	ad_right.style.top = (st1 + 20) +"px";
});

/* 189000833 牛隆祥 */
/* 克隆一个左广告，成为右广告 */
var ad_right = ad_left.cloneNode(true);
document.documentElement.appendChild(ad_right);
var ad_right_close = ad_right.childNodes;
ad_right_close[1].addEventListener("click",function(){
	this.style.display = "none";
	ad_right.style.display = "none";
});
ad_right.style.left = "1220px";
ad_right.style.top = "20px";

/* 右下角广告 */
var bottom_right = document.createElement("div");
bottom_right.style.width = "300px";
bottom_right.style.height = "250px";
bottom_right.style.padding = "0px";
bottom_right.style.position = "absolute";
bottom_right.style.left = "1020px";
bottom_right.style.top = "370px";

/* 创建img元素，并加入到ad_left中 */
var adimg1 = document.createElement("img");
adimg1.src = "img/ad2.jpg" 
bottom_right.appendChild(adimg1);

/* 创建关闭按钮，并加入到ad_left */
var closeing1 = document.createElement("img");
closeing1.src = close_img;
closeing1.style.width = "50px";
closeing1.style.position = "relative";
closeing1.style.left = "250px";
closeing1.style.top = "-255px";
closeing1.style.cursor = "pointer";
bottom_right.appendChild(closeing1);

/* 将ad_Left添加到html中 */
document.documentElement.appendChild(bottom_right);

/* 实现关闭广告功能 */
closeing1.addEventListener("click",function(){
	this.style.display = "none";
	bottom_right.style.display = "none";
});

/* 实现对联广告随滚动条移动 */
window.addEventListener("scroll",function(){
	var st1 = document.documentElement.scrollTop || document.body.scroll;
	bottom_right.style.top = (st1 + 370	) +"px";
});
