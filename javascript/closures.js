function bookTicket(mode) {
    var discount = mode == 'flight' ? 10:
    mode == 'cruise' ? 20:
    mode == 'train' ? 30: 0;

    return function (source, destination){
        var price = Math.floor((Math.random()*1000)+1);
        console.log('Source:'+source);
        console.log('Destinaition:' +destination);
        console.log('Price'+price);
        console.log('Discount'+price*(discount/100));
    };
}
var flight = bookTicket('flight');
flight('Banglore','trichy');