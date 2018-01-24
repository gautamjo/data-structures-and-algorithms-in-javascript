function printToConsole(fr, to) {
	console.log("Move from " + fr + " to " + to);
}

function towersOfHanoi(n, fr, to, spare) {
	if (n === 1) {
		printToConsole(fr, to);
	}

	else {
		towersOfHanoi(n - 1, fr, spare, to);
		towersOfHanoi(1, fr, spare, to);
		towersOfHanoi(n - 1, spare, to, fr);
	}
}

towersOfHanoi(4, 3, 2, 1);