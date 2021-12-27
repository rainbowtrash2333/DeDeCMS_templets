$(document).ready(function(){
    $(".hide-btn").click(function(){
        // window.alert("test")
        $(this).next().hide();
        $(this).hide();
    });
});
