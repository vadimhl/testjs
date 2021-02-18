function eval1(a, op, b) 
{ 
    if (op == '+') return a + b; 
    if (op == '-') return a - b; 
    if (op == '*') return a * b; 
} 
  
function eval1uateAll(expr, low, high) 
{ 
    const res = []; 
  
    if (low === high) 
    { 
        res.push(expr[low]) 
        return res; 
    } 
  
    if (low === (high - 2)) 
    { 
        const num = eval1(expr[low], expr[low + 1], expr[low + 2]); 
  
        res.push(num); 
        return res; 
    } 
  
    for (let i = low + 1; i <= high; i += 2) 
    { 
        const l = eval1uateAll(expr, low, i - 1); 
  
        const r = eval1uateAll(expr, i + 1, high); 
  
        for (s1 = 0; s1 < l.lenght; s1++) 
        { 
            for (let s2 = 0; s2 < $r.lenght; s2++) 
            { 
                res.push(eval1( l[ s1], expr[i], r[s2])); 
            } 
        } 
    } 
    return res; 
} 
  
// Driver Code 
let expr = "1"; 
const numbers = expr.split(/[-+*]/);
const opers = expr.split(/\d+/).slice(1, numbers.length);
expr = [parseInt(numbers[0])];
for (let i = 0; i< opers.length; i++) {
    expr.push(opers[i]);
    expr.push(parseInt(numbers[i+1]));
}
expr = [1, '+', 2, '*', 3];
//console.log(expr);
const ans = eval1uateAll(expr, 0, expr.length - 1); 
console.log(ans);
  
