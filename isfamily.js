//function isFamily(tree: [string, string][]): boolean {
function isFamily1(tree) {
    const fathers = new Map();
    const sons = new Map();
    for ( const el of tree ) {
        const father = el[0];
        const son = el[1];
        if ( son === father ) return false;
        if ( fathers.has( father ) ) {
            fathers.get( father  ).sons.push( son );
        } else {
            fathers.set( father , {name:father, sons:[son]} );
        }
        if ( sons.has( son ) ) {
            return false;
        } else {
            sons.set( son, father );
        }
    }
    let stack = Array.from(fathers.values()).filter( person => !sons.has( person.name ) );
    if ( stack.length !==1 ) return false;
    let level = 1;
    while ( stack.length>0) {
        let newst=[];
        for (const p of stack) {
            console.log(`p={name:${p.name} level:${p.level} sons:${p.sons} `);
            if ( p.level ) return false;
            p.level = level;
            for (const s of p.sons ) {
                if ( fathers.has(s) ) {
                    newst.push( fathers.get(s) )
                }
            }
        }
        level++;
        stack= newst;
    }
    return fathers;
}
function isFamily(tree) {
    const persons = new Map();
    const sons = new Map();

    for ( const el of tree ) {
        const father = el[0];
        const son = el[1];
        if ( son === father || sons.has( son ) ) {
            return false;
        }
        sons.set( son, father );

        if ( persons.has( father ) ) {
            persons.get( father  ).sons.push( son );
        } else {
            persons.set( father , {name:father, sons:[son]} );
        }
        if ( !persons.has(son) ) {
            persons.set( son , {name:son, sons:[]} );
        }
    }
    let list = Array.from(persons.values()).filter( person => !sons.has( person.name ) );
    if ( list.length !==1 ) return false;
    let level = 1;
    while ( list.length > 0) {
        let newlist=[];
        for (const p of list) {
            console.log(`p={name:${p.name} level:${p.level} sons:${p.sons} `);
            if ( p.level ) return false;
            p.level = level;
            for (const s of p.sons ) {
                newlist.push( persons.get(s) )
            }
        }
        level++;
        list = newlist;
    }
    return Array.from(persons.values()).every( p => p.level );
}
console.log(
isFamily(    [
    ["Logan","Mike"],
    ["Alexander","Jack"],
    ["Jack","Alexander"]
])
);
