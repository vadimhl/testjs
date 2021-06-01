//function removeBrackets(line: string): string {
function removeBrackets(line) {    
    function cl () {
        for ( let i = 1; i <ar1.length; i++) {
            if ( ar1[i].br === open.get(ar1[i-1].br)) {
                console.log(`in  i=${i}  ar=${ar1}`);
                ar1.splice(i-1, 2);
                i -=2;
                console.log(`out  i=${i}  ar=${ar1}`);            
            }
        }
    }
    function cnt (op) {
        const cl = close.get(op);
        let cnt = 0;
        for ( let i=0; i<ar1.length; i++) {
            if ( ar1[i].br === op ) {
                cnt++;
                continue;
            }
            if ( ar1[i] === cl ) {
                if ( cnt > 0 ) {
                    cnt++;
                } else {
                    
                }

            }

        }
    }
    const open =  new Map( [ ['(', ')'], ['[', ']'], ['{', '}'] ]);
    const close = new Map( [ [')', '('], [']', '['], ['}', '{'] ]);
    const ar = line.split('');
    let ar1 = ar.map( (br, pos) => ({br, pos}));
    cl();
    console.log(ar);
    console.log(ar1);
    return ;
}

console.log('Example:');
console.log(removeBrackets('(({)()'));
