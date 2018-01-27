function MeanMedianMode() {
    this.mean = function(array) {
        var sum = 0;
        array.forEach(num => {
            sum += num;
        });
        var avg = sum / array.length;
        return avg.toFixed(2);
    };

    this.median = function(array) {
        var med;
        array.sort(function(a, b) {
            return a - b;
        });

        if (array.length % 2 === 0) {
            med = array[Math.floor((array.length / 2 + (array.length + 1) / 2) / 2)];
        } else {
            med = array[(array.length + 1) / 2];
        }
        return med;
    };

    this.mode = function(array) {
        var modeObj = {};
        array.forEach(num => {
            if (!modeObj[num]) {
                modeObj[num] = 0;
            }
            modeObj[num]++;
        });
        var maxFreq = 0;
        var modes = [];
        for (var num in modeObj) {
            if (modeObj[num] > maxFreq) {
                modes = [num];
                maxFreq = modeObj[num];
            } else if (modeObj[num] === maxFreq) {
                modes.push(num);
            }
        }
        if (modes.length === Object.keys(modeObj).length) {
            modes = [];
        }
        return modes;
    };
}

var arr = [9, 10, 23, 10, 23, 9];
var stats = new MeanMedianMode();
console.log(stats.mean(arr));
console.log(stats.median(arr));
console.log(stats.mode(arr));