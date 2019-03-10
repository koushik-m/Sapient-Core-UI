(function () {
    'use strict';
    let controls = {
        add: document.querySelector('#btnAdd')
    }

    let columnNames = [];

    function createElement(elementType) {
        return document.createElement(elementType);
    }

    function createHeaderRow(collection) {
        //let columnNames =[];
        var headerRow = createElement('tr');
        for (var i in collection[0]) {
            var column = createElement('td');
            column.innerHTML = i;
            headerRow.appendChild(column);
            columnNames.push(i);
        }
        console.log(headerRow);
        return headerRow;
    }

    function createDataRow(x, row) {
        var dataRow = createElement('tr');
        for (var columns = 0; columns < columnNames.length; columns++) {
            var dataColumn = createElement('td');
            dataColumn.innerHTML = row[columnNames[columns]];
            dataRow.appendChild(dataColumn);
        };
        var tdForButton = createElement('td');
        var button = createElement('button');
        button.className = 'btn btn-primary';
        button.rowNumber = x;
        button.innerText = x;
        tdForButton.appendChild(button);
        dataRow.appendChild(tdForButton);
        return dataRow;
    }

    function render(collection) {
        var tbl = document.getElementById('tblEmployees');
        tbl.className = 'table table-striped';
        tbl.appendChild(createHeaderRow(collection, ));
        for (var x = 0; x < collection.length; x++) {
            tbl.appendChild(createDataRow(x, collection[x]));
        };
    }
    render(window.bookStore.getBooks())

})();