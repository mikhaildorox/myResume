var about = 'Few words about me';
var skills = 'Python, html, css';
var education = 'Bachelar DC';
var game = `quos cum.`;

// set up text to print, each item in array is new line
var aText = new Array(game);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("insert");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

$(function () {
    var insert = $('#insert');  
    $('a[rel="insert"]').click(function () {
        var a = $(this).attr('href');
        insert.css('display', 'none').html(window[a]).fadeIn(300);
        return false;
    });

    // if (game_link.classList.contains("for_game")) {
    //     document.getElementById('insert').classList.remove('for_game');
    // } else {
    //     document.getElementById('insert').classList.add('for_game');
    // }
});