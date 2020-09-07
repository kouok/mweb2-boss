var san=document.getElementById("san");
// console.log(san)
var zuo=document.querySelectorAll(".zuo")[0];
var log=document.querySelector(".logo>p");
var cuihe=document.querySelectorAll(".cuihe>span");
var cuihe2=document.querySelectorAll(".cuihe>img");
var xu=document.querySelectorAll(".xu>li>span");
var xuxu=document.querySelectorAll(".xu");
var xu2=document.querySelectorAll(".xu>li>img");
var xuli=document.querySelectorAll(".xu>li");
var zhon=document.querySelectorAll(".zhon")[0];
var k=0;
// console.log(11)
    for(var i=0;i<xu.length;i++){
        xu[i].onmouseover=function(){
            // console.log(xuli)
            for(var a=0;a<xuli.length;a++){
                // this.style.background="skyblue";
                // console.log(11)
                xuli[a].onmouseover=function(){
                   this.style.background="skyblue";
                }
            }
        }
        xu[i].onmouseout=function(){
            // console.log(xuli)
            for(var a=0;a<xuli.length;a++){
                // this.style.background="skyblue";
                // console.log(11)
                xuli[a].onmouseout=function(){
                   this.style.background="#293239";
                }
            }
        }
    }
san.onclick=function () {
    
    if(k==0){
        zuo.style.width="80px";
        for(let i=0;i<xu.length;i++){
            xu[i].style.display="none"
            // console.log(xu[i])
        }
        for(let i=0;i<cuihe.length;i++){
            cuihe[i].style.display="none"
            // console.log(cuihe[i])
        }
           k=1;
           log.style.fontSize=24+"px";
    }else{
           zuo.style.width="200px";
            for(let i=0;i<xu.length;i++){
                xu[i].style.display="block"
                // console.log(xu[i])
            }       
            for(let i=0;i<cuihe.length;i++){
                cuihe[i].style.display="block"
                // console.log(cuihe[i])
            }
            console.log(zuo.offsetWidth)    
            log.style.fontSize=32+"px";  
             k=0;
    }
    zhon.style.width=document.body.offsetWidth-zuo.offsetWidth+"px";
}
// console.log(cuihe2);
for(let i=0;i<cuihe2.length;i++){
    cuihe2[i].onclick=function(){
        // xuxu[i].style.display="none"
        if(xuxu[i].style.display=="none"){
            xuxu[i].style.display="block"
        }else{
             xuxu[i].style.display="none"
        }
    }
}

            // top
var top_zuo=document.querySelectorAll(".top_zuo>div");
for(var i=0;i<top_zuo.length;i++){
    top_zuo[i].onmouseover=function(){
        this.style.background="skyblue";
        // console.log(this)
    }
    top_zuo[i].onmouseout=function(){
        this.style.background="#009ACC";
        // console.log(this)
    }
}


// 二级菜单
var top_you=document.querySelectorAll(".top_you>div>p");
var erji=document.querySelectorAll(".erji");
var erji2=document.querySelectorAll(".erji>p");
// for(var i=0){
    // console.log(top_you)
    top_you[0].onmouseover=function(){
        // console.log(11)
        erji[0].style.display="block";
        top_you[0].style.background="blue"
    }
    top_you[0].onmouseout=function(){
        // console.log(11)
        erji[0].style.display="none";
        top_you[0].style.background="#009ACC"
    }
    erji[0].onmouseover=function(){
        erji[0].style.display="block";
        top_you[0].style.background="blue"
        for(var b=0;b<erji2.length;b++){
           // erji2[b].style.background="skyblue"
           // console.log(this)
           erji2[b].onmouseover=function(){
                this.style.background="skyblue"
           }
           erji2[b].onmouseout=function(){
                this.style.background="white"
           }
        }
    }
    erji[0].onmouseout=function(){
        erji[0].style.display="none";
        top_you[0].style.background="#009ACC"
    }
// }