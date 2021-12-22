export const checkDepths = (depths: number[]): number => {
  let depthIncreaseCount = 0;

  for (let i = 1; i < depths.length; i++) {
    if (depths[i - 1] < depths[i]) depthIncreaseCount++;
  }
  return depthIncreaseCount;
};
