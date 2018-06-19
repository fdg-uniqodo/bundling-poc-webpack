export default function printMe() {
  if (typeof console !== 'undefined') {
    console.log('I get called from print.js!');
  }
}