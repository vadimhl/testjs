export {treeFromArr, logTree, TreeNode}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.toString = function () { return `${this.val}` };
}

// Create tree from array
function treeFromArr (ar) {
	if (ar.length == 0 ) return null;
	let npos = 2;
	let pos = 1;
	let ind_up=0;
	let left = true;

	let nodes = [new TreeNode(ar[0])];

	for ( let i = 1; i < ar.length; i++ ) {
	    //console.log(`i=${i}  ar[i]=${ar[i]}   pos=${pos}  npos=${npos} ind_up=${ind_up}  left=${left}   ${nodes} `);
	    if (ar[i]) {
			nodes.push(new TreeNode(ar[i]) );
			//console.log(`         ind_up=${ind_up}  left=${left}   ${nodes} `);
			if ( left ) {
				 nodes[ind_up].left=nodes[i];
			} else {
				if (ar[i]) nodes[ind_up].right=nodes[i];
			}
		} else nodes.push(null);
		left = ! left;
		if ( left ) { 
		    do 
				ind_up++;
			while ( nodes[ind_up] === null )
		}
		pos++;
		if ( pos > npos ) {
		   npos *= 2;
		   pos = 1;
		}
	}
	return nodes[0];
}

function logTree (root) {
	let rez = [];
	let row = 0;
	function print2DUtil(root, space, simb) 
	{ 
        const COUNT = 2;
        if ( !root )  return; 
      
        space += COUNT; 
      
        print2DUtil(root.left, space, '/'); 
      
	    if ( !rez[space-COUNT-1] ) rez[space-COUNT-1]=[];
	    rez[space-COUNT-1][row] = simb;
    
        if ( !rez[space-COUNT] ) rez[space-COUNT]=[];
        rez[space-COUNT][row] = root.val;
        row++;
    
        print2DUtil(root.right, space, '\\'); 
	} 

	print2DUtil(root, 1, '|')
	//console.log(rez);
	for (let i = 0; i < rez.length; i++ ) {
	    let str = "";
	    if (!rez[i]) rez[i]=[] ;
		for (let j = 0; j < rez[i].length; j++ ) {
	       	str += (rez[i][j]?(""+rez[i][j]).padStart(3):"   ");
		}
		console.log(str);
	}
}



//let tree;
//tree =  treeFromArr ([1,2,2,3,3,null,null,4,4]);

//tree =  treeFromArr ([5,4,8,11,null,13,4,7,2,null,null,null,1]);
//console.log(tree.right);
//logTree( tree );
