function largestRadialSum(arr, d) {
    const n = Math.floor(arr.length / d),
        result = new Array(n).fill(0);
    console.log(result)
    arr.forEach((e, i) => {
        if(i < n) {
            result[i] += e;
            console.log(result);
        } else {
            result[i % n] += e;
            console.log(result)
        }
    });

    return Math.max.apply(null, result)
}