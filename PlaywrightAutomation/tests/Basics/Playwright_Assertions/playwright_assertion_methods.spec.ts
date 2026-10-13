import {test, expect} from '@playwright/test';

test.describe("Playwright Assertion Methods", async() => { 
    test("Generic Assersion Test1", async()=> {
        var value=1
        expect(value).toBe(1)
    });

    test("Verify all text should be there", async()=> {
        class Example {}
        expect(new Example()).toEqual(expect.any(Example));
        expect({ prop: 1 }).toEqual({ prop: expect.any(Number)})
        expect('abc').toEqual(expect.any(String));
    })

    test("Verify anything in the value except null or undefined", async()=> {
        var data = {prop: undefined}
        expect(data).toEqual({prop: expect.anything()});

        var data2 = 'Hello'
        expect(data).toEqual({prop: expect.anything()});
    })

    test("Arrar contains some values", async()=> {
        
        expect([5, 6, 7, 8, 2]).toEqual(expect.arrayContaining([6, 8, 2]));
        expect([5, 16, 17, 8, 12]).toEqual(expect.arrayContaining([6, 8, 12]));

    });


});