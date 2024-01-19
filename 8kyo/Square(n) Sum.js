function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        square = numbers[i]**2
        sum += square
    }
    return sum
}