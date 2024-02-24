/**
 * Returns the predictions for the given teams
 * @param {Array} teams- A list of teams in string format
 * @returns {Object}- Of teams name as key and float value
 */
export async function getTeams(teams) {
  const url = `http://127.0.0.1:5000/api/getPrediction?teams=${JSON.stringify(
    teams
  )}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return await res.json();
}

/**
 * Returns the predictions for the given teams
 * @param {number} num- A list of teams in string format
 * @returns {Array[Array]}- Array of team pairs
 */
export async function getFutureGames(num) {
  const url = `placeholder`;
  let games = [];
  const res = await setTimeout(function () {
    () => {};
  }, 500);

  for (let i = 0; i < num; i++) {
    games.push([`Team ${i * 2}`, `Team ${i * 2 + 1}`]);
  }
  return games;
}
