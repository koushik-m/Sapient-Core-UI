$(document).ready(function () {
    $('#buttonid').bind('click', function () {
        $.ajax(
            {
                url: "/getdata",
                type: "GET",
                async: true,
            }).then(result => {
                $('#gettext').append(result);
            }).catch(function (err) {
                // Crawling failed...
            });

        console.log('done with the program');
    })
});