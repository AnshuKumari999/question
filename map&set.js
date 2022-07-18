/*  MAP METHOD:
 You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
    Input:abcadeecfb
    Output:
     a=2
    b=2
     c=2
     d=1
     e=2
    f=1
    */


function charCount(string) {
    var map1 = new Map();
    var count = 0;
    for (const char of string) {
        map1.set(char, count);
    }

    for (const char of string) {
        count = map1.get(char);
        map1.set(char, count + 1);
    }

    for (const [char, value] of map1) {
        console.log(char + '=' + value);
    }
}
charCount('abcadeecfb');





/* SET METHOD:
     You are given a string (STR) of length N, consisting of only the lower case English alphabet. Your task is to remove all the duplicate occurrences of characters in the string.
     Input:abcadeecfb
     Output: abcdef"
     */

function DuplicateChar(str, N) {
    const set = new Set(str);
    console.log([...set])
}
DuplicateChar('abcadeecfb', 10);


