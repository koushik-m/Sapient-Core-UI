(function () {
    'use strict'
    var nameRegex = new RegExp(/^([A-Za-z. ]+){1,20}$/);
    var numberRegex = new RegExp(/[0-9]+/);
    var ageRegex = new RegExp(/^[1-9][0-9]?$/);
    var firstName = getElement('fn');
    var lastName = getElement('ln');
    var age = getElement('age');
    var checkbox = getElement('chkbox');
    var submitButton = getElement('sub');
    submitButton.disabled=true;
    var parentDiv=getElement('message');
    function getElement(elementID){
        return document.getElementById(elementID);
    }
    function createElement(elementType) {
        return document.createElement(elementType);
    }
    function validateInput(e,reg){
        if(!reg.test(e.key)){
            e.preventDefault();
        }
    }
    var message = createElement('div');
    message.classList.add('alert');
    message.classList.add('alert-warning');
    function validateLength(e,field){
        if(field==='name'){
            if(firstName.value.length>=20 || lastName.value.length>=20){
                e.preventDefault();
                // alert('Max length for name is 20 characters');
                message.innerHTML = "Max length for name is 20 characters";
                parentDiv.appendChild(message);
            }
        }
        if(field==='age'){
            if(age.value.length>=2){
                e.preventDefault();
                //alert('age cannot be greater than 99');
                message.innerHTML = "Age cannot be greater than 99";
                parentDiv.appendChild(message);
            }
        }
    }
    firstName.addEventListener('keypress',function(e){
        validateInput(e,nameRegex);
        validateLength(e,'name');
        console.log(e.key);
    });
    lastName.addEventListener('keypress', function(e){
        validateInput(e,nameRegex);
        validateLength(e,'name');
        console.log(e.key);
    });
    age.addEventListener('keypress',function(e){
        validateInput(e,ageRegex);
        validateLength(e,'age');
        console.log(e.key);
    });
    checkbox.addEventListener('change',function(e){
        if(e.target.checked){
            submitButton.disabled=false;
        }
        else{
            submitButton.disabled=true;
        }
    });
    sub.addEventListener('click',function(e){
        var radios = document.querySelectorAll('input[type="radio"]:checked');
        var dropdown = document.querySelectorAll('selectCountry');
        if(radios.length==0){
            var fem = getElement('femaleLabel');
            // var hom = getElement('male');
            fem.style.borderColor="red";
            submitButton.disabled=true;
        }
        if(firstName.value.length==0){
            firstName.style.borderColor="red";
            submitButton.disabled=true;
        }
        if(lastName.value.length==0){
            lastName.style.borderColor="red"
            submitButton.disabled=true;
        }
        if(age.value.length==0){
            age.style.borderColor="red"
            submitButton.disabled=true;
        }
        if(dropdown.selectedIndex=='0'){
            var select = getElement('selectCountry');
            select.style.borderColor="red";
            submitButton.disabled=true;
        }

    });
})();