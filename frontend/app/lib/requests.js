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
