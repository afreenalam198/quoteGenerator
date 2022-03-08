//quote generator
var quotes = ["At times, I fit into lyrics more than I fit into life", "Simplicity is the ultimate sophistication.", "Dream as if you’ll live forever, live as if you’ll die today.", 
"There is no substitute for hard work.", "The time is always right to do what is right.", "Dream as if you’ll live forever, live as if you’ll die today.", "Tough times never last but tough people do."];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

//new quote appears whenever the page loads
window.addEventListener('load', newQuote, true);

//onclick buttons for changing styles of the quote box
function btn1() {
    document.getElementById('quoteDisplay').style.backgroundColor="#E2EBD0";
    document.getElementById('quoteDisplay').style.borderColor="#3B521E";
    document.getElementById('quoteDisplay').style.color="#4A3A3A";
    document.getElementById('quoteDisplay').style.fontFamily="Roboto Slab";
    document.getElementById('quoteDisplay').style.fontSize="20px";
}

function btn2() {
    document.getElementById('quoteDisplay').style.backgroundColor="#FFFFFF";
    document.getElementById('quoteDisplay').style.borderColor="#EB75AE";
    document.getElementById('quoteDisplay').style.color="#EB75AE";
    document.getElementById('quoteDisplay').style.fontFamily="Permanent Marker";
    document.getElementById('quoteDisplay').style.fontSize="18px";
}

function btn3() {
    document.getElementById('quoteDisplay').style.backgroundColor="#E7C4D7";
    document.getElementById('quoteDisplay').style.borderColor="#DA365E";
    document.getElementById('quoteDisplay').style.color="#4A3A3A";
    document.getElementById('quoteDisplay').style.fontFamily="Caveat";
    document.getElementById('quoteDisplay').style.fontSize="22px";
}

function btn4() {
    document.getElementById('quoteDisplay').style.backgroundColor="#EFE94D";
    document.getElementById('quoteDisplay').style.borderColor="#3B521E";
    document.getElementById('quoteDisplay').style.color="#4A3A3A";
    document.getElementById('quoteDisplay').style.fontFamily="Architects Daughter";
    document.getElementById('quoteDisplay').style.fontSize="20px";
}
