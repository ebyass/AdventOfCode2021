export const horizontalPositionAndDepth = (commands: string[]): number => {
  let horizontalCount = 0;
  let depthCount = 0;

  for (let i = 0; i < commands.length; i++) {
    let splitCommand = commands[i].split(" ");
    if (splitCommand[0] === "forward")
      horizontalCount += parseInt(splitCommand[1]);
    if (splitCommand[0] === "down") depthCount += parseInt(splitCommand[1]);
    if (splitCommand[0] === "up") depthCount -= parseInt(splitCommand[1]);
  }
  return horizontalCount * depthCount;
};
