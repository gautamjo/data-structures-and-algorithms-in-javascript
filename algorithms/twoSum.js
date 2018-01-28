function twoSum(array, sum) {
	var pairs = [];
	var hashtable = [];

	for(var i = 0; i < array.length; i++) {
		var currentNum = array[i];
		var counterPart = sum - currentNum;

		if (hashtable.indexOf(counterPart) !== -1) {
			pairs.push([curentNum, counterPart]);
		}
		hastable.push(currentNum);
	}
	return pairs;
}