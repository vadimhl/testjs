const list = [
    'begin',
    'if',
    'if',
    'else',
    'endif',
    'if',
    'else',
    'endif',
    'if',
    'else',
    'endif',
    'else',
    'if',
    'if',
    'else',
    'endif',
    'if',
    'else',
    'endif',
    'else',
    'endif',
    'endif',
    'end',
  ];
  function test(a,b) {
    console.log('in  a=%s b=%s cnt=%', a, b);
    let deep = 0;
    let cnt=1;
    //if (b-a < 2) return 1;
    let st=a;
    let cnt_1;
    let cnt_2;
    for ( let i=a; i<=b; i++) {
        let token= list[i];
        console.log('--- i=%s deep=%s token=%s a=%s b=%s', i, deep, token, a, b);
        switch  ( token ) {
            case 'if' :
                deep++;
                if (deep==1) {
                    st= i+1;
                }
                break;
            case 'else' :
                if (deep==1) {
                    if (i-st>1) {
                        console.log('els a=%s b=%s', st,i-1);
                        cnt_1 = test(st,i-1);
                    } else {
                        cnt_1 = 1;
                    }
                    st=i+1;
                }
                break;
            case 'endif' :
                deep--;
                if (deep==0) {
                    if (i-st>1) {
                        console.log('end a=%s b=%s', st,i-1);
                        cnt_2 = test(st,i-1);
                    } else {
                        cnt_2=1;
                    }
                    st=i+1;
                    cnt *= (cnt_1 + cnt_2);
                }
                break;            
        } 
      }
      console.log('out a=%s b=%s cnt=%s', a, b, cnt);      
      return cnt;
  }
  console.log(test(0, list.length-1));