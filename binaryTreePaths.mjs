import {treeFromArr, logTree, TreeNode} from "./tree.mjs";



/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [];
    if (!root) return res;
    /**
    * @param {TreeNode} node
    * @param {string} path
    * @return {string[]}
 */
    var _binaryTreePaths = function( node, path) {
        path += node.val.toString()
        if ( !node.left && !node.right) {
            res.push(path)
            return;
        }
        path += '->';
        if ( node.left ) {
            _binaryTreePaths(node.left, path);
        }
        if ( node.right ) {
            _binaryTreePaths(node.right, path);
        }
    }    
    _binaryTreePaths(root, "");
    return res;
};
const tree = treeFromArr([1,2,3,null,5]);
logTree(tree);
const res = binaryTreePaths(tree);
console.log(res);