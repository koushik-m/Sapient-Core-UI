$(document).ready(function() { //when document is completely loaded it executes the function
    'use strict';
    const countryApi = 'https://restcountries.eu/rest/v2/all';

    function fetchCountries() {
        $.ajax({
            url:countryApi,
            type: "GET",
        }).then(result => {
            console.log(result);
            bindCountries(result);
        }).catch(err => {
            console.log(err);
        });
    }

    function bindCountries(data) {
        data.forEach((x,i)=>{
            console.log(x.name);
            let option=$('<option/>').val(x.region).text(x.alpha2Code+','+x.region);
            $('#ddlCountry').append(option);
        })
    }
    fetchCountries();
});