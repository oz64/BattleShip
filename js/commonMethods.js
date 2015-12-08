/**
 * Created by oscardelgadillo on 12/7/2015.
 */

/**
 *
 * @param number
 * @returns {boolean}
 */

function isNumber(number){
    var resp = true;
    if (!/^([0-9])*$/.test(number))
        resp = false;
    return resp;
};

var validatingSizeTable = function()
{
    var flag;
    var size;
    do{
        size = prompt('Insert size for table');
        flag = isNumber(size);
        if (!flag)
            alert('Insert a correct value please.');
        if (flag && size < 3) {
            alert('The minimum size for table is 3');
            flag = false;
        }
    }while (flag != true);
    return size;
};

var validatingEmptyField = function(str) {
    var flag = true;
    var reply;
    do{
        reply = prompt(str);
        if (reply == "") {
            alert("You can't leave the field blank");
            flag = false;
        }
        else
            flag = true;
    }while (flag != true);
    return reply;
};

var validatingCoordinates = function(coordinate, sizetable)
{
    var flag;
    var number;
    do{
        number = prompt('Insert coordinate ' + coordinate);
        flag = isNumber(number);
        if (!flag)
            alert('Insert only numbers please.');
        if (flag && number > sizetable) {
            alert('You can not exceed the limit of board');
            flag = false;
        }
    }while (flag != true);
    return number;
};

