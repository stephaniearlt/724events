import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function returns janvier for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01");
            const monthName = getMonth(date);
            expect(monthName).toBe("janvier");
        });

        it("the function returns juillet for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08");
            const monthName = getMonth(date);
            expect(monthName).toBe("juillet");
        });

        it("the function returns undefined for invalid date", () => {
            const date = new Date("invalid-date");
            const monthName = getMonth(date);
            expect(monthName).toBeUndefined();
        });
    });
});
