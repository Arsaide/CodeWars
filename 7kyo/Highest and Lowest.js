function highAndLow(num){
    let min = Math.min(...num.split(' ').map(Number)),
        max = Math.max(...num.split(' ').map(Number))
    return `${max} ${min}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))