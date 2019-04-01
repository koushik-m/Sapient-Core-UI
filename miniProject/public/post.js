$(document).ready(function () {

    $('#buttonid').bind('click', function () {
        let searchTerm = $('#searchid').val();
        $('#load').show();
        $('#myContainer').empty();

        $.ajax({
            url: 'api/search',
            data: { searchTerm: searchTerm },
            type: 'POST',

        }).then(result => {
            console.log(result);
            result.items.forEach((element,i) => {
                let desc = element.shortDescription.split(' ').slice(0,4).toString();
                let pTag = `<p>${desc}<button id=${i}>show more</button>`
                let card = `<div class="col-md-4">
                <div class="card mb-3" id="dynamiccard">
                    <h4 class="card-header"></h4>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                    </div>
                    <img style="height: 200px; width: 100%; display: block;" src="${element.largeImage}"
                        alt="Card image">
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                    <div class="card-body">
                        ${element.shortDescription}
                       
                    </div>
                </div>
            </div>`

                $('#myContainer').append(card);
               
                
            });
            $('#load').hide();


        }).catch(err => {
            console.log(err);
        });

    })
});