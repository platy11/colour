
var Color = net.brehaut.Color;

aa = function () {
  var a = Color( document.getElementById('color').value )

  document.querySelector('body').style.backgroundColor = a.toCSS();

  document.querySelector('.a').style.backgroundColor = a.darkenByRatio(0.75).toCSS();

  document.querySelector('.b').style.backgroundColor = a.darkenByRatio(0.5).toCSS();

  document.querySelector('.c').style.backgroundColor = a.darkenByRatio(0.25).toCSS();

  document.querySelector('.d').style.backgroundColor = a.lightenByRatio(0.25).toCSS();

  document.querySelector('.e').style.backgroundColor = a.lightenByRatio(0.5).toCSS();

  document.querySelector('.f').style.backgroundColor = a.lightenByRatio(0.75).toCSS();
};

a = function () {
  document.getElementById('color').addEventListener('input', function () {
    if( Color( document.getElementById('color').value ).red == undefined ) {

    } else {
      aa();
    };
  });
};

b = function (a) {
  var a = Color(a)
  document.getElementById('color').value = a.toCSS();
  aa();
};

window.onload = function(){a();b();};
