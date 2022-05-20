$(function(){
$("button").click(function(){
    var li = $("<li></li>");
    var textVar = $("input").val(); 
    $(li).text(textVar);
    $("ul").append($(li));
    $("input").val('');
})
})