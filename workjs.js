






window.onload=function(){
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
	var f03=document.getElementById('f03');
	var f02=document.getElementById('f02');
	var rig7=document.getElementById('rig7');
	var rig8=document.getElementById('rig8');
	var rig14=document.getElementById('rig14');
	var rig12=document.getElementById('rig12');
	var rig11=document.getElementById('rig11');
	var rig10=document.getElementById('rig10');
	var bu2=document.getElementById('bu2');
	var bu3=document.getElementById('bu3');
	var bu4=document.getElementById('bu4');
	var bu5=document.getElementById('bu5');
	var meng=document.getElementById('meng');
	var box=document.getElementById("box");
  	var img1=document.getElementById("img1");
  	var slider=document.getElementById("slider");
  	var img2=document.getElementById("img2");
  	var Bimg=document.getElementById("Bimg");
  	var Limg=img1.firstElementChild;
  	img1.onmouseover=function(){
  			slider.style.display="block";
  			img2.style.display="block";
  		}
  	img1.onmouseout=function(){
  			slider.style.display="none";
  			img2.style.display="none";
  		}
  	img1.onmousemove=function(ev){
  			var ev=ev||window.event;
  			var left=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
  			var top=ev.clientY-box.offsetTop-slider.offsetHeight/2;
  			var maxleft=img1.offsetWidth-slider.offsetWidth;
  			var maxtop=img1.offsetHeight-slider.offsetHeight;
  			left=left>maxleft?maxleft:left<0?0:left;
  			top=top>maxtop?maxtop:top<0?0:top;
  			slider.style.left=left+"px";
  			slider.style.top=top+"px";
  			var w=left/maxleft;
  			var h=top/maxtop;
  			var bimgleft=img2.offsetWidth-Bimg.offsetWidth;
  			var bimgtop=img2.offsetHeight-Bimg.offsetHeight;
  			Bimg.style.left=w*bimgleft+"px";
  			Bimg.style.top=h*bimgtop+"px";
  			
  	}

	bu2.onclick=function(){
		meng.style.display="block";
	}
	bu3.onclick=BB;
	bu4.onclick=BB;
	bu5.onclick=BB;
	function BB(){
		meng.style.display="none";
	}

	rig12.onclick=function(){
		if(parseInt(rig11.value)==5){
			rig12.style.cursor="not-allowed";
		}
		else{
			rig12.style.cursor="pointer";
			rig11.value=parseInt(rig11.value)+1;
		}
	}
	rig10.onclick=function(){
		if(parseInt(rig11.value)==1){
			rig10.style.cursor="not-allowed";
		}
		else{
			rig10.style.cursor="pointer";
			rig11.value=parseInt(rig11.value)-1;
		}
	}

	rig7.onclick=function(){
		if(rig8.hasAttribute('class')){
			rig8.removeAttribute('class');
		}
		rig7.setAttribute('class','r7r8');
		rig14.innerHTML="\"150ml\"";
	}
	rig8.onclick=function(){
		if(rig7.hasAttribute('class')){
			rig7.removeAttribute('class');
		}
		rig8.setAttribute('class','r7r8');
		rig14.innerHTML="\"200ml\"";
	}
	
	f02.onmouseover=function(){
		f03.style.border="0";
		f02.style.border="1px solid #ff9003";
		Limg.src="img/pp0.jpeg";
		Bimg.src="img/p0.jpeg";
	}
	f03.onmouseover=function(){
		f02.style.border="0";
		f03.style.border="1px solid #ff9003";
		Limg.src="img/pp1.jpeg";
		Bimg.src="img/p1.jpeg";
	}
}