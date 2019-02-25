(function () {
    'use strict';
    var students = [
        { name: 'Koushik', age: 20 },
        { age: 24 , name: 'Koushik1'},
        { name: 'Koushik2', age: 23 },
        { name: 'Koushik3', age: 22 },
        { name: 'Koushik4', age: 21 },
    ];
    var columnNames = [];
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
            columnNames.push(i);
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
        var tbody = document.getElementById('tbody');
        for(var x in students) {
            var dataRow = createElement('tr');
            for(var columns in columnNames) {
                var dataColumn = createElement('td');
                dataColumn.innerHTML = students[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
            }
            var tdForButton = createElement('td');
            var button = createElement('button');
            button.innerHTML = "-"
            button.className = 'btn btn-danger ';
            tdForButton.appendChild(button);
            dataRow.appendChild(tdForButton);
            console.log(dataRow);
            tbody.appendChild(dataRow);
        }
    }

    function createTable() {
        var tbl = document.getElementById('tblEmployees');
        tbl.className = 'table table-striped';
        var theader = document.getElementById('theader');
        theader.appendChild(createHeaderRow());
        createDataRow();
        var buttons = document.getElementsByClassName('btn');
        for(var r=0; r<buttons.length;r++) {
            buttons[r].addEventListener('click', function() {
                this.parentNode.parentNode.remove();
            })
        }
    }

    var newArray = students.filter(function(a,index){
        return a.age>20;
    });
    //map method will give you a new array with additional properties to the item or reduced properties to the item.
    
    createTable();


})();