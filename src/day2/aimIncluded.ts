export const aimIncluded = (commands: string[]): number => {
  let horizontalCount = 0;
  let depthCount = 0;
  let aim = 0;

  for (let i = 0; i < commands.length; i++) {
    let splitCommand = commands[i].split(" ");
    if (splitCommand[0] === "forward") {
      horizontalCount += parseInt(splitCommand[1]);
      depthCount += parseInt(splitCommand[1]) * aim;
    }
    if (splitCommand[0] === "down") aim += parseInt(splitCommand[1]);
    if (splitCommand[0] === "up") aim -= parseInt(splitCommand[1]);
  }
  return depthCount * horizontalCount;
};
