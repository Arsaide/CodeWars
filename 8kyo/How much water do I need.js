function howMuchWater(water, load, clothes){
    if(clothes > load *2) return 'Too much clothes'
    else if(clothes < load) return 'Not enough clothes'
    else return +(water * 1.1**(clothes - load)).toFixed(2)
}