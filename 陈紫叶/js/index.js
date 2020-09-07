$(function(){
	var width = localStorage.getItem("lastname");
	$(".content").css("left", width);
	$(".muen").css("width", width);

// 导航条悬浮显示
$(".t-r-r a").eq(0).hover(function() {
	$(".t-r-r a:eq(0) ul").show();
}, function() {
	$(".t-r-r a:eq(0) ul").hide();
});

// 侧边栏收缩
$(".but-z").on("click", () => {
	if ($(".muen").css("width") == "225px") {
		$(".content").css("left", "64px");
		$(".muen").css("width", "64px");
		localStorage.lastname = "64px";
	} else {
		$(".content").css("left", "225px");
		$(".muen").css("width", "225px");
		localStorage.lastname = "225px";
	}
})
//侧边栏手风琴
$(".u-one").on("click", function(){
	$(this).siblings().toggle();
})

// 分页
})
