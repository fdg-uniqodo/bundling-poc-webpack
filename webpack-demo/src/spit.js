import printMe from './print.js';

if (typeof console !== 'undefined') {
    console.log('Spit code is loaded');
}

for (var i = 0; i < 10; i++) {
    printMe();
}