/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //set left and right pointers
    let left = 0;
    let right = nums.length -1;
    //while left is <= right
    while(left <= right){
        let middle = Math.floor((left + right) / 2);//Math.floor rounds down for you

        if (nums[middle] === target){
            return middle
        }else if (nums[middle] < target){
            left = middle + 1;
        }else{
            right = middle -1;
        }
        
    }
    //middle is math.floor((left + right / 2))
    return left;

    //if the middle === target, return middle

    //else middle < than left = middle + 1 and right = middle -1
};