document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#games-logged-form');

const handleSubmit = function(event) {
  event.preventDefault();

  const nameOfGame = document.querySelector('#name');
  const winnerOfGame = document.querySelector('#winner');

  const nameOfGameText = nameOfGame.value;
  const winnerOfGameText = winnerOfGame.value;

  const newGameLogged = document.createElement('p');
  const gameRecordString = `Game Played: ${nameOfGameText} `;
  const winnerRecordString = `Winner: ${winnerOfGameText}`;
  newGameLogged.textContent = gameRecordString;

  const gamesPlayed = document.querySelector('#games-played');
  gamesPlayed.appendChild(newGameLogged);

  form.reset();
};

form.addEventListener('submit', handleSubmit);


};
