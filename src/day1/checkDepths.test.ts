import { checkDepths } from "./checkDepths";
import { depths } from "./depths";

const testDepths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("checkDepths", () => {
  it("returns something", () => {
    expect(checkDepths(testDepths)).toBe(7);
    expect(checkDepths(depths)).toBe(1195);
  });
});
