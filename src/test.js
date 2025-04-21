const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    
let total = sum(14, 9);

    
expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
   
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected);
})

test("One dollar should be 150 yen", function() {
    
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 156.5;

    expect(yen).toBe(expected); 
});

test("One yen should be 0.0053 pounds", function() {
    
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1000);

    const expected = 1000 * 0.0053;

    expect(pounds).toBe(expected); // 1 yen son 0.0053 libras, entonces 1000 yenes deberían ser = (1000 * 0.0053)
});