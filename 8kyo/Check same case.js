const isNotLetter = s => s === s.toUpperCase() && s === s.toLowerCase(),
    defineCase = s => s === s.toUpperCase() ? 'Upp' : 'Low'

function sameCase(a, b){
    if(isNotLetter(a) || isNotLetter(b)) return -1
    return defineCase(a) === defineCase(b) ? 1 : 0
}