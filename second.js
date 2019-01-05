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

var di1=document.getElementById("di1");
var di42=document.getElementById("di42");
di1.children[1].onclick=function(){
    di1.children[1].className='hongkuang';
    di1.children[2].className='';
    di1.children[1].children[0].className='duigou';
    di1.children[2].children[0].className='';
    di42.innerHTML='"150ml"'
}
di1.children[2].onclick=function(){
    di1.children[2].className='hongkuang';
    di1.children[1].className='';
    di1.children[2].children[0].className='duigou';
    di1.children[1].children[0].className='';
    di42.innerHTML='"200ml"';
}

var di2=document.getElementById("di2");
di2.children[1].children[0].onclick=function(){
    di2.children[1].children[2].style.cursor='pointer';
    if(parseInt(di2.children[1].children[1].value)>1){
        di2.children[1].children[1].value=parseInt(di2.children[1].children[1].value)-1;
    }
    if(parseInt(di2.children[1].children[1].value)===1){
        di2.children[1].children[0].style.cursor='not-allowed';
    }else{
        di2.children[1].children[0].style.cursor='pointer';
    }
}
di2.children[1].children[2].onclick=function(){
    di2.children[1].children[0].style.cursor='pointer';
    if(parseInt(di2.children[1].children[1].value)<5){
        di2.children[1].children[1].value=parseInt(di2.children[1].children[1].value)+1;
    }
    if(parseInt(di2.children[1].children[1].value)===5){
        di2.children[1].children[2].style.cursor='not-allowed';
    }else{
        di2.children[1].children[2].style.cursor='pointer';
    }
}

var zuida=document.getElementById("zuida");
var zd1=document.getElementById("zd1");
var di52=document.getElementById("di52");
di52.onclick=function(){
    zuida.style.display='inline';
    zd1.style.display='inline';
}
zd1.children[0].children[0].onclick=function(){
    zuida.style.display='none';
    zd1.style.display='none';
}
zd1.children[2].children[0].onclick=function(){
    zuida.style.display='none';
    zd1.style.display='none';
}
zd1.children[2].children[1].onclick=function(){
    zuida.style.display='none';
    zd1.style.display='none';
}

var ff12=document.getElementById("ff12");
var ff11=document.getElementById("ff11");
ff12.children[0].onclick=function(){
    ff12.children[1].style.borderColor='#ff9003';
    ff12.children[1].style.borderStyle='solid';
    ff12.children[1].style.borderWidth='2px';
    ff12.children[2].style.borderColor='white';
    ff12.children[2].style.borderStyle='none';
    ff12.children[2].style.borderWidth='0px';
    ff11.children[1].src='img/fangshai1.jpeg';
}
ff12.children[1].onmouseover=function(){
    ff12.children[1].style.borderColor='#ff9003';
    ff12.children[1].style.borderStyle='solid';
    ff12.children[1].style.borderWidth='2px';
    ff12.children[2].style.borderColor='white';
    ff12.children[2].style.borderStyle='none';
    ff12.children[2].style.borderWidth='0px';
    ff11.children[1].src='img/fangshai1.jpeg';
    console.log(ff11.children[0].src);
}
ff12.children[2].onmouseover=function(){
    ff12.children[2].style.borderColor='#ff9003';
    ff12.children[2].style.borderStyle='solid';
    ff12.children[2].style.borderWidth='2px';
    ff12.children[1].style.borderColor='white';
    ff12.children[1].style.borderStyle='none';
    ff12.children[1].style.borderWidth='0px';
    ff11.children[1].src='img/fangshai2.jpeg';
    console.log(ff11.children[0].src);
}
ff12.children[3].onclick=function(){
    ff12.children[2].style.borderColor='#ff9003';
    ff12.children[2].style.borderStyle='solid';
    ff12.children[2].style.borderWidth='2px';
    ff12.children[1].style.borderColor='white';
    ff12.children[1].style.borderStyle='none';
    ff12.children[1].style.borderWidth='0px';
    ff11.children[1].src='img/fangshai2.jpeg';
}

var ff1=document.getElementById("ff1");
var big=document.getElementById("big");
var slider=document.getElementById("slider");
var ff2=document.getElementById("ff2");
var x;
var y;
ff11.onmouseover=function(){
    big.style.display='inline';
    slider.style.display='inline';
    big.children[0].src=ff11.children[1].src;
}
ff11.onmouseout=function(){
    slider.style.display='none';
    big.style.display='none';
}
ff11.onmousemove=function(ev){
    var ev=ev||event;
    var oL=ev.clientX-slider.offsetWidth/2-ff11.offsetLeft-ff1.offsetLeft;
	var oT=ev.clientY-slider.offsetHeight/2-ff11.offsetTop-ff1.offsetTop;
    var oMaxw=ff11.offsetWidth-slider.offsetWidth;
	var oMaxh=ff11.offsetHeight-slider.offsetHeight;
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left = oL+'px';
	slider.style.top = oT+'px' ;
	var oBmaxw = big.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = big.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
}