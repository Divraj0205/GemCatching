class endForm{
    constructor(){
        this.reset = createButton('Reset');
    }
    hide() {

    }
    display() {
        this.title.html("GAME OVER");
        this.title.position(width/2, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'red');
        push();
        textSize(40);
        stroke("white");
        strokeWeight(10);
        text("Player 1 :" +allPlayers.player1.score,50,200);
        text("Player 2 :" + allPlayers.player2.score, 50, 350);
        pop();
        if(allPlayers.player1.score>allPlayers.player2.score){
            textSize(40);
            stroke("white");
            strokeWeight(10);            
            text("PLAYER 1 WIN",100,500);
        }else if(allPlayers.player1.score<allPlayers.player2.score){
            textSize(40);
            stroke("white");
            strokeWeight(10);
            text("PLAYER 2 WIN",100,500);
        }else{
            textSize(40);
            stroke("white");
            strokeWeight(10);
            text("DRAW",100,500);
        }

        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');


        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}