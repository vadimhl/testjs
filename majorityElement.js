var majorityElement = function(nums) {
    let map = new Map();
    const maj = Math.floor(nums.length / 2);
    if ( maj===0 ) return nums[0];
    for ( let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if ( map.has( el ) ) {
            const cnt=map.get( el ) + 1;
            if ( cnt > maj ) return el;
            map.set(el, cnt);
        } else {
            map.set( el, 1 );
        }
    }
};
var majorityElement1 = function(nums) {
    let answer = nums[0];
    let acc = 1;
    
    for (let i = 1, max = nums.length; i < max; i++) {
      if (acc === 0) {
        answer = nums[i];
      }
      
      if (nums[i] === answer) {
        acc += 1;
      } else {
        acc -= 1;
      }
      console.log( `i=${i} answer=${answer} acc=${acc}`);
    }
        return answer;
  };
console.log(majorityElement1([1,1,2,2,2,1,1,1,2,1,1,3,3,3]));