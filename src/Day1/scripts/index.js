import { data } from "../data";

let depthsInIntegers = data;
console.log(depthsInIntegers);

export const convertDepthIntegersToArray = (depthsInIntegers) => {
  let arrayOfDepths = String(depthsInIntegers)
    .split("")
    .map((integer) => {
      return Number(integer);
    });

  return arrayOfDepths;
};
