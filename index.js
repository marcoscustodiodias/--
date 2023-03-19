lines (10 sloc)  328 Bytes

var intervalo;

function scrollDireita(){
  intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5);
};
function scrollEsquerda(){
  intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft -= 1 }  , 5);
};
function clearScroll(){
  clearInterval(intervalo);
};