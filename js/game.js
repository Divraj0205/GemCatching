class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);

    players= [player1,player2];
    console.log(players);
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                    
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     //console.log(index);
                     if(index<3){
                     players[index -1].x = x;
                     players[index - 1].y = y;
                     }
                     //console.log(players);
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    //Teacher Added
                     textSize(25);
                     fill("white");
                     text("Player 1 :" +allPlayers.player1.score,50,50);
                     text("Player 2 :" + allPlayers.player2.score, 50, 100);
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     gems = createSprite(random(100, 1000), 0, 100, 100);
                     gems.scale=0.2;
                     gems.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: gems.addImage("gem1",gem1_img);
                         break;
                         case 2: gems.addImage("gem1", gem2_img);
                         break;
                         case 3: gems.addImage("gem1", gem3_img);
                         break;
                         case 4: gems.addImage("gem1", gem4_img);
                         break;
                         case 5: gems.addImage("gem1", gem5_img);
                         break;
                     }
                     gemsGroup.add(gems);
                     
                     
                 }

                 if (frameCount % 200 === 0) {
                    dagger = createSprite(random(player.distance-50,player.distance+50), 0, 100, 100);
                    dagger.addImage("dagger.png", daggerPng);
                    dagger.scale=0.2;
                    dagger.velocityY = 20;
                    daggerGroup.add(dagger); 
                }
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects.
                     for(var i=0; i<gemsGroup.length; i=i+1){
                     if(gemsGroup.get(i).isTouching(players)){
                     gemsGroup.get(i).destroy();
                     player.score =player.score+3;
                     player.update();
                    
                     }
                    }
                  }

                  if (player.index !== null) {
                    //fill code here, to destroy the objects.
                    for(var j=0; j<daggerGroup.length; j=j+1){
                    if(daggerGroup.get(j).isTouching(players)){
                    daggerGroup.get(j).destroy();
                    gameState=2;
                    game.update();
                    }
                   }
                 }
    }

    end(){
        ending.display;
       console.log("Game Ended");
    }
}