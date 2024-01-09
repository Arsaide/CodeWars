function generateShape(integer){
    let square = ''
    for(let i = 0; i < integer; i++) {
        square += '+'.repeat(integer)
        if(i < integer - 1) square += '\n'
    }
    return square
}

console.log(generateShape(2))