function currencyStyle(line) {
    let ar = line.matchAll(/\$[.,0-9]*/g);
    
    return ar;
}

console.log(currencyStyle('$5.34 $222,100,455.34  $34 $222,100,455 $222.100.455'));