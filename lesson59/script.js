$('#mainNav>li>a').click(function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    $.ajax(`templates/${href}.html`)
    .done(function(htmlData) {
        $('#mainContent').html(htmlData);
    })
})