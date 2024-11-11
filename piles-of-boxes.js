// Javascript program to find the number of
// boxes to be removed
 
// Function to find the number of
// boxes to be removed
function totalBoxesRemoved(arr, n)
{
    var count = 0;
 
    // Store height of previous pile
    var prev = arr[0];
 
    // Start traversing the array
    for (var i = 1; i < n; i++) {
        // if height of current pile is greater
        // than previous pile
        if (arr[i] > prev) {
            // Increment count by difference
            // of two heights
            count += (arr[i] - prev);
 
            // Update current height
            arr[i] = prev;
 
            // Update prev for next iteration
            prev = arr[i];
        }
        else {
            // Update prev for next iteration
            prev = arr[i];
        }
    }
 
    return count;
}
 
// Driver code
var arr = [5, 4, 7, 3, 2, 1 ];
var n = arr.length;
document.write( totalBoxesRemoved(arr, n)); 