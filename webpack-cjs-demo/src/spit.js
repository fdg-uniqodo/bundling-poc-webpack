var printMe = require('./print');

function spit () {
    if (typeof console !== 'undefined') {
        console.log("I'm gonna spit some rhymes");
    }
    
    for (var i = 0; i < 10; i++) {
        printMe();
    }
}

module.exports = spit;