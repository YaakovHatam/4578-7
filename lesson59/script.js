$('#mainNav>li>a').click(function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    $.ajax(`templates/${href}.html`)
    .done(function(htmlData) {
        $('#mainContent').empty();
        const coinTemplate = htmlData;
 
        $.ajax('coins.list.json').done(function(coinsData) {
            for (let i=0; i < coinsData.length; i++) {
                let t = coinTemplate;
                t = t.replace('{{name}}', coinsData[i].name);
                t = t.replace(/{{id}}/g, coinsData[i].id);
                t = t.replace('{{symbol}}', coinsData[i].symbol);
                $('#mainContent').append(t);
            }
        })       
    })
})

const coins = [];
function addCoin(el, id) {
    if (coins.length > 5) {
        alert('max 5 coins');
    } else {
        coins.push(id);
        $(el).find('.page-item').toggleClass('active');
        console.log(el);
        console.log(id)
    }
}
