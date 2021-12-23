import { horizontalPositionAndDepth } from "../day2/horizonalPositionAndDepth";
import { commands } from "./commands";

let input = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];

const depthDepths = describe("horizontalPositionAndDepth", () => {
  it("returns the horizontal position and depth multiplied", () => {
    expect(horizontalPositionAndDepth(input)).toBe(150);
    expect(horizontalPositionAndDepth(commands)).toBe(1580000);
  });
});
