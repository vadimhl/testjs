//const n = parseInt(readline()); // the number of temperatures to analyse
function compT( res, t ) {
    console.log(`res.abs=${res.abs} res.val=${res.val} t=${t}`);
    if ( Math.abs(t)<res.abs || (Math.abs(t)===res.abs && t > res.val) ) {
        return {val:t, abs:Math.abs(t) }
    }
    return res;
}
let res  = {val: 0, abs:Infinity};
var inputs = '1 -2 -8 -1 5'.split(' ').map( st => parseInt(st) ).reduce( compT , res  );

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(inputs.val);
