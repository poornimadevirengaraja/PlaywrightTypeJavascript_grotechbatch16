import {test} from '@playwright/test'

test.describe("Booking Website", ()=> {
    test.describe("Flight Booking", ()=> {
        test("Flight booking test1", ()=> {
            console.log("Flight booking test1")
        });

        test("Flight booking test2", ()=> {
            console.log("Flight booking test2")
        });
        test("Flight booking test3", ()=> {
            console.log("Flight booking test3")
        });

        test("Flight booking test4", ()=> {
            console.log("Flight booking test4")
        });
    });


    test.describe("Hotel Booking", ()=> {
        test("Hotel booking test1", ()=> {
            console.log("Hotel booking test1")
        });

        test("Hotel booking test2", ()=> {
            console.log("Hotel booking test2")
        });
        test("Hotel booking test3", ()=> {
            console.log("Hotel booking test3")
        });

        test("Hotel booking test4", ()=> {
            console.log("Hotel booking test4")
        });
    });

    test.describe("Car Booking", ()=> {
        test("Car booking test1", ()=> {
            console.log("Car booking test1")
        });

        test("Car booking test2", ()=> {
            console.log("Car booking test2")
        });
        test("Car booking test3", ()=> {
            console.log("Car booking test3")
        });

        test("Car booking test4", ()=> {
            console.log("Car booking test4")
        });
    });


    
});