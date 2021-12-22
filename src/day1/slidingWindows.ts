export const slidingWindows = (depths: number[]): number => {
  let depthIncreaseCount = 0;

  for (let i = 1; i < depths.length - 2; i++) {
    const currentSum = depths[i - 1] + depths[i] + depths[i + 1];
    const nextSum = depths[i] + depths[i + 1] + depths[i + 2];
    if (currentSum < nextSum) depthIncreaseCount++;
  }
  return depthIncreaseCount;
};
