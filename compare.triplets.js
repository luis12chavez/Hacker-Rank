/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) 
{
    var arr = [];
    var x;
    var y;
    var count = 0;
    var count2 =   0;
    for (var i= 0; i < a.length; i++) 
    {
        x = a[i];
        y = b[i];

        if(x > y)
        {
            count += 1;
        }
        else if( x < y)
        {
            count2 += 1
        }
        else if(x == y)
        {
            
        }
    }
    arr = [count,count2];
    return arr;
}

a = [5,6,7]
b = [3,6,10]

var testArr = compareTriplets(a,b);
console.log(testArr);
