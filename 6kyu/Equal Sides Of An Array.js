function findEvenIndex(arr)
{
    let preSum = 0;
    for (let i= 0; i < arr.length; i++) {
        let postSum = 0;

        for (let j = i + 1; j<arr.length; j++) {
            postSum += arr[j];
        }

        if (preSum === postSum) {
            return i;
        }
        preSum += arr[i];
    }
    return -1;
}