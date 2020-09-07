<template>
  <div id="app">
    <div class="div1">
      <div class="fl">
        <img src="./assets/未标题-1.jpg" alt />
      </div>
      <ul class="ul1">
        <li>云服务管理平台</li>
        <li>个人工作台</li>
        <li>业务运营支持</li>
        <li>客服关系管理</li>
      </ul>

      <ul class="ul2">
        <li>退出登录</li>
        <li>欢迎您：sont</li>
      </ul>
    </div>

    <div class="div2">
      <div class="div3">
        <a href="javaScript:void(0)">QAQ</a>
      </div>
      <div class="div4">
        <a href="javaScript:void(0)">↓ 撮合管理</a>
      </div>
      <ul class="ul3">
        <li>现货清单</li>
        <li>录入产品</li>
        <li>帮客服传EXCEL</li>
      </ul>

      <div class="div5">
        <a href="javaScript:void(0)">↓ 订单管理</a>
      </div>
      <ul class="ul4">
        <li>预订单列表</li>
        <li>失效预订单</li>
        <li>订单列表</li>
        <li>查看凭证</li>
        <li>自营订单列表</li>
      </ul>

      <div class="div6">
        <a href="javaScript:void(0)">↓ 统计报表</a>
      </div>
      <ul class="ul5">
        <li>业务统计</li>
        <li>客服成单统计</li>
        <li>客服维护统计</li>
      </ul>
    </div>

	<div class="div7">
		<p class="p1">BOOS > 撮合管理 > 需求池</p>
		<ul class="ul6">
			<li>录入产品</li>
			<li>帮客服传EXCEL</li>
			<li>订单列表</li>
			<li>录入客服</li>
		</ul>
		<div class="div8">
			<ul class="ul7">
				<li>铝箔</li>
				<li>铝锭</li>
				<li>铝棒</li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>



</script>

<style>
.fl {
  float: left;
}

.div1 {
  width: 100%;
  height: 75px;
  background-color: #009acc;
}
.ul1 {
  margin-left: 0px;
  list-style: none;
}
.ul1 li {
  float: left;
  width: 150px;
  line-height: 75px;
  /* height: 100%; */
  text-align: center;
  background-color: #009acc;
  color: white;
}
.ul1 li:hover {
  background-color: #0084b5;
}
.ul2 {
  list-style: none;
}
.ul2 li {
  float: right;
  width: 150px;
  line-height: 75px;
  /* height: 100%; */
  text-align: center;
  background-color: #009acc;
  color: white;
}
.ul2 li:hover {
  background-color: #0084b5;
}
.div2 {
  float: left;
  width: 225px;
  height: 800px;
  background: #293239;
  margin-left: -225px;
}
.div3 {
  width: 225px;
  height: 53px;
  text-align: center;
  background-color: #394253;
}
.div3 a {
  text-decoration: none;
  line-height: 43px;
  color: white;
  /* text-align: center; */
}
.div4 {
  width: 225px;
  height: 53px;
  text-align: center;
  background-color: #22282e;
}
.div4 a {
  text-decoration: none;
  line-height: 53px;
  color: white;
  /* text-align: center; */
}
.ul3 {
  list-style: none;
  position: relative;
  top: -16px;
}
.ul3 li {
  float: right;
  width: 225px;
  line-height: 45px;
  text-align: center;
  background-color: #293239;
  color: white;
}
.ul3 li:hover {
  background-color: #0084b5;
}
.div5 {
  /* float: none; */
  width: 225px;
  height: 53px;
  text-align: center;
  background: #22282e;
  overflow: hidden;
  position: relative;
  top: -16px;
}
.div5 a {
  text-decoration: none;
  line-height: 53px;
  color: white;
}
.ul4 {
  list-style: none;
  position: relative;
  top: -32px;
  /* display: none; */
}
.ul4 li {
  float: right;
  width: 225px;
  line-height: 45px;
  text-align: center;
  background-color: #293239;
  color: white;
}
.ul4 li:hover {
  background-color: #0084b5;
}
.div6 {
  /* float: none; */
  width: 225px;
  height: 53px;
  text-align: center;
  background: #22282e;
  overflow: hidden;
  position: relative;
  top: -32px;
}
.div6 a {
  text-decoration: none;
  line-height: 53px;
  color: white;
}
.ul5 {
  list-style: none;
  position: relative;
  top: -48px;
  /* display: none; */
}
.ul5 li {
  float: right;
  width: 225px;
  line-height: 45px;
  text-align: center;
  background-color: #293239;
  color: white;
}
.ul5 li:hover {
  background-color: #0084b5;
}
.div7{
	float: right;
	width: 85%;
	height: 200px;
	background: red;
}
.p1{
	float: left;
	line-height: 25px;
}
.ul6 {
  list-style: none;
  /* display: none; */
}
.ul6 li {
  float: right;	
  margin-right: 20px;
  line-height: 35px;
  text-align: center;
  background-color: #293239;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.div8{
	width: 100%;
	height: 50px;
	background:#009acc;
	margin-top:60px;
}
.ul7 {
  list-style: none;
  position: relative;
  top: -12px;
  /* display: none; */
}
.ul7 li {
  float: left;	
  margin-right: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #293239;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  top: 42px;
}
</style>
