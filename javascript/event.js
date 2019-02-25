(function() {
    'use strict';
    var btn = document.getElementById('btnTest');
    btn.addEventListener('click', function(e) {
        console.log(e);
        console.log(this);
    })
    var key = document.getElementById('keyTest');
    key.addEventListener('keypress', function(e) {
        console.log(e);
        console.log(this);
        var myregex = /^[A-Za-z]+$/;
        
    })

    function validateInput(e,regex) {
        if(regex.test(e.key)) {

        } else {
            e.preventDefault();
            
        }
    }
})();
