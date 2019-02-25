(function () {
    'use strict';
    var students = [
        { name: 'Koushik', age: 20 },
        { name: 'Koushik1', age: 24 },
        { name: 'Koushik2', age: 23 },
        { name: 'Koushik3', age: 22 },
        { name: 'Koushik4', age: 21 },
    ];
    var numberOfColumns;
    function createElement(elementType) {
        return document.createElement(elementType);
    }

    function createHeaderRow() {
        var headerRow = createElement('tr');
        for(var i in students[0]) {
            var column = createElement('td');
            column.innerHTML = i;
            headerRow.appendChild(column);
        }
        console.log(headerRow);
        return headerRow;
    }

    function createDataRow() {
        // for (var x = 0; x < students.length; x++) {
        //     var dataRow = createElement('tr');
        //     for(var columns=0;columns<numberOfColumns;columns++){
        //         var dataColumn = createElement('td');
        //         column.innerHTML = students[x][columns];
        //         dataRow.appendChild(dataColumn);
        //     }
        // }
        var tbl = document.getElementById('tblEmployees');
        for(var x in students) {
            var dataRow = createElement('tr');
            for(var columns in students[x]) {
                var dataColumn = createElement('td');
                dataColumn.innerHTML = students[x][columns];
                dataRow.appendChild(dataColumn);
            }
            console.log(dataRow);
            tbl.appendChild(dataRow);
        }
    }

    function createTable() {
        var tbl = document.getElementById('tblEmployees');
        tbl.appendChild(createHeaderRow());
        createDataRow();
    }
    createTable();


})();