function scoreboard() {
  const scores = [
    { name: "Jaysus", score: 100 },
    { name: "Nicole", score: 50 },
    { name: "Merel", score: 25 },
    { name: "Soep", score: 77 },
  ];
  scores.sort((a, b) => -a.score + b.score); //Sorting entries by their scores
  console.log(scores);
  let scoreTable = `<tr>
  <th>Rank</th>
  <th>Name</th>
  </tr>`;

  let rankingTable = [];
  for (let i = 0; i < scores.length; i++) {
    rankingTable[i] = `<tr><th>${i + 1}</th><th>${scores[i].name}</th></tr>`;
  }
  scoreTable = scoreTable + rankingTable.join();
  $(".js-scoreboard").html(scoreTable);
}
$(scoreboard);
