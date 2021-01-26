$(function(){
    $('.menu a').click(function(){
        var title = $(this).attr('data-title');
        var body = $(this).attr('data-body');
        var image = $(this).attr('data-image');
        $('#content-title').text(title);
        $('#content-body').html(body);
        $('.content-pic').remove();
        $('<img>').addClass('content-pic')
                .attr('src','media/img/'+image)
                .appendTo('#content-picture');
    });
    $('#logotext').on({ 
        'mouseover':showhide
    }) 
    function showhide(){
        $('#header').hide(2000, function(){
            $(this).show(2000);
        });
    }
});