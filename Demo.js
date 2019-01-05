window.onload=function(){
			var bd11=document.getElementsByClassName('bd1')[0];
			cover1.style.backgroundColor="white";
			window.onscroll=function(){
				var st=document.documentElement.scrollTop || document.body.scrollTop;
				if(st>180){
					bd11.style.position='fixed'
				}
				else{
					bd11.style.position='static'
				}
			}
		}
var d21 = document.getElementById('d21');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		d21.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		d21.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800 *index},function(){
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
var d32=document.getElementById("d32");
var szf1=document.getElementById("szf1");
var speed=1;
	szf1.timer=setInterval(function(){
		var now=parseInt(getStyle(szf1,"top"));
		szf1.style.top=now-speed+'px';
		if(now===-338){
			szf1.style.top='0px';
		}
	},100);
d32.onmouseout=function(){
	clearInterval(szf1.timer);
	var speed=1;
	szf1.timer=setInterval(function(){
		var now=parseInt(getStyle(szf1,"top"));
		szf1.style.top=now-speed+'px';
	},100);
}
d32.onmouseover=function(){
	clearInterval(szf1.timer);
}
for(var i=0;i<szf1.children.length;i++){
	szf1.children[i].style.top=26*i+'px';
}
var d333=document.getElementById("d333");
var spn=d333.lastElementChild;
var sel=d333.firstElementChild;
spn.innerHTML='￥'+10;
sel.onclick=function(){
	spn.innerHTML='￥'+sel.value;
}
window.onload=function(){
	var cover=document.getElementById("bd1");
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>135){
			cover.style.position='fixed'
		}else{
			cover.style.position='static'
		}
	}
}
var pf=document.getElementsByClassName("pf");
console.log(pf);
var ofo2=document.getElementById("ofo2");
var ppf2=document.getElementById("ppf2");
pf[0].onmouseover=function(){
	animate(pf[0],{left:1400});
}
pf[0].onmouseout=function(){
	animate(pf[0],{left:1480});
}
pf[1].onmouseover=function(){
	animate(pf[1],{left:1400});
}
pf[1].onmouseout=function(){
	animate(pf[1],{left:1480});
}
pf[2].onmouseover=function(){
	animate(pf[2],{left:1400});
	ppf2.style.display="none";
	ofo2.style.display="inline-block";
}
pf[2].onmouseout=function(){
	animate(pf[2],{left:1480});
	ppf2.style.display="inline-block";
	ofo2.style.display="none";
}
pf[3].onmouseover=function(){
	animate(pf[3],{left:1400});
}
pf[3].onmouseout=function(){
	animate(pf[3],{left:1480});
}