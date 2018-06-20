import printMe from './print.js';

export default function spit () {
    if (typeof console !== 'undefined') {
        console.log("I'm gonna spit some rhymes");
    }

    for (var i = 0; i < 10; i++) {
        printMe();
    }
}