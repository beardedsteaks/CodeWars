//function takes in a person's age and returns the type of drink.

function peopleWithAgeDrink(old) {
	var drink = '';
	if (old < 14) {
		drink = 'drink toddy';
	} else if (old >= 14 && old < 18) {
		drink = 'drink coke';
	} else if (old >= 18 && old < 21) {
		drink = 'drink beer';
	} else if (old >= 21) {
		drink = 'drink whisky';
	}
	return drink;
};