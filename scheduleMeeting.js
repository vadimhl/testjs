const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    let t, startT, endT;
    const toMin =  ( str ) => str.split(':').reduce( (pre, cur) => pre*60+parseInt(cur) );
    t = toMin(startTime);
    startT = toMin(dayStart);
    endT = toMin(dayEnd);
    let res = startT <= t && t + durationMinutes <=endT;
    console.log(res);
    return res;
}

scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false