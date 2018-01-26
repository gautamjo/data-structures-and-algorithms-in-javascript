function caesarCipher(str, num) {
    num = num % 26;
    var lowerCaseStr = str.toLowerCase();
    var alpha = "abcdefghijklmnopqrstuvwxyz".split(""),
        newStr = "";

    for (var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if (currentLetter === " ") {
            newStr += currentLetter;
            continue;
        }
        var currentIndex = alpha.indexOf(currentLetter);
        var newIndex = currentIndex + num;

        if (newIndex > 25) {
            newIndex = newIndex - 26;
        }
        if (newIndex < 0) {
            newIndex = 26 + newIndex;
        }
        if (str[i] === str[i].toUpperCase()) {
            newStr += alpha[newIndex].toUpperCase();
        } else {
            newStr += alpha[newIndex];
        }
    }
    return newStr;
}