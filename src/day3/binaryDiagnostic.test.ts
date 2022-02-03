import {
  binaryDiagnostic,
  convertToArrayOfArray,
  readValues,
} from "./binaryDiagnostic";
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

const basicExample = ["00100"];

const oneByTwo = [
  ["1", "0", "1"],
  ["0", "0", "1"],
  ["1", "0", "1"],
];

describe("binaryDiagnostic", () => {
  it("returns a number", () => {
    expect(binaryDiagnostic(binaryInput)).toEqual(0);
  });
});

describe("convertToArrayOfArray", () => {
  it("returns a number", () => {
    expect(convertToArrayOfArray(basicExample)).toEqual([
      ["0", "0", "1", "0", "0"],
    ]);
  });
});

describe("readValues", () => {
  it("returns most common digit", () => {
    expect(readValues(0, oneByTwo)).toEqual("1");
  });
});
