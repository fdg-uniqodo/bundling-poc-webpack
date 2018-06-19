var printMe = require('./print');

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    
    element.innerHTML = 'hello code';
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());
