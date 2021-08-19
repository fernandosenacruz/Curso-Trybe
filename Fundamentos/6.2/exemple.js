let moment = require('moment');
let barsilTetra = moment('17071994', 'DDMMYYYY');
let formNow = barsilTetra.fromNow();

console.log(formNow);