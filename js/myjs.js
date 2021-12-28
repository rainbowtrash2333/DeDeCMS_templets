//hide add
function hide_add(){
    $(".hide-btn").click(function () {
        // window.alert("test")
        $(this).next().hide();
        $(this).hide();
    });
}
// mm-dd
function getDate(date) {
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
}
function getArtistsListHtml(Artistlist){
    var html = "";
    Artistlist.forEach(function (element) {
        html += "                       <a href=\"" + element.href +
            "\" class=\"list-group-item \" style=\"font-size: 16px\">" +
            "<span class=\"badge badge-primary badge-date\">" + getDate(element.date) +
            "</span>\n" + element.name + "\n" + " </a>\n"
    })
    return html
}