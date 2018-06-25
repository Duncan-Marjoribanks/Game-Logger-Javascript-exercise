document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


const form = document.querySelector('#games-logged-form');



const handleSubmit = function (event) {

  event.preventDefault();

  const nameOfGame = this.querySelector('#name');
  const winnerOfGame = this.querySelector('#winner');

  const nameOfGameText = nameOfGame.value;
  const winnerOfGameText = winnerOfGame.value;

  const newGameLogged = document.createElement('li');
  const gameLoggedString = `Game Played: ${nameOfGameText} `;
  const winnerRecordString = `Winner: ${winnerOfGameText}`;
  newGameLogged.textContent = gameLoggedString;

  const gamesPlayed = document.querySelector('#games-played');
  gamesPlayed.appendChild(newGameLogged);

  form.reset();
};

form.addEventListener('submit', handleSubmit);


};
