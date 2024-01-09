function hasUniqueChars(str){
    let set = new Set()
    for(let i = 0; i < str.length; i++) {
        let char = str[i]
        if(set.has(char)) return false
        set.add(char)
    }
    return true
}

console.log(hasUniqueChars("  nAa")) // false because there are two spaces ' '
console.log(hasUniqueChars("abcdef")) // true
console.log(hasUniqueChars("aA")) // true ase - sensitivity
console.log(hasUniqueChars("++-")) // false because there are two '+'