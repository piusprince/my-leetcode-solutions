const hasDuplicate = (nums) => {
  const hashSet = new Set();

  for (let n = 0; n < nums.length; ++n) {
    if (hashSet.has(nums[n])) return true;
    else hashSet.add(nums[n]);
  }
  return false;
};

console.log(hasDuplicate([1, 2, 3, 1]));
