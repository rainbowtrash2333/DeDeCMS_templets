//hide add
function hide_add() {
    $(".hide-btn").click(function () {
        // window.alert("test")
        $(this).next().hide();
        $(this).hide();
    });
}

function Carousel_href() {
    $("#carousel-leader-img img").click(function () {
        window.location.href = $(this).attr("href")
    });
}

// 图片滚动
function moveit(id) {
    var img_obj = $("#"+id);
    var offset = img_obj.offset();
    var max_width = img_obj.parent().width();
    var newLeft = offset.left + 1 ;
    img_obj.animate({
        left:newLeft,
    }, 1000, function () {
        if (newLeft >= max_width ) {
            img_obj.css("left", -img_obj.width())
        }
        moveit(id);
    });

}


// mm-dd
function getDate(date) {
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
}

function getArtistsListHtml(Artistlist) {
    var html = "";
    Artistlist.forEach(function (element) {
        html += "                       <a href=\"" + element.href +
            "\" class=\"list-group-item \" style=\"font-size: 16px\">" +
            "<span class=\"badge badge-primary badge-date\">" + getDate(element.date) +
            "</span>\n" + element.name + "\n" + " </a>\n"
    })
    return html
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}