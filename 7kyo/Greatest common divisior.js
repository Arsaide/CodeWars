function mygcd(x,y){
    while (y !== 0) {
        let temp = y
        y = x % y
        x = temp
    }
    return x
}

console.log(mygcd(30, 12))