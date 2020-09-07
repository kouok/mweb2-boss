<template>
  <div class="hello">
    <div class="top">
      <div class="left">
        <img src="../assets/logo_index.png" id="logo"/>
        <img src="../assets/logo_index.xiao.png" id="logo" style="display:none;"/>
      </div>
      <div class="right">
        <div class="fl">云服务管理平台</div>
        <div class="fl">
          <div class="icon">
            <span class="iconfont icon-icon_diannao"></span>
          </div>
          <div class="test">
            <span>WORKSHOP</span>
            <span>个人工作台</span>
          </div>
        </div>
        <div class="fl action">
          <div class="icon">
            <span class="iconfont icon-yunying"></span>
          </div>
          <div class="test">
            <span>BOSS</span>
            <span>业务运营支持</span>
          </div>
        </div>
        <div class="fl">
          <div class="icon">
            <span class="iconfont icon-biaoqianjianguanxi"></span>
          </div>
          <div class="test">
            <span>CRM</span>
            <span>客户关系管理</span>
          </div>
        </div>
        <div class="jg"></div>
        <div class="he">
          <div class="icon">
            <span class="iconfont icon-wode"></span>
          </div>
          <div class="test">
            <span>欢迎您:</span>
            <span>snto</span>
          </div>
        </div>
        <div class="fl">
          <div class="icon">
            <span class="iconfont icon-guanbi1"></span>
          </div>
          <div class="test">
            <span>退出登录</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="navigation">
        <div class="down" @click="daohan()">
          <div class="icon">
            <span class="iconfont icon-navicon" ></span>
          </div>
        </div>
        <div class="dh1" v-for="(itme,i) in msg" :key="i">
          <div class="bt">
            <div class="icon">
              <span class="iconfont icon-xiajiantou"></span>
            </div>
            <div class="test">
              <span>{{itme.name}}</span>
            </div>
          </div>
          <ul>
            <li v-for="(it,i) in itme.lr" :key="i">
              <div class="con" :class="{action:it.checked==true}">
                <div class="icon">
                  <span class="iconfont" :class="it.icon"></span>
                </div>
                <div class="test">
                  <span>{{it.name}}</span>
                </div>
              </div>
            </li>
          </ul>
          <!-- 
          -->
        </div>
      </div>
      <div class="contents">
        <div class="con-top">
          <div class="lj">
            <a href="#">BOSS</a>>
            <a href="#">撮合管理</a>>需求池
          </div>
          <div class="btn">
            <button>
              <div class="icon">
                <span class="iconfont icon-xierushujuku"></span>
              </div>
              <span>录入产品</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-uploadicon06"></span>
              </div>
              <span>帮客户传Excel</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-wodedingdan"></span>
              </div>
              <span>订单列表</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-yonghu"></span>
              </div>
              <span>录入客户</span>
            </button>
          </div>
        </div>
        <div class="con-content">
          <div class="con-content-top">
            <div class="action">铝箱</div>
            <div>铝锭</div>
            <div>铝棒</div>
          </div>
          <div class="con-content-skill">
            <select name id>
              <option value>有效需求</option>
            </select>
            <button class="action">
              <div class="icon">
                <span class="iconfont icon-jia"></span>
              </div>
              <span>新建</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-weibiaoti1"></span>
              </div>
              <span>笔记</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-shanchu"></span>
              </div>
              <span>删除</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-fenleishezhi"></span>
              </div>
              <span>撮合匹配</span>
            </button>
            <button class="action">
              <div class="icon">
                <span class="iconfont icon-wodedingdan"></span>
              </div>
              <span>生成预订单</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-failure"></span>
              </div>
              <span>置为失效</span>
            </button>
            <button>
              <div class="icon">
                <span class="iconfont icon-daochu"></span>
              </div>
              <span>导出</span>
            </button>
          </div>
          <div class="con-content-search">
            <input type="text" placeholder="需求编号" />
            <input type="text" placeholder="公司名称" />
            <input type="text" placeholder="联系人" />
            <input type="text" placeholder="手机" />
            <input type="text" placeholder="品名" />
            <input type="text" placeholder="牌号" />
            <input type="text" placeholder="宽度" />
            <input type="text" placeholder="厚度" />

            <input type="text" placeholder="价格" />
            <input type="text" placeholder="数量" />
            <select name id>
              <option value>地区</option>
            </select>
            <select name id>
              <option value>需求类型</option>
            </select>
            <select name id>
              <option value>结算方式</option>
            </select>
            <select name id>
              <option value>交易方式</option>
            </select>
            <select name id>
              <option value>有效期</option>
            </select>
            <div class="ss">
              <button>
                <div class="icon">
                  <span class="iconfont icon-search"></span>
                </div>
                <span class="te">搜索</span>
              </button>
            </div>
          </div>
        </div>
        <table class="con-content-data">
          <thead>
            <tr class="con-content-data-bt">
              <td class="f2">需求编号</td>
              <td class="f2">公司名称</td>
              <td>联系人</td>
              <td>手机</td>
              <td>交易员</td>
              <td>品名</td>
              <td>牌号</td>
              <td>厚度</td>
              <td>宽度</td>
              <td>价格</td>
              <td>数量</td>
              <td>地区</td>
              <td>交期</td>
              <td>发布时间</td>
              <td>报价</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in 7" :key="t">
              <td>XO10012</td>
              <td>海南</td>
              <td>张三</td>
              <td>13565658989</td>
              <td>邓盈</td>
              <td>烟箱</td>
              <td>1235</td>
              <td>0.007</td>
              <td>500</td>
              <td>19800</td>
              <td>5t</td>
              <td>南京</td>
              <td>2天</td>
              <td>2分钟前</td>
              <td>3条</td>
            </tr>
            <tr class="con-content-data-operation">
              <td colspan="15" class="con-content-data-op-operations">
                <div class="fa">
                  <div>
                    
                  <button>上一页</button>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>下一页</button>
                  <button>尾页</button>
                  <span>共100页</span>
                  <div>
                    <span>转到第</span>
                    <input type="text">
                    <span>页</span>
                  </div>
                  <button>GO</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../JSON/navigation.json";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: navigation.dh,
    };
  },
  methods:{
    daohan(){
      var test = document.querySelectorAll('.bt .test');
      var test2 = document.querySelectorAll('.con .test');
      var test3 = document.querySelector('.contents');
      var test4 = document.querySelector('.top .right');
      var logo = document.querySelectorAll('#logo');
      // console.log(test)
      console.log(test4)
      for (let i = 0; i < test.length; i++) {
        if (test[i].style.display==="none") {
          test[i].style.display="block";  
        }else{
          test[i].style.display="none";    
        }
        // console.log(test[i].style.display)
      }
      
      for (let i = 0; i < test2.length; i++) {
        if (test2[i].style.display==="none") {
          test2[i].style.display="block"; 
          test3.style.flex="8" ;
          test4.style.flex="8";
          logo[1].style.display="none";
          logo[0].style.display="block";
          // logo.src="../assets/logo_index.png"
        }else{
          test2[i].style.display="none";   
          test3.style.flex="18" 
          test4.style.flex="18" 
          logo[0].style.display="none"; 
          logo[1].style.display="block"; 
        }  
      }
      
      
      // test.style.display="none";
      // test2.style.display="none";
    }
  }
};
// console.log(navigation.dh);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "../font/iconfont.css";
.con-content-data .con-content-data-operation{
  height: 80px;
  
}
.con-content-data .con-content-data-op-operations input{
  width: 60px;
}
.con-content-data .con-content-data-op-operations .fa>div>div input{
  margin-left: 15px;
}
.con-content-data .con-content-data-op-operations .fa>div>div{
  /* width: 80px; */
  display: flex;
  justify-content: space-around;
}
.con-content-data .con-content-data-op-operations .fa>div{
  width: 40%;
  display: flex;
  /* height: 100%; */
  justify-content: space-around;
  align-content: center;
}
.con-content-data .con-content-data-op-operations .fa{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
}
.con-content-data .con-content-data-op-operations{
  /* display: flex; */
  border-bottom:1px solid #000;
  /* height: 100%; */
  width: 100%;
  /* text-align: center; */
  /* justify-content: center; */
}
.con-content-data {
  margin-top: 10px;
  width: 100%;
  border-spacing: 0;
  /* border: 1px solid rgba(0, 0, 0, 0); */
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.con-content-data .con-content-data-bt {
  height: 40px;
  background-color: #f3f3f5;
  /* display: flex; */
}
.con-content-data td {
  border-bottom: 1px solid #000;
  height: 50px;
}
.con-content-data td {
  width: 80px;
  text-align: center;
}
/* .con-content-data td{
  
} */
.con-content-data .con-content-data-bt .f2 {
  /* flex: 2; */
  width: 200px;
}
.con-content-search select,input {
  border: 1px solid #333;
}
.con-content-search .ss button {
  height: 30px;
  width: 60px;
  padding: 4px 0;
  background-color: #53637c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
}
.con-content-search .ss {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0;
}
.con-content-search select,input,.ss {
  box-sizing: border-box;
  /* flex: 1; */
  width: 140px;
  height: 30px;
  display: flex;
  padding: 0 10px;
  margin-right: 15px;
  /* padding: 0; */
}
.con-content-search {
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #f3f3f5;
  padding: 5px 20px;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  flex-wrap: wrap;
}
.con-content-skill select {
  width: 120px;
  height: 30px;
  border: 1px solid #999;
  font-size: 18px;
  margin-right: 10px;
}
.contents .con-content-skill .action {
  background-color: #009acc;
  color: #fff;
}
.contents .con-content-skill button{
  background-color: #e6e6e6;
  height: 30px;
  border: none;
  box-sizing: border-box;
  color: #a6a6a7;
  /* width: 100px; */
  padding: 10px;
  /* height:50px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 5px;
  margin-right: 10px;
}
.contents .con-content-skill {
  display: flex;
}
.con-content-top {
  box-sizing: border-box;
  background-color: #009acc;
  height: 50px;
  padding: 15px 10px 0px 30px;
  margin-bottom: 10px;
  display: flex;
  color: #fff;
}
.con-content-top div {
  box-sizing: border-box;
  width: 70px;
  font-size: 20px;
  padding: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-content-top .action {
  background-color: #fff;
  color: black;
}
a:-webkit-any-link {
  color: blue;
}
.contents .con-top {
  box-sizing: border-box;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 0px;
  width: 100%;
}
.contents .con-top .btn button {
  background-color: #53637c;
  box-sizing: border-box;
  color: #fff;
  /* width: 100px; */
  padding: 10px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 5px;
}
.contents .con-top .btn {
  position: absolute;
  right: 0;
  display: flex;
}
ul {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
}
li {
  width: 100%;
}
.content {
  box-sizing: border-box;
  display: flex;
  /* flex-wrap: wrap; */
}
.content .navigation {
  flex: 1;
  color: #fff;
}
.content .contents {
  flex: 8;
  box-sizing: border-box;
  padding-left: 10px;
}
.content .navigation .con {
  background-color: #293239;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 0 0 22px;
}
.content .navigation .action {
  background-color: #009acc;
}
.content .navigation .dh1 {
  background-color: #22282e;
}
.content .navigation .dh1 .bt {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
}
.content .navigation .dh1 .icon {
  color: #abbcc4;
  margin: 0 10px;
  font-size: 14px;
}
.content .navigation .dh1 .con .iconfont {
  font-size: 16px;
}
.content .navigation .down {
  height: 50px;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #394253;
}
.content .navigation .down .icon-navicon {
  color: #abbcc4;
}
.top {
  display: flex;
  height: 66px;
}
.top .left img {
  width: 100%;
}
.top .left {
  flex: 1;
  background-color: #0084b5;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 120px; */
  height: 100%;
  overflow: hidden;
}
.top .right {
  color: #fff;
  font-size: 14px;
  flex: 8;
  background-color: #009acc;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  /* width: 300px; */
}
.top .right .action {
  background-color: #0084b5;
  height: 100%;
}
.top .right .fl {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  height: 100%;
  padding: 0 20px;
  justify-content: space-around;
  align-items: center;
}
.top .right .fl .test {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}
.top .right .fl .iconfont {
  font-size: 30px;
  /* margin:0 10px; */
}
.top .right .jg {
  flex: 3;
}
.top .right .he {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  height: 100%;
  padding: 0 20px;
  justify-content: space-around;
  align-items: center;
  border-left: 1px solid #53637c;
  border-right: 1px solid #53637c;
}
.top .right .he .iconfont {
  font-size: 30px;
  /* margin:0 10px; */
}
</style>
