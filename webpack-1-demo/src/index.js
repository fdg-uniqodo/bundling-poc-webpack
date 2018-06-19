var HelloWorld = require('./world');

if (typeof console !== 'undefined') {
    console.log('ES3 test is loaded');
}

var el = document.createElement('div');
el.innerText = HelloWorld;

document.body.appendChild(el);
