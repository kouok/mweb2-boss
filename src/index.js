window.onload=function(){
    // 浮动高亮效果、提示文字
    function gl(){
        var olis=document.querySelectorAll(".left li");
        var ops=document.querySelectorAll(".left>div>ul>li>p");
        console.log(ops)
        for(let i=0;i<olis.length;i++){
            olis[i].onmouseover=function(){
                for(var j=0;j<olis.length;j++){
                    olis[j].classList.remove("active");
                    ops[j].classList.remove("dpl");
                }
                this.classList.add("active");
                ops[i].classList.add("dpl");
            }
        }
    }
    gl();
    
    //下拉列表效果
    function sel(){
        var osel=document.getElementsByClassName("sel");
        var oul=document.querySelectorAll(".left ul");
        console.log(oul)
        for(let i=0;i<osel.length;i++){
            osel[i].onclick=function(){
                if(oul[i].style.display=="none"){
                     oul[i].style.display="block";
                }else{
                    oul[i].style.display="none";
                }
               
                console.log( oul[i].style.display);
            }
        }
    }
    sel();
    
    // 点击折叠、本地存储
    function zd(){
     var ozd=document.getElementsByClassName("zd")[0];
     var oleft=document.getElementsByClassName("left")[0];
     var oright=document.getElementsByClassName("right")[0];
     var otit=document.querySelectorAll(".left .title");
     function hid(){
         oleft.style.width="11px";
         for(var i=0;i<otit.length;i++){
             otit[i].style.display="none";
         }
         // console.log(document.body.offsetWidth-oleft.offsetWidth)
         oright.style.width=document.body.clientWidth-oleft.offsetWidth+1+"px";
     }
     function sho(){
         oleft.style.width="15%";
         for(var i=0;i<otit.length;i++){
             otit[i].style.display="block";
         }
         oright.style.width="85%";
     }
        var flag=localStorage.getItem("flag");
        ozd.onclick=function(){
              if(flag=="1"){
                  flag="0";
                  hid();
                  //保存到本地
                  window.localStorage.setItem("flag",flag);
              }else{
                  flag="1";
                  sho();
                  window.localStorage.setItem("flag",flag);
              }
        }
        console.log(localStorage.getItem("flag"));
        // 判断当前状态执行对应的操作
        if(localStorage.getItem("flag")=="1"){
            sho();
        }else{
            hid();
        }
    }
    zd();
    
    //右边头部浮动高亮
    function riggl(){
        var olis=document.querySelectorAll(".right>.rig_top>ul>li");
        for(var i=0;i<olis.length;i++){
            olis[i].onmouseover=function(){
                for(var j=0;j<olis.length;j++){
                    olis[j].classList.remove("active");
                }
                this.classList.add("active");
            }
        }
    }
    riggl();
    // 点击欢迎您出现下拉列表
    function rigsel(){
        var oxl=document.getElementsByClassName("hy")[0];
        var odiv=document.querySelector(".right>.rig_top>div");
        oxl.onmouseover=function(){
            odiv.style.display="block"
        }
        odiv.onmouseover=function(){
            this.style.display="block"
        }
        odiv.onmouseout=function(){
            this.style.display="none"
        }
    }
    rigsel();
    
    //tab切换
    function tab(){
        var olis=document.querySelectorAll(".right>.rig_con>.dh>ul>li");
        for(var i=0;i<olis.length;i++){
            olis[i].onclick=function(){
                for(var j=0;j<olis.length;j++){
                    olis[j].classList.remove("active");
                }
                this.classList.add('active');
            }
        }
    }
    tab();
    
    // 页切换
    function ye(){
        var olis=document.querySelectorAll(".right>.rig_con>table tr>.td>div>ul>li");
        for(var i=0;i<olis.length;i++){
            olis[i].onclick=function(){
                for(var j=0;j<olis.length;j++){
                    olis[j].classList.remove("active");
                }
                this.classList.add('active');
            }
        }
    }
    ye();
}