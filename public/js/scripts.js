(function($) {
    $(document).ready(function() {
        $('input.search').keyup(function() {
            if ($(this).val() === '') {
                $('.icons .col').fadeIn();
            } else {
                $('.icons .col:not([data-words*="' + $(this).val() + '"])').fadeOut();
                $('.icons .col[data-words*="' + $(this).val() + '"]').fadeIn();
            }
        });
        $('input.search').trigger('keyup');
        
        $('.clickable, .icons .col').click(function() {
            $('.modal-body .font-awesome').html('');
            $('.modal-body .code').html('');
            
            if ($(this).find('.fa-ul').length) {
                $('.modal-body .font-awesome').html($(this).find('.fa-ul').clone());
                $('.modal-body .code').html($(this).find('.fa-ul').clone());
            } else if ($(this).find('.fa-stack').length) {
                $('.modal-body .font-awesome').html($(this).find('.fa-stack').clone());
                $('.modal-body .code').html($(this).find('.fa-stack').clone());
            } else {
                $('.modal-body .font-awesome').html($(this).find('.fa').clone());
                $('.modal-body .code').html($(this).find('.fa').clone());
            }
            $('.modal-body .code').html(htmlEscape($('.modal-body .code').html()));
            $('#icon').modal();
        });
    });
})(jQuery);

function htmlEscape(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function htmlUnescape(str){
    return str
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}