function meeting(x) {
    let availableRoom = x.indexOf('O');
    return (availableRoom < 0 ? `None available!` : availableRoom);
}

//test

meeting(['X', 'O', 'X']);
meeting(['O','X','X','X','X']);
meeting(['X','X','X','X','X']);

