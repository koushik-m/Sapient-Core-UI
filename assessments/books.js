function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "inline-block";

    var author = document.getElementById("author_row" + no);
    var bookname = document.getElementById("bookname_row" + no);
    var date = document.getElementById("date_row" + no);

    var author_data = author.innerHTML;
    var bookname_data = bookname.innerHTML;
    var date_data = date.innerHTML;

    author.innerHTML = "<input type='text' id='author_text" + no + "' value='" + author_data + "'>";
    bookname.innerHTML = "<input type='text' id='bookname_text" + no + "' value='" + bookname_data + "'>";
    date.innerHTML = "<input type='date' id='date_text" + no + "' value='" + date_data + "'>";
}

function save_row(no) {
    var author_val = document.getElementById("author_text" + no).value;
    var bookname_val = document.getElementById("bookname_text" + no).value;
    var date_val = document.getElementById("date_text" + no).value;

    document.getElementById("author_row" + no).innerHTML = author_val;
    document.getElementById("bookname_row" + no).innerHTML = bookname_val;
    document.getElementById("date_row" + no).innerHTML = date_val;

    document.getElementById("edit_button" + no).style.display = "inline-block";
    document.getElementById("save_button" + no).style.display = "inline-block";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_author = document.getElementById("new_author").value;
    var new_bookname = document.getElementById("new_bookname").value;
    var new_date = document.getElementById("new_date").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='author_row" + table_len + "'>" + new_author + "</td><td id='bookname_row" + table_len + "'>" + new_bookname + "</td><td id='date_row" + table_len + "'>" + new_date + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='btn btn-warning' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='btn btn-primary' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='btn btn-danger' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_author").value = "";
    document.getElementById("new_bookname").value = "";
    document.getElementById("new_date").value = "";
}