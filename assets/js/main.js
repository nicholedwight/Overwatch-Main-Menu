var heroesArray = [
  'ana',
  'bastion',
  'hanzo',
  'mercy',
  'reaper',
  'sombra',
  'symmetra',
  'torbjorn',
  'tracer',
  'widowmaker',
  'zarya',
  'zenyatta'
];

var randomHero = heroesArray[Math.floor(Math.random() * heroesArray.length)];

var heroName = document.getElementById("heroName");
var heroUnlocks = document.getElementById("heroUnlocks");
var heroVideo = document.getElementById("heroVideo");
var source = document.createElement('source');

source.setAttribute('src', './assets/gallery/' + randomHero + '.mp4');

heroVideo.appendChild(source);

heroName.innerHTML = randomHero;
heroUnlocks.innerHTML = Math.floor(Math.random() * 63) + "/63 Unlocks";
