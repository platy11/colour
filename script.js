
var Color = net.brehaut.Color;

a = function () {
  document.getElementById('color').addEventListener('input', function () {
    if(Color(document.getElementById('color').value).red == undefined) {

    } else {
      document.querySelector('body').style.backgroundColor = document.getElementById('color').value;
    };
  });
};

window.onload = function(){a();};
