interface BinaryInput {
  zeroes: number;
  ones: number;
}

export const binaryDiagnostic = (binaryInput: string[], index: number) => {
  let zeroes = 0;
  let ones = 0;
  binaryInput.forEach((binaryBit) => {
    console.log(binaryBit);
    if (binaryBit[index] === "0") {
      zeroes++;
    } else {
      ones++;
    }
  });
  return { ones, zeroes };
};

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
