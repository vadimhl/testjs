import {treeFromArr, logTree, TreeNode} from "./tree.mjs";

/**
 * @param {TreeNode} root
 * @return {number}
 */
let getMinimumDifference = function(root) {
    let ar=[];
    const tr = function(node) {
        if(!node) return;
        ar.push(node.val);
        tr(node.left);
        tr(node.right);
    }
    tr(root);
    ar.sort( (a,b)=>a-b);
    console.log(ar);
    let min = ar[1]-ar[0];
    for ( let i=1; i<ar.length-1; i++ ) {
        min = Math.min(min, ar[i], ar[i+1]);
    }
    return min;
};
let tree =  treeFromArr ([60,30,80, 20,40, 70, 90] );
logTree( tree );
console.log(     getMinimumDifference(tree, tree.left, tree.right) );