const denverBroncosRecord = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

const superbowlWin = (record) => {
  const winningGame = record.find((game) => game.result === "W");
  //   return winningGame ? winningGame.year : undefined;
  if (winningGame && winningGame.result === "W") {
    return winningGame.year;
  } else {
    return undefined;
  }
};

const winYear = superbowlWin(denverBroncosRecord);
console.log(winYear);
