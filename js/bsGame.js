/**
 * Created by oscardelgadillo on 11/20/2015.
 */

var BSGame = function(){
    this.name = 'Battle Ship Game';
    this.players = [];


    this.start = function (){
        var sizeTable = validatingSizeTable();
        var name1 = validatingEmptyField('Insert name for player 1');
        var name2 = validatingEmptyField('Insert name for player 2');
        this.players.push(new Player(name1, sizeTable));
        this.players.push(new Player(name2, sizeTable));
        //this.players[1].shot.askCoordinates();
        //this.players[1].shot.makeShot(0);

        //like a player 1
        //this.players[1].shot.askCoordinates();
        //this.players[1].field.shot2ship(this.players[1].shot.x, this.players[1].shot.y);
        //this.players[1].field.displayTable(name2);
        //
        //this.players[0].shot.askCoordinates();
        //this.players[0].field.shot2ship(this.players[0].shot.x, this.players[0].shot.y);
        //this.players[0].field.displayTable(name1);

    };

};


