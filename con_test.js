const ob = {f1:'asd', f2:123};
const ar =[1,2,3]; 
console.group();
console.log('ob: %o', ob);
console.group();
console.table(ar);
console.error('bbbbbbbbbb');
console.groupEnd();
console.log('cccccccccccccc');
console.groupEnd();
