function gt (d:Date):string{
    if (!d) return '  :  :  ';
    return d.toISOString().substr(11, 8)
}
function sumLight(
    el: Array<Date | [Date, number]>,
    startWatching?: Date,
    endWatching?: Date,
    operating?: number): number {

        let els:Array< [Date, number]> = el.map( item => Array.isArray( item )? item : [item, 1] );
    els = els.sort( (a,b) => a[0].valueOf()-b[0].valueOf());

    startWatching = !startWatching || startWatching < els[0][0] ? els[0][0] : startWatching;
    endWatching = endWatching ?? els[els.length-1][0];

    const lamps_times: Date[][]= els.reduce( (res, [dat, lamp] ) => {
                                        lamp--;
                                        if (res[lamp]) { 
                                            res[lamp].push(dat) 
                                        } else {
                                            res[lamp] = [dat];
                                        }
                                        return res;}
                                    , [] );
    let periods: {st:Date, end:Date}[] =[];
    for (const tlamps of lamps_times) {
        let worktime: number = 0; 
        for ( let i=0; i<tlamps.length; i+=2 ) {
            let st :Date = tlamps[i];
            let end :Date = tlamps[i+1] ?? endWatching;
            if (  endWatching < st || startWatching > end ) {
                continue;
            }
            if ( startWatching > st ) {
                st = startWatching;
            }
            if ( endWatching < end ) {
                end = endWatching;
            }
            const tp: number = (end.valueOf() - st.valueOf())/1000;

            if ( worktime + tp > operating ) {
                end.setSeconds(end.getSeconds() - (worktime + tp - operating));
                periods.push( {st, end} );
                break;
            } else {
                worktime += tp;
            }
            periods.push( {st, end} )
        }
    }
    console.log(periods);
    periods.sort( (a,b) => a.st.valueOf() - b.st.valueOf() );
    let res: number = 0;
    let {st, end}  = periods[0];
    for ( let i = 1; i<periods.length; i++) {
        
        let {st:sti, end:endi}  = periods[i];
        console.log(`i=${i} st=${gt(st)} st=${gt(st)} `);
        if ( sti >= end ) {
            res += end.valueOf() - st.valueOf();
            st = sti;
            end = endi;
            console.log(1);
        } else if ( endi < end ) {
            console.log(2);
            continue;
        } else {
            console.log(3);
            end = endi;
        }
    }
    res += end.valueOf() - st.valueOf();
    return res/1000;
}


console.log("Example:");
console.log(sumLight(

    [
        [new Date(2015, 1, 12, 10, 0, 10), 3],
        new Date(2015, 1, 12, 10, 0, 20),
        [new Date(2015, 1, 12, 10, 0, 30), 3],
        [new Date(2015, 1, 12, 10, 0, 30), 2],
    ], new Date(2015, 1, 12, 10, 0, 10), new Date(2015, 1, 12, 10, 0, 30),
    5)

);

