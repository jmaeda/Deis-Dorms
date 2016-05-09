/*!
 * jQCloud Plugin for jQuery
 *
 * Version 1.0.4
 *
 * Copyright 2011, Luca Ongaro
 * Licensed under the MIT license.
 *
 * Date: 2013-05-09 18:54:22 +0200
*/
!function(t){"use strict";t.fn.jQCloud=function(e,i){var n=this,h=n.attr("id")||Math.floor(1e6*Math.random()).toString(36),r={width:n.width(),height:n.height(),center:{x:(i&&i.width?i.width:n.width())/2,y:(i&&i.height?i.height:n.height())/2},delayedMode:e.length>50,shape:!1,encodeURI:!0,removeOverflowing:!0};i=t.extend(r,i||{}),n.addClass("jqcloud").width(i.width).height(i.height),"static"===n.css("position")&&n.css("position","relative");var o=function(){for(var r=function(t,e){var i=function(t,e){return Math.abs(2*t.offsetLeft+t.offsetWidth-2*e.offsetLeft-e.offsetWidth)<t.offsetWidth+e.offsetWidth&&Math.abs(2*t.offsetTop+t.offsetHeight-2*e.offsetTop-e.offsetHeight)<t.offsetHeight+e.offsetHeight},n=0;for(n=0;n<e.length;n++)if(i(t,e[n]))return!0;return!1},o=0;o<e.length;o++)e[o].weight=parseFloat(e[o].weight,10);e.sort(function(t,e){return t.weight<e.weight?1:t.weight>e.weight?-1:0});var a="rectangular"===i.shape?18:2,d=[],s=i.width/i.height,f=function(o,f){var l,c=h+"_word_"+o,g=6.28*Math.random(),u=0,w=0,p=0,m=5,v="",M="";if(f.html=t.extend(f.html,{id:c}),f.html&&f.html["class"]&&(v=f.html["class"],delete f.html["class"]),e[0].weight>e[e.length-1].weight&&(m=Math.round((f.weight-e[e.length-1].weight)/(e[0].weight-e[e.length-1].weight)*9)+1),l=t("<span>").attr(f.html).addClass("w"+m+" "+v),f.link?("string"==typeof f.link&&(f.link={href:f.link}),i.encodeURI&&(f.link=t.extend(f.link,{href:encodeURI(f.link.href).replace(/'/g,"%27")})),M=t("<a>").attr(f.link).text(f.text)):M=f.text,l.append(M),f.handlers)for(var x in f.handlers)f.handlers.hasOwnProperty(x)&&"function"==typeof f.handlers[x]&&t(l).bind(x,f.handlers[x]);n.append(l);var k=l.width(),y=l.height(),R=i.center.x-k/2,b=i.center.y-y/2,C=l[0].style;for(C.position="absolute",C.left=R+"px",C.top=b+"px";r(l[0],d);){if("rectangular"===i.shape)switch(w++,w*a>(1+Math.floor(p/2))*a*(p%4%2===0?1:s)&&(w=0,p++),p%4){case 1:R+=a*s+2*Math.random();break;case 2:b-=a+2*Math.random();break;case 3:R-=a*s+2*Math.random();break;case 0:b+=a+2*Math.random()}else u+=a,g+=(o%2===0?1:-1)*a,R=i.center.x-k/2+u*Math.cos(g)*s,b=i.center.y+u*Math.sin(g)-y/2;C.left=R+"px",C.top=b+"px"}return i.removeOverflowing&&(0>R||0>b||R+k>i.width||b+y>i.height)?void l.remove():(d.push(l[0]),void(t.isFunction(f.afterWordRender)&&f.afterWordRender.call(l)))},l=function(h){return h=h||0,n.is(":visible")?void(h<e.length?(f(h,e[h]),setTimeout(function(){l(h+1)},10)):t.isFunction(i.afterCloudRender)&&i.afterCloudRender.call(n)):void setTimeout(function(){l(h)},10)};i.delayedMode?l():(t.each(e,f),t.isFunction(i.afterCloudRender)&&i.afterCloudRender.call(n))};return setTimeout(function(){o()},10),n}}(jQuery);