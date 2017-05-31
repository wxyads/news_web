//底部Vue的初始化
var foot_navs = {
    nav_browse: true,
    nav_collection: false,
    nav_search: false,
    nav_personal: false
};
var nav_foot = new Vue({
    el: '#foot_nav',
    data: foot_navs
});
//底部导航栏点击事件
$("#foot_nav a").on("click", function(event){
    event.preventDefault();
    var the_id = $(this).attr("id");
    for (ti in foot_navs){
        foot_navs[ti] = false;
    }
    foot_navs[the_id] = true
});