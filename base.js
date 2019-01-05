function getStyle(obj,attr) {
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}esle{
		return getComputedStyle(obj,null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var isStop=true;
		for(var attr in json){
			var now;
			if(attr=='opacity'){
				now=parseInt(getStyle(obj,attr)*100);
			}esle{
				now=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-now)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			var cur=now+speed;
			if(attr=='opacity'){
				obj.style[attr]=cur/100;
			}else{
				obj.style[attr]=cur+'px';
			}
			if(obj.style[attr]!=cur){
				isStp=false;
			}
		}
		if(isStop){clearInterval(obj.timer;callback&&callback())}
	},30)
}