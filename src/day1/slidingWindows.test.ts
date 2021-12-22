import { slidingWindows } from "./slidingWindows";
import { depths } from "./depths";

const testDepths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("slidingWindows", () => {
  it("returns something", () => {
    expect(slidingWindows(testDepths)).toBe(5);
    expect(slidingWindows(depths)).toBe(5);
  });
});
