$("document").ready(function(){
    $("#menuAF, .megaMenu").mouseover(function() {
        $("#menuAF").css("background", "#397C70")
        $(".megaMenu").show()
    }).mouseleave(function() {
        $("#menuAF").css("background", "#4A9587")
        $(".megaMenu").hide()
    })
})