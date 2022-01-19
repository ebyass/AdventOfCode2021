import { binaryDiagnostic } from "./binaryDiagnostic";
import { binary } from "../day3/binary";
const binaryInput = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

describe("binaryDiagnostic", () => {
  it("returns the zeroes amd ones", () => {
    expect(binaryDiagnostic(binaryInput, 1)).toBe({ ones: 5, zeroes: 7 });
    // expect(binaryDiagnostic(binary)).toBe(198);
  });
  it("returns the zeroes amd ones", () => {
    // expect(binaryDiagnostic(binaryInput)).toBe(198);
    expect(binaryDiagnostic(binaryInput, 2)).toBe({ ones: 8, zeroes: 4 });
  });
  it("returns the zeroes amd ones", () => {
    // expect(binaryDiagnostic(binaryInput)).toBe(198);
    expect(binaryDiagnostic(binaryInput, 3)).toBe(198);
  });
  it("returns the zeroes amd ones", () => {
    // expect(binaryDiagnostic(binaryInput)).toBe(198);
    expect(binaryDiagnostic(binaryInput, 4)).toBe(198);
  });
  it("returns the zeroes amd ones", () => {
    // expect(binaryDiagnostic(binaryInput)).toBe(198);
    expect(binaryDiagnostic(binaryInput, 5)).toBe(198);
  });
});
