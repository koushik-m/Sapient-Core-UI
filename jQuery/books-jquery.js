(function() {
    'use strict';
    let bookList = [];
    function addBook() {
        let book = {
            name:$('#txtName').val(),
            author:$('#txtAuthor').val(),
            date:$('#txtData').val()
        }
        bookList.push(book);
    }
    //for getting the value and setting the value we use element.val method.

    // var x = $('id').val()
    // $('#id2').val('koushik');
    // $('#p1').html('<h1>xxxx</h1>');
    var para = $('#para');
    $('#button1').bind('click',function(){
        para.toggle();
    });

})();