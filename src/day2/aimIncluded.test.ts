import { aimIncluded } from "./aimIncluded";
import { commands } from "../day2/commands";
let input = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];

describe("aimIncluded", () => {
  it("returns depth", () => {
    expect(aimIncluded(input)).toBe(900);
    expect(aimIncluded(commands)).toBe(1251263225);
  });
});
