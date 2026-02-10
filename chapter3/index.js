import circle from "./circle.js"
console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

import loadash from "lodash"
const arr = [1,1,1,2,2,1,1,4,4,3,2];
const uniqueArr = loadash.uniqBy(arr);

console.log(uniqueArr);