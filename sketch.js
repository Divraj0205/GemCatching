var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var gems;
var gemsGroup;
var dagger;
var daggerGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var ending;


var player1score =0;
var player2score =0;



function preload(){
  back_img = loadImage("images/lava.png");
  player_img = loadImage("images/axe.png");
  gem1_img = loadImage("images/goldbar.png");
  gem2_img = loadImage("images/greendiamond.png");
  gem3_img = loadImage("images/purplediamond.png");
  gem4_img = loadImage("images/purplestar.png");
  gem5_img = loadImage("images/stardiamond.png");
  daggerPng=loadImage("images/dagger.png");
  gemsGroup = new Group();
  daggerGroup=new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  ending=new endForm();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    ending.display();
     game.end();
   }
}