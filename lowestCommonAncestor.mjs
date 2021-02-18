import {treeFromArr, logTree, TreeNode} from "./tree.mjs";
var lowestCommonAncestor = function(root, p, q) {
    //console.log(`___ root=${root.val} p=${p.val} q=${q.val}`)
    const path1 = [];
    const path2 = [];
    var findPath = function ( head, path, el) {
        if (!head) return false;
        if ( head===el) {
            path.push(el);
            return true;
        } 
        if (findPath(head.left, path, el) || findPath(head.right, path, el) ) {
            path.push(head);
            return true;
        } else {
            return false;
        }
    }
    findPath(root, path1, p);
    findPath(root, path2, q);
    console.log( path1.reduce( (s, el) => s + el.val+", " ,"path1 = ") );
    console.log( path2.reduce( (s, el) => s + el.val+", " ,"path1 = ") );

    let p1l =path1.length-1;
    const p2l =path2.length-1;

    if (p1l < p2l) {
        path2.splice(0, p2l - p1l);
    } else {
        path1.splice(0, p1l - p2l);
        p1l = p2l;
    }
    console.log( path1.reduce( (s, el) => s + el.val+", " ,"path1 = ") );
    console.log( path2.reduce( (s, el) => s + el.val+", " ,"path1 = ") );

    for (let i = 0; i<= p1l; i++) {
        if ( path1[i] === path2[i]) return path2[i];
    }   
    return null; 
    //console.log( path1.reduce( (s, el) => s + el.val+", " ,"path1 = ") );
    //console.log( path2.reduce( (s, el) => s + el.val+", " ,"path1 = ") );

};

let tree =  treeFromArr ([6,2,8,0,4,7,9,null,null,3,5] );
logTree( tree );
console.log(     lowestCommonAncestor(tree, tree.left, tree.right) );