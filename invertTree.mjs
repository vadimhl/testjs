import {treeFromArr, logTree, TreeNode} from "./tree.mjs";
var invertTree = function(root) {
    if (root) {
        [root.left, root.right] = [ invertTree(root.right) , invertTree(root.left) ];
    }
    return root;
}
const tr = treeFromArr([4,2,7,1,3,6,9]);
logTree(tr);
logTree(invertTree(tr));