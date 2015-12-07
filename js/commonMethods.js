/**
 * Created by oscardelgadillo on 12/7/2015.
 */

/**
 *
 * @param numero
 * @returns {boolean}
 */




function isNumber(numero){
    var resp = true;
    if (!/^([0-9])*$/.test(numero))
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

