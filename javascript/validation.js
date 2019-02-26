(function(){
    'use strict';
    var fname = document.getElementById('fn');
    var age = getElement('age');

    function validateInput(e,reg){
        if(!reg.test(e.key)){
            e.preventDefault();
        }
    }
    function validateLength(e,field){
        if(field==='name'){
            if(firstName.value.length>=20 || lastName.value.length>=20){
                e.preventDefault();
                alert('Max length for name is 20 characters');
            }
        }
        if(field==='age'){
            if(age.value.length==2 && age.value<18){
                e.preventDefault();
                alert('age cannot be less than 18');
            }
            if(age.value.length>=2){
                e.preventDefault();
                alert('age cannot be greater than 99');
            }
        }
    }
    firstName.addEventListener('keypress',function(e){
        validateInput(e,nameRegex);
        validateLength(e,'name');
        console.log(e.key);
    });
    lastName.addEventListener('keypress',function(){
        validateInput(e,nameRegex);
        validateLength(e,'name');
        
    })
})();