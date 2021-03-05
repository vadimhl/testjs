import {treeFromArr, logTree, TreeNode} from "./tree.mjs";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min=Infinity;
    const trmin = function(node, min) {
        if(!node) return min;
        return Math.min(min, node.val, trmin(node.left, min), trmin(node.right, min)  );
    }
    const trmax = function(node, max) {
        if(!node) return max;
        return Math.max(max, node.val, trmin(node.left, max), trmin(node.right, max)  );
    }
    const trdist = function(node) {
        if(!node) return;
        if (node.left) {
            min=Math.min(min, node.val-trmax(node.left, 0) );
            trdist(node.right);
        }
        if (node.right) {
            console.log(`node.val=${node.val}  min=${min}  ${trmin(node.right, Infinity)} `) 
            min=Math.min(min, trmin(node.right, Infinity) - node.val );
            trdist(node.left);
        }
    }
    trdist(root);
    return min;
};
let tree =  treeFromArr ([543,384,652,null,445,null,699] );
logTree( tree );
console.log(     getMinimumDifference(tree, tree.left, tree.right) );