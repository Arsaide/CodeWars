// 1 способ
function getCount(str) {
    let set = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0
    for(let i = 0; i < str.length; i ++) {
        if(set.has(str[i])) count++
    }
    return count
}

console.log(getCount("abracadabra"))

// 2 способ
function getCountII(str) {
    let vowels = 'aeiou'
    let count = 0

    for(let char of str) {
        if(vowels.includes(char.toLowerCase())) count ++
    }

    return count
}


console.log(getCountII("abracadabra"))