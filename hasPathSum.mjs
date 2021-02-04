import {treeFromArr, logTree, TreeNode} from "./tree.mjs";

var hasPathSum = function(root, targetSum) {
    if (!root) return targetSum==0;
	let rez = false; 
	let PathSum = function( node, sum ) {
	    sum += node.val;
		if ( !node.left && !node.right ) {
			if ( sum === targetSum ) rez = true;
			return;
		}
		if ( node.left  ) {
			PathSum(node.left, sum );
		}
		if ( node.right ) {
			PathSum(node.right, sum );
		}
	}
	PathSum(root, 0);
	return rez;
};

let tree =  treeFromArr ([5,4,8,11,null,13,4,7,2,null,null,null,1]);

logTree( tree );
console.log(hasPathSum(tree, 22))
