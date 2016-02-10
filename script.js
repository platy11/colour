
var Color = net.brehaut.Color;

a = function () {
  document.getElementById('color').addEventListener('input', function () {
    document.querySelector('body').setAttribute('style', 'background-color: ' + document.getElementById('color').value);
  });
};
