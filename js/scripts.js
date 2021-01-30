function newItem() {
        
    let toDoInput = $('#input').val();
    let li = $('<li></li>');
    li.append(document.createTextNode(toDoInput));

    if (!toDoInput) {
        alert("You must write something!");
    }
    else {
        $('#list').append(li);  
    }

    li.on('dblclick', function (e) {
        li.toggleClass('strike');
    });

    let crossOutButton = $('<crossOutButton>X</crossOutButton>')
    li.append(crossOutButton);

    function deleteListItem() {
        li.addClass('delete');
    }

    crossOutButton.on('click', deleteListItem);
}