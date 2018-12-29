function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var now=-29;
function rowrow(obj){
	obj.timer=setInterval(function(){
		var nno=parseInt(getStyle(obj,'top'));
		nno=nno-1;
		obj.style.top=nno+"px";
		if(nno==now){
			var x=(now/-29)%13;
			if(x==0){
				x=13;
			}
			now=now-29;
			var mrrchild=obj.children;
			var xx=document.createTextNode("[公告] 帮购及VIP服务调整"+x);
			var li=document.createElement('li');
			li.appendChild(xx);
			obj.appendChild(li);
			//console.log(mrrchild[0].firstChild.nodeValue);
			obj.style.top=nno+"px";
		}
	},30)
}
window.onload=function(){
		var mr2= document.getElementById('mr2');
		var mrchild=mr2.children;
		var box = document.getElementById('box');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		rowrow(mr2);
		mr2.onmouseover=function(){
			clearInterval(mr2.timer);
		}
		mr2.onmouseout=function(){
			rowrow(mr2);
		}
		box.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			(function(i){
				oNavlist[i].onclick = function(){
					index = i+1;
					navmove();
					animate(slider,{left:-800*index});
				}
			})(i);
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-4800px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);
		//轮播结束
		window.onscroll= function() {
		var cover=document.getElementById('header');
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>125){
			cover.style.position='fixed';
		}
		else{
			cover.style.position='static';
		}
	}
	//动画1
	var inn=document.getElementById('inn');
	var inpp1=document.getElementById('inpp1');
	var txt=inpp1.firstChild;
	inn.onclick=function () {
		inpp1.innerHTML='￥'+inn.value;
	}
	//动画2
	var le1=document.getElementById('le1');
	var le2=document.getElementById('le2');
	var le3=document.getElementById('le3');
	var le4=document.getElementById('le4');
	var le5=document.getElementById('le5');
	var le6=document.getElementById('le6');
	var le7=document.getElementById('le7');
	var le8=document.getElementById('le8');
	le1.onmouseover=function(){
		animate(le1,{width:123});
	}
	le1.onmouseout=function(){
		animate(le1,{width:40});
	}
	le4.onmouseover=function(){
		animate(le4,{width:123});
	}
	le4.onmouseout=function(){
		animate(le4,{width:40});
	}
	le5.onmouseover=function(){
		le7.src="img/erwei.png";
		le7.style.margin="0 0 0 20px";
		animate(le5,{width:123});
	}
	le5.onmouseout=function(){
		animate(le5,{width:40},function(){
			le7.src="img/serwei.png";
			le7.style.margin="55px 0 0 12px";
		});
		
	}
	le8.onmouseover=function(){
		animate(le8,{width:123});
	}
	le8.onmouseout=function(){
		animate(le8,{width:40});
	}

}
