const TEAM_SIZE = 5;
const PLAYER_POOL = [
  "frittzinator",
  "machinshin",
  "bathamel",
  "roboduck",
  "gravling",
  "trayal",
  "boboo",
  "darkling",
  "nobody",
  "mepzon",
  "nejon",
  "geranos",
  "deja",
];

let teamOne,
  teamTwo,
  audience = [];

function divideArray(array) {
  const one = array.slice(0, TEAM_SIZE);
  const two = array.slice(TEAM_SIZE, TEAM_SIZE * 2);
  const rest = array.slice(TEAM_SIZE * 2, array.length);
  teamOne = [...one];
  teamTwo = [...two];
  audience = [...rest];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function generateTeams() {
  let tempPlayers = shuffleArray(PLAYER_POOL);
  divideArray(tempPlayers);
  updateUI();
  console.log(tempPlayers);
}

function copy() {
  let copyString =
    "==TEAM 1==\n" +
    teamOne +
    "\n==TEAM 2==\n" +
    teamTwo +
    "\n==AUDIENCE==\n" +
    audience;

  navigator.clipboard.writeText(copyString);
}

function updateTeamUI(teamId, players) {
  const teamElement = document.getElementById(teamId);
  clearPlayers(teamElement);
  players.forEach((player) => {
    const playerElement = document.createElement("p");
    playerElement.textContent = player;
    teamElement.appendChild(playerElement);
  });
}

function clearPlayers(teamElement) {
  const pElements = teamElement.getElementsByTagName("p");
  for (let i = pElements.length - 1; i >= 0; i--) {
    const pElement = pElements[i];
    pElement.parentNode.removeChild(pElement);
  }
}

function updateUI() {
  updateTeamUI("teamOne", teamOne);
  updateTeamUI("teamTwo", teamTwo);
  updateTeamUI("audience", audience);
}
