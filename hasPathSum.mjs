import {treeFromArr, logTree, TreeNode} from "./tree.mjs";

var hasPathSum = function(root, targetSum) {
    if (!root) return targetSum==0;
	let sum = 0;
	let rez = false; 
	let PathSum = function( node ) {
	    sum += node.val;
	    console.log( `val=${node.val}  sum=${sum}`)
		if ( !node.left && !node.right ) {
			if ( sum === targetSum ) rez = true;
			return;
		}
		if ( node.left  ) {
			PathSum(node.left);
		}
		if ( node.right ) {
			PathSum(node.right);
		}
	}
	PathSum(root);
	return rez;

};

let tree;
//tree=new TreeNode( 2, null ,new TreeNode( 3, null, new TreeNode( 4, null, new TreeNode( 5, null, new TreeNode( 6, null, null)))));

tree =  treeFromArr ([5,4,8,11,null,13,4,7,2,null,null,null,1]);
//tree =  treeFromArr ([2,null,3,null,4,null,5,null,6]);

logTree( tree );
console.log(hasPathSum(tree, 22))
