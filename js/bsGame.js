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
    };
};


