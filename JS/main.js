const $arenas = document.querySelector('.arenas');
const $randomBatton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  attack: function(name) {
    console.log(name + ' Fight!..');
  },
}

const player2 = {
  player: 2,
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  attack: function(name) {
    console.log(name + ' Fight!..');
  },
}


function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);

  }
  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement('div', 'player' + playerObj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = playerObj.hp + '%';
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player +' .life');
  player.hp -= Math.floor(Math.random() * 10);
  $playerLife.style.width = player.hp + '%';
  console.log(changeHP);

  if (player.hp <= 0) {
    $arenas.appendChild(playerWins(player.name));
    $playerLife.style.width = 0 + '%';
    $randomBatton.disabled = true;
  } 
}

function playerWins(name) {
  const $winsTitle = createElement('div', 'loseTitle');
  $winsTitle.innerText = name + ' wins';

  return $winsTitle;
} 

$randomBatton.addEventListener('click', function() {
  console.log('####: Click Random Button');
  changeHP(player1);
  changeHP(player2);

})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

