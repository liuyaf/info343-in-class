// Put your JavaScript lab code here!

let string = "I like JavaScript more than I like to party";
console.log(string.slice(-15));
// console.log(string[3]);

let wsu = "I love Wasthington State University";
let husky = wsu.replace("State", "");
console.log(husky);

let combined = string.concat(husky);
console.log(combined);

function sumUpTo(x) {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        sum += i;
    }
    return sum;
}

console.log("Sum of 10 is:", sumUpTo(10));

function vowelCount(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        // if (word[i] in ['a', 'e', 'i', 'o', 'u']) {
        if (word[i] == 'a' | word[i] ==  'e' | word[i] ==  'i' | word[i] == 'o' | word[i] == 'u') {
            count++;
        }
    }
    return count;
}

console.log('Num of vowels in apple is', vowelCount('apple'));

function findMin (array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let arrayNum = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 9];

console.log('the min value is', findMin(arrayNum));

function longestWord(array) {
    let word = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > word.length) {
            word = array[i];
        }
    }
    return word;
}

console.log('the longest word is', longestWord(["Java", "PHP", "JavaScript", "SML", "C", "Python", "Ruby"]));

function removeAll(array, x) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i].toLowerCase().indexOf(x) != -1) {
            array.splice(i,1);
            i--;
        }
    }
    return array;
}

console.log("new array:", removeAll(["foo", "bar", "baz", "Foo", "FOO"], 'foo'));