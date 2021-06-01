//function removeBrackets(line: string): string {
function removeBrackets1(line) {    
    function cl () {
        let cnt_del=1;
        while ( cnt_del !==0 ) {
            cnt_del = 0;
            for ( let i = 1; i <arp.length; i++) {
                if ( arp[i].br === close[arp[i-1].br] ) {
                    arp.splice(i-1, 2);
                    i -=2;
                    cnt_del++;
                }
            }
        }
    }
    function cnt() {

    }
    const toRemove = [];
    const open  = {};
    open[')'] = '(';
    open[']'] = '[';
    open['}'] = '{';
    const close = {};
    close['('] = ')';
    close['['] = ']';
    close['{'] = '}';
    const ar = line.split('');
    let arp = ar.map( (br, pos) => ({br, pos}));
    cl();
    return arp;
}
function removeBrackets3(s) {
    s = s.split('').reverse();
    let brackets = [];
    const  pairs = {')': '(', ']': '[', '}': '{'};
    let valid = new Array(s.length);
    s.forEach((c, i) => {
        if (')]}'.includes(c)) 
        {
            brackets.push(i);
        } else if ('([{'.includes(c)) 
        {
            let found = null;
            brackets.forEach((j, ix) => {
                if (pairs[s[j]] === c)
                found = ix;
            });
            if (found !== null) 
            {
                valid[i] = 1;
                valid[brackets[found]] = 1;
                brackets = brackets.slice(0, found);
            }
        }
    });
    return s.filter((c, i) => valid[i]).reverse().join('');
}
function removeBrackets(line) {
    const ar = line.split('');
    let stack = [];
    const  closeBrackets  = {   ')': '(', 
                                ']': '[', 
                                '}': '{' 
                            };
    let okList = new Set();
    for( let i=ar.length-1; i >= 0; i--) {
        const c = ar[i];
        if ( c in closeBrackets)
        {
            stack.push(i);
        } else  
        {
            let found = null;
            stack.forEach((j, indInStack) => {
                if (closeBrackets[ar[j]] === c)
                found = indInStack;
            });
            if (found !== null) 
            {
                okList.add(i);
                okList.add(stack[found]);
                stack = stack.slice(0, found);
            }
        }
    }
    return ar.filter((br, i) => okList.has(i)).join('');
}
console.log(removeBrackets('(({)([]{})'));
