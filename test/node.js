(async function() {
    const _ = require('../dist/donot.js');
    console.log(_.randInt(5, 10));

    const grid = _.matrix([1,2,3], [4,5,6]);
    console.log(grid[0][1]); //

    let options = _.combinations([1, 2]);
    console.log(options); // [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ] ]

    options = _.combinations([1, 2], { allowEquals : false });
    console.log(options); // [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ] ]

    console.log(_.range(3));
    console.log(_.range(2,5));

    console.log(_.sum([1,2,3,4]));

    const nrs = _.range(1, 10);
    const chunks = _.chunk(nrs, 4);
    console.log(chunks);

    const url = _.urlWithParams('http://example.com', {
        foo : 'bar',
        1 : '2'
    });

    console.log('urlWithParams: ', url);

    console.log("Let's wait 2 seconds");
    await _.timeout(2000);
    console.log("That was 2 seconds");
})();