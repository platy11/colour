
var Color = net.brehaut.Color;

a = function () {
  document.getElementById('color').addEventListener('input', function () {
    if(Color(document.getElementById('color').value).red == undefined) {

    } else {
      var a = Color(document.getElementById('color').value)

      document.querySelector('body').style.backgroundColor = a.toCSS();

      document.querySelector('.a').style.backgroundColor = a.darkenByRatio(0.75).toCSS();

      document.querySelector('.b').style.backgroundColor = a.darkenByRatio(0.5).toCSS();

      document.querySelector('.c').style.backgroundColor = a.darkenByRatio(0.25).toCSS();

      document.querySelector('.d').style.backgroundColor = a.lightenByRatio(0.25).toCSS();

      document.querySelector('.e').style.backgroundColor = a.lightenByRatio(0.5).toCSS();

      document.querySelector('.f').style.backgroundColor = a.lightenByRatio(0.75).toCSS();
    };
  });
};

window.onload = function(){a();};
