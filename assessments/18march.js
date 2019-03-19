
var cointypes = [200, 100, 50, 20, 10, 5, 2, 1];
var book = ['ab','abv','gad'];
function addBook(name) {
    if (book.indexOf(name) > -1) {
        return "This book is already there."
    } else {
        return true;
    }
}
function getChange(cashPaid, totalPayable) {
    var difference = cashPaid - totalPayable;
    var change = [];
    if(typeof cashPaid!="number" || typeof totalPayable!="number"){
        return "Enter numbers only";
    }
    if(!Number.isInteger(cashPaid) || !Number.isInteger(totalPayable)){
        return "Enter whole numbers only";
    }
    if(cashPaid<0 || totalPayable<0){
        return "Enter positive numbers only";
    }
    if(totalPayable>500){
        return "Maximum products:3";
    }
    if (difference < 0) {
        var payable = -1*difference;
        var message = `Please pay ${payable} more`;
        console.log(message);
        return message;
    }
    else {
        if (difference == 0) {
            return change;
        }
        else if (difference > 0) {
            cointypes.forEach(function (coin) {
                while (difference >= coin) {
                    change.push(coin);
                    difference = difference - coin;
                }
            });
            return change;
        }
    }
}
// This is what a simple unit test looks like:

test('When the book name already exists', function(assert){
    var result = addBook('ab');
    assert.equal(result, "This book is already there.");
});






// test('This sample test should always pass!', function (assert) {
//     var result = 1 + 1;
//     assert.equal(result, 2); // just so we know everything loaded ok
// });
// test('When paid=300, payable=215!', function (assert) {
//     var result = getChange(300,215);
//     assert.deepEqual(result, [50,20,10,5]); 
// });
// test('When paid=500, payable=500!', function (assert) {
//     var result = getChange(500,500);
//     assert.deepEqual(result, []); 
// });
// test('When paid=100, payable=215!', function (assert) {
//     var result = getChange(100,215);
//     assert.equal(result, "Please pay 115 more"); 
// });
// test('When paid="string", payable=215!', function (assert) {
//     var result = getChange("string",215);
//     assert.equal(result, "Enter numbers only"); 
// });
// test('When paid=215.234, payable=215!', function (assert) {
//     var result = getChange(215.234,215);
//     assert.equal(result, "Enter whole numbers only"); 
// });
// test('When paid=300, payable=-215!', function (assert) {
//     var result = getChange(300,-215);
//     assert.equal(result, "Enter positive numbers only"); 
// });
// test('When paid=funbobby__$, payable=sadbobby--*&^%', function (assert) {
//     var result = getChange("paid=funbobby__$","sadbobby--*&^%");
//     assert.equal(result, "Enter numbers only"); 
// });
// test('When paid=500, payable=501', function (assert) {
//     var result = getChange(500,501);
//     assert.equal(result, "Maximum products:3"); 
// });
