var printMe = require('./print');
var spit = require('./spit');

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    
    element.innerHTML = 'hello code';
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    spit();

    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());
