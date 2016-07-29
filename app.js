var imageOnly = function() {
    var div = jQuery('<div id="imageOnly" />');

    var w = jQuery(window).width();
    var h = jQuery(window).height();

    div.css({
        'position': 'fixed',
        'z-Index': '5000',
        'width': w,
        'height': h,
        'left': 0,
        'top': 0,
        'margin': 'auto',
        'border': '1px dotted black',
        'background-color': '#000',
        'display': 'inline'
    });

    div.appendTo('body');

    div.click(function() {
        $(this).stop().animate({opacity: 0}, function() {
            $(this).remove();
        });
    });

    $.each($('img'), function(k, v) {
        $imgDiv = $('<span />');
        $imgDiv.css({
            'opacity': 0.5
        });

        $imgDiv.hover(function(e) {
            var r = (e.type == 'mouseenter') ? 1 : 0.5 ;
            $(this).animate({opacity:r});
        });

        var h = $(v).height();
        var w = $(v).width();

        $v = $(v).clone();
        $v.css('position', 'relative');
        $v.css('display', 'inline-block');
        if(h > w) {
            $v.css('height', 150);
            $v.css('width', (150 / h * w));
        } else {
            $v.css('height', (150 / w * h));
            $v.css('width', 150);
        }

        $imgDiv.append($v).appendTo(div);
    });
};

if ($('#imageOnly').length === 0) imageOnly();
