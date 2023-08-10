function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    for(var i = 0; i < ar.length; i++)
    {
        sum+=ar[i];
    }
    return sum;
}

var sumTest = simpleArraySum([1,2,3,4,10,11]);
console.log(sumTest);