const twoSum = (nums, target) => {
  let initialMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in initialMap) {
      return [initialMap[target - nums[i]], i];
    } else {
      initialMap[nums[i]] = i;
    }
  }
};
