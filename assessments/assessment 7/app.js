$(document).ready(function() { //when document is completely loaded it executes the function
    'use strict';
    const countryApi = 'https://restcountries.eu/rest/v2/all';
    var product = {
        "arrayOfProducts": [
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "CHECK PRINT SHIRT",
                "company":"Sapient",
                "price": 110
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "GLORIA HIGH LOGO SNEAKER",
                "company":"Sapient",
                "price": 91
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "CATE RIGID BAG",
                "company":"Sapient",
                "price": 94.5
            },
            {
                "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "GUESS CONNECT WATCH",
                "company":"Sapient",
                "price": 438.9
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "'70s RETRO GLAM KEFIAH",
                "company":"Sapient",
                "price": 20
            }
        ]
    };
    function fetchCountries() {
        $.ajax({
            url:countryApi,
            type: "GET",
        }).then(result => {
            // console.log(result);
            bindCountries(result);
        }).catch(err => {
            console.log(err);
        });
    }

    function bindCountries(data) {
        data.forEach((x,i)=>{
            let option=$('<option/>').val(x.region).text(x.name);
            $('#country').append(option);
        })
    }
    function bindProducts(data) {
        data.forEach((x,i) => {
            let row = $('</tr>').text(x.name);
            $('#row').append(row);
        })
    }

    function productCards() {
        $.ajax({
            url:product,
            type: "GET",
        }).then(result => {
            // console.log(result);
            bindProducts(result);
        }).catch(err => {
            console.log(err);
        });
    }
    for(var i = 0; i < product.arrayOfProducts.length; i++) {
        var markup = "<tr><td>" + product.arrayOfProducts[i].name + "</td><td>" +'<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>' + "</td></tr>";

        $("table tbody").append(markup);
       
        // document.getElementByClass("modal-body").innerHTML = "<p>some text</p>";
        $('#myModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget), // Button that triggered the modal
                content = button.siblings('.read-more').html(),
                modal = $(this);
          
            modal.find('.modal-body').html(content);
          });

    }
    
    fetchCountries();
    
});