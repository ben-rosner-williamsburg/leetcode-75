/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // Create an empty array of the result
         let result = []
         let maxCandy = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
            // Add each number of extra candies to each number in the candies array        
            // Compare each number in the candies array
        if ((candies[i] + extraCandies) >= maxCandy) {
            // If each number is greater than all the other numbers in the array push true into the result array
            result.push(true)
        }
            // Otherwise push false into the results array
        else if ((candies[i] + extraCandies) < maxCandy) {
            result.push(false)
        }
            // Return results array
    }
        return result
};