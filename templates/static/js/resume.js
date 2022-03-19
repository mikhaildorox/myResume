var about = 'Few words about me';
var skills = 'Python, html, css';
var education = 'Bachelar DC';
var game = `playt fugit molestias,jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjexpeditis officiis quos cum.`;

$(function() {
    var insert = $('#insert');
    $('a[rel="insert"]').click(function() {
        var a = $(this).attr('href');
        insert.css('display', 'none').html(window[a]).fadeIn(300);
        return false;
    });
}); 
