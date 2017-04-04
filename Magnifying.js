/**
 * Created by wx on 17/4/4.
 */
var Magnifying = function () {
    this.wrap = null;
    this.hander=null;
    this.bigWrap = null;
    this.bigImg = null;
    this.mark = null;
    this.settings = {
        // 默认参数,定义弹框的尺寸大小
        w:180,
        h:180,
        bw:500,
        bh:500
    }
};
Magnifying.prototype = {
    constructor:Magnifying,
    init: function (settings) {
        this.extend(this.settings,settings);
        this.wrap = document.getElementsByClassName(this.settings.wrap)[0];
        this.wrap.style.width = this.settings.w + 'px';
        this.wrap.style.height = this.settings.h+ 'px';
        this.hander = document.getElementsByClassName(this.settings.hander)[0];
        this.bigWrap = document.getElementsByClassName(this.settings.bigWrap)[0];
        this.bigWrap.style.width = this.settings.bw+ 'px';
        this.bigWrap.style.height = this.settings.bh+ 'px';
        this.bigImg = document.getElementsByClassName(this.settings.bigImg)[0];
        this.mark = document.getElementsByClassName(this.settings.mark)[0];
        this.mark.style.width = this.settings.w + 'px';
        this.mark.style.height = this.settings.h+ 'px';
        var This = this;
        this.wrap.onmouseover = function () {
            This.hander.style.display = 'block';
            This.bigWrap.style.display = 'block';
        };
        this.wrap.onmouseout = function () {
            This.hander.style.display = 'none';
            This.bigWrap.style.display = 'none';
        };
        this.wrap.onmousemove =  function(e){
            var ev = e || window.event;
            var X = ev.clientX - This.wrap.offsetLeft -This.hander.offsetWidth/2;
            var Y = ev.clientY - This.wrap.offsetTop -This.hander.offsetHeight/2;
            if(X <0){
                X=0;
            }else if(X > This.wrap.offsetWidth - This.hander.offsetWidth){
                X = This.wrap.offsetWidth - This.hander.offsetWidth;
            }

            if(Y <0){
                Y=0;
            }else if(Y> This.wrap.offsetHeight - This.hander.offsetHeight){
                Y= This.wrap.offsetHeight - This.hander.offsetHeight;
            }
            This.hander.style.left = X +'px';
            This.hander.style.top = Y+'px';

            var scaleX = X / (This.wrap.offsetWidth - This.hander.offsetWidth);
            var scaleY = Y / (This.wrap.offsetHeight - This.hander.offsetHeight);
            This.bigImg.style.left = -(scaleX *(This.bigImg.offsetWidth - This.bigWrap.offsetWidth)) + 'px';
            This.bigImg.style.top = -(scaleY *(This.bigImg.offsetHeight - This.bigWrap.offsetHeight))+'px';
        };

    },
    extend : function(obj1,obj2){
        for(var attr in obj2){
            obj1[attr] = obj2[attr];
        }
    }
};