function majorityElement(nums) {
    var candidate = nums[0];
    var count = 1;
    for (var i = 1; i < nums.length; i++) {
        if (candidate === nums[i])
            count++;
        else
            count--;
        if (count === 0) {
            candidate = nums[i];
            count++;
        }
    }
    return candidate;
}
;
console.log(majorityElement([1, 1, 1, 1, 0]));
