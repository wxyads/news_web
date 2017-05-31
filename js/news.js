//Vue的初始化
var navs = {
    hot_point: true,
    very_fresh: false,
    review: false,
    interested: false
};
var nav = new Vue({
    el: '#nav',
    data: navs
});
//var foot_navs = {
//    nav_browse: true,
//    nav_collection: false,
//    nav_search: false,
//    nav_personal: false
//};
//var nav_foot = new Vue({
//    el: '#foot_nav',
//    data: foot_navs
//});
//导航栏点击事件
$("#nav a").on("click", function(event){
    event.preventDefault();
    var the_id = $(this).attr("id");
    for(ti in navs){
        navs[ti] = false
    }
    navs[the_id] = true;
});
//底部导航栏点击事件
//$("#foot_nav a").on("click", function(event){
//    event.preventDefault();
//    var the_id = $(this).attr("id");
//    for (ti in foot_navs){
//        foot_navs[ti] = false;
//    }
//    foot_navs[the_id] = true
//});
//$(function(){
//    alert(document.documentElement.clientHeight);
//    alert(document.documentElement.clientWidth)
//});
//文章载入
var $article_container = $("#articles"),
    limit = 4;
function loadArticle(){
    var whole_str = '';
    for (var i = 0; i < limit; i++){
            var article = '<article><hgroup>' +
            '<a href="./details.html?id=' + news_list[i]["id"] + '">' +
            '<h4>'+ news_list[i]["title"] +'</h4></a>' +
            '</hgroup>';
        if (news_list[i]["summarize"].length <= 100){
            article += '<p>' + news_list[i]["summarize"] + '</p>'
        } else {
            var sum_str = news_list[i]["summarize"].substring(0, 30);
            article += '<p>' + sum_str + '<a class="display_detail" href="">显示全部</a></p>'
        }
        if (news_list[i]["photo"] !== ''){
            article += '<div><img src="' + news_list[i]["photo"] + '" alt="' + news_list[i]["summarize"] + '"></div></article>'
        } else {
            article += '</article>'
        }
        whole_str += article
    }
    $article_container.html(whole_str)
}
$(loadArticle());
































