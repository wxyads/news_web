var url = window.location.href,
    reg = /\?id=(\d+)$/;
var article_id = url.match(reg)[1],
    article_mess = news_list[parseInt(article_id)-1],
    article_title = article_mess["title"],
    article_detail = article_mess["detail"];

$("head title").text(article_title);
$("body #article_title").text(article_title);
$("#source").text(article_mess["source"]);
$("#time_line").text(article_mess["time_line"]);

function loadDetail(){
    var article = '';
    for (var i = 0,len = article_detail.length; i < len; i++){
        var the_detail = article_detail[i];
        if (the_detail["head"] !== ''){
            var section = '<section>' +
                '<p class="little_title">' + the_detail["head"] + '</p>'
        } else {
            var section = '<section>'
        }
        section += '<div class="section_body">' + the_detail["body"] + '</div>';
        if (the_detail["img"].length > 0){
            var imgs = '<p>';
            for (var j = 0, lon = the_detail["img"].length; j < lon; j++){
                imgs +='<img src="' + the_detail["img"][j] + '" class="imgs">'
            }
            imgs += '</p>';
            section += imgs;
        }
        section += '</section>';
        article += section
    }
    $("#article_main").html(article)
}
$(loadDetail());