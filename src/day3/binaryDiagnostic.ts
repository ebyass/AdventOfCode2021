export const binaryDiagnostic = (binaryInput: string[]): number => {
  let gamma = [];
  let gammaDecimal = 0;
  let epsilonDecimal = 0;
  const data = convertToArrayOfArray(binaryInput);
  const length = data[0].length;
  for (let i = 0; i < length; i++) {
    gamma.push(readValues(i, data));
  }
  let epsilon = gamma.map((item) => {
    return item === "1" ? "0" : "1";
  });
  console.log("g", gamma);
  console.log("e", epsilon);
};

// function text2Binary(string) {
//   return string
//     .split("")
//     .map(function (char) {
//       return char.charCodeAt(0).toString(2);
//     })
//     .join(" ");
// }

export function convertToArrayOfArray(basicInput: string[]) {
  const newResult = basicInput.map((item) => {
    return item.split("");
  });
  console.log(newResult);
  return newResult;
}

export function readValues(index: number, basicInput: string[][]) {
  let zero = 0;
  let one = 0;
  for (let i = 0; i < basicInput.length; i++) {
    if (basicInput[i][index] === "0") {
      zero++;
    } else {
      one++;
    }
  }
  return zero > one ? "0" : "1";
}

// const lengthOfInput = binaryInput.length;
// let binaryInputMap = binaryInput
//   .map((binaryString) => {
//     return parseInt(binaryString);
//   })
//   .reduce((a, b) => {
//     console.log(a + b);
//     return a + b;
//   });

// console.log({ binaryInputMap });
// let result = [];
// const sumOfOnes = binaryInputMap.toString().split("");
// console.log({ sumOfOnes });
// const halfOfLength = lengthOfInput / 2;
// console.log({ halfOfLength });
// for (let i = 0; i < sumOfOnes.length; i++) {
//   if (parseInt(sumOfOnes[i]) > halfOfLength) {
//     result.push(1);
//   } else {
//     result.push(0);
//   }
// }

// const gamma = result.join("");
// console.log({ gamma });
// const gammaDec = parseInt(gamma, 2);
// console.log({ gammaDec });
// let epsilon: string[] = [];
// gamma.split("").map((item) => {
//   if (item === "0") {
//     epsilon.push("1");
//   } else {
//     epsilon.push("0");
//   }
// });
// let epsilonDec = parseInt(epsilon.join(""), 2);
// console.log({ epsilonDec });
// return gammaDec * epsilonDec;
