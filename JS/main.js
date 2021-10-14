const player1 = {
  nameFighter: 'Scorpion',
  hp: 70,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['sword', 'nunchucks', 'trident', 'fireball', 'iceball', 'poisonSpit', 'scorpionSting'],
  attack: function() {
    console.log(scorp.name + ' - Fight!..') 
  },
}

const player2 = {
  nameFighter: 'SubZero',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['sword', 'nunchucks', 'trident', 'fireball', 'iceball', 'poisonSpit', 'scorpionSting'],
  attack: function() {
    console.log(subZ.name + ' - Fight!..') 
  },
}
//mortalcombat


function createPlayer(player, playerName) {
  const $player = document.createElement('div');
  $player.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $img = document.createElement('img');
  $img.src = playerName.img;

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = playerName.hp + '$';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = playerName.nameFighter;

  
  $arenas.appendChild($player);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
}
const $arenas = document.querySelector('.arenas');


createPlayer('player1', player1);
createPlayer('player2', player2);