$(document).ready(function () {
    $('.btn-click').on('click', function(){
        console.log(this.value);
        $('#step_' + this.value).css({"display":"flex"});
        $(this).parent().hide();
    });

    $('.btn-replay').on('click', function () {
       window.location.reload();
       $('.mobile-reload').css({"transform":"rotate(960deg)"});
    });
});

