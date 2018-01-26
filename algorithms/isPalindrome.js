function isPalindrome(string) {
    string = string.toLowerCase();
    var strArr = string.split("");
    var validCharacter = "abcdefghijklmnopqrstuvwxyz".split("");
    var letterArr = [];

    strArr.forEach(char => {
        if (validCharacter.indexOf(char) > -1) {
            letterArr.push(char);
        }
    });

    if (letterArr.join("") === letterArr.reverse().join("")) {
        return true;
    }

    return false;
}