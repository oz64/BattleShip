/**
 * Created by oscardelgadillo on 11/20/2015.
 */

var BSGame = function(){
    this.name = 'Battle Ship Game';
    this.players = [];
    this.turn = '0';


    this.start = function (){
        var sizeTable = validatingSizeTable();
        var name1 = validatingEmptyField('Insert name for player 1');
        var name2 = validatingEmptyField('Insert name for player 2');
        this.players.push(new Player(0, name1, sizeTable));
        this.players.push(new Player(1, name2, sizeTable));

    };
};

BSGame.prototype.getTurn = function (playerId, x, y, e) {

    if(this.turn == playerId)
    {
        alert('Rayos y centellas Batman');
        return false;
    }
    else
    {
        if(this.players[playerId].field.shot2ship(x, y))
        {
            $(e.target).css('background-image','url("js/styles/shot.jpg")');
            $(e.target).css('background-size','contain');
            $(e.target).off('click');
        }
        else
        {
            $(e.target).css('background-image','url("js/styles/water.png")');
            $(e.target).css('background-size','contain');
            $(e.target).off('click');
        }



        if(this.turn == '1')
            this.turn = '0';
        else
            this.turn = '1';

        return true;
    }
};




