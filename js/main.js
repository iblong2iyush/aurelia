$(document).ready(function() {
    $(".modal").on('shown', function() {
        $(this).find("[autofocus]:first").focus();
    });
});

$('#resize').click(function(){
    $(".modal-dialog").animate({"width":"200px"},600,'linear');
});
