function isIsogram(str) {
    let charSet = new Set();
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

console.log(isIsogram('fsdgsdfsdfsfsdfsdf'))
console.log(isIsogram(''))
console.log(isIsogram('qwe'))
console.log(isIsogram('qweqwe'))