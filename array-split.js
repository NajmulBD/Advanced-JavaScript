const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
console.log(part);
console.log(nums);

const part2 = nums.splice(2,5, 77);
console.log(part2);
console.log(nums);

const together = nums.join(" ");
console.log(together);