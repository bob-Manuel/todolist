// // push will add to the last

// let names = ["Easykey", "Blessing", "Obed", "Judah"];
// names.push("Bob");
// console.log(names);

// // pop will remove from the end
// names.pop();
// console.log(names);

// // unshift will add from the beggening
// names.unshift("c.j");
// console.log(names);

// names.shift();
// console.log(names);

// // splice accepts many arquirement and deletes

// names.splice(2, 1, "Obed");
// console.log(names.includes("EasyKey"));

// console.log(names.reverse());

// function isPalindrome(str) {
//   let newWord = str.split("").reverse().join("");
//   if (str === newWord) {
//     console.log("is a Palindrome");
//   } else {
//     console.log("is not a palindrome");
//   }
// }

// isPal("madam");

// function isPal(str) {
//   let newWord = " ";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newWord = str[i];
//   }
//   if (newWord === str) {
//     console.log("is a Palindrome");
//   } else {
//     console.log("is not a Pal");
//   }
// }

// let array = [1, 2, 3, 4];
// array.push(5, 6);
// console.log(array);

// array.pop(2);
// // console.log(array);
// let number = [5, 10, 9];
// number.sort();
// console.log(number);
// function.compare (a, b)

// let num = [1, 2, 1, 3, 4, 3];
// num.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else if (a < b) {
//     return -1;
//   }
// });
// console.log(num);

// let numbers = [2, 4, 5, 7];
// let multiplyNum = numbers.map((num) => {
//   return num * 2;
// });
// console.log(multiplyNum);

// let students = ["B0b", "chibuike", "Ugochukwu", "chima"];
// for (let student of students) {
//   console.log(student);
// }
// original_array = [1, 2, 3, 4, 5];
// reversed_array = reverse_array(original_array);
// return reversed_array;

// input_array = [3, 1, 7, 10, 2, 5];
// maximum, (minimum = find_max_min(input_array));
// print("Maximum value:", maximum);
// print("Minimum value:", minimum);

// input_array = [1, 2, 3, 4, 5];
// result = calculate_sum(input_array);
// print("Sum of array elements:", result);

// NO1 ASSIGMENT
// function reverseArray(array) {
//   const newArray = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }

//   return newArray;
// }
// const reversedArray = reverseArray([1, 2, 3, 4, 5, 6]);

// console.log(reversedArray);

// NO2 ASSIGNMENT

// function findMaxAndMin(array) {

//   let max = array[0];
//   let min = array[0];

//   for (const element of array) {

//     if (element > max) {
//       max = element;
//     }

//
//     if (element < min) {
//       min = element;
//     }
//   }

//   // Return the maximum and minimum values.
//   return [max, min];
// }
// const array = [1, 2, 3, 4, 5];
// const [max, min] = findMaxAndMin(array);
// console.log(findMaxAndMin);

// minMax([]);
// function minMax(num) {
//   num.sort((a, b) => a - b);
//   let min = num[0];
//   let max = num[num.length - 1];
//   console.log(min, max);
// }
// minMax([10, 40, 30, 50, 20]);

// assign no3

function sumArray(array) {
  let sum = 0;

  for (const element of array) {
    sum += element;
  }

  return sum;
}
const array = [1, 2, 3, 4, 5];
const sum = sumArray(array);

console.log(sum);

// NO4 ASSIGNMENT
// function findDuplicates(array) {
//   const oldSet = new Set();

//   const duplicates = [];

//   for (const element of array) {
//     if (!oldSet.has(element)) {
//       oldSet.add(element);
//     } else {
//       duplicates.push(element);
//     }
//   }

//   return duplicates;
// }
// const array = [1, 2, 3, 4, 5, 2, 3, 6];
// const duplicates = findDuplicates(array);

// console.log(duplicates);

// NO5 ASSIGNMENT
// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];

//   let i = 0;
//   let j = 0;

//   while (i < array1.length && j < array2.length) {
//     if (array1[i] < array2[j]) {
//       mergedArray.push(array1[i]);
//       i++;
//     } else {
//       mergedArray.push(array2[j]);
//       j++;
//     }
//   }

//   while (i < array1.length) {
//     mergedArray.push(array1[i]);
//     i++;
//   }

//   while (j < array2.length) {
//     mergedArray.push(array2[j]);
//     j++;
//   }

//   return mergedArray;
// }
// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];

// const mergedArray = mergeSortedArrays(array1, array2);

// console.log(mergedArray);

// NO5 ASSIGNMENT
// function removeFalsyValues(array) {
//   const filteredArray = [];

//   for (const element of array) {
//     if (element) {
//       filteredArray.push(element);
//     }
//   }

//   return filteredArray;
// }
// const array = [1, 2, 3, false, null, undefined, 0, "", NaN];
// const filteredArray = removeFalsyValues(array);

// console.log(filteredArray);

// NO6 ASSIGNMENT

// function rotateArrayRight(array, positions) {
//   const arrayLength = array.length;

//   if (positions >= arrayLength) {
//     return array;
//   }

//   const newStartIndex = (arrayLength - positions) % arrayLength;

//   const rotatedArray = new Array(arrayLength);

//   for (let i = 0; i < arrayLength; i++) {
//     rotatedArray[i] = array[(newStartIndex + i) % arrayLength];
//   }

//   return rotatedArray;
// }

// const array = [1, 2, 3, 4, 5];
// const rotatedArray = rotateArrayRight(array, 2);

// console.log(rotatedArray);

// NO7 ASSIGNMENT
// function findMedian(array) {
//   array.sort((a, b) => a - b);

//   const middleIndex = Math.floor(array.length / 2);

//   if (array.length % 2 === 0) {
//     return (array[middleIndex] + array[middleIndex - 1]) / 2;
//   } else {
//     return array[middleIndex];
//   }
// }
// const array = [1, 2, 3, 4, 5];
// const median = findMedian(array);

// console.log(median);

// const array2 = [1, 2, 3, 4];
// const median2 = findMedian(array2);

// console.log(median2);

// let num1 = 2;
// let num2 = 1;
// let num3 = 4;
// if (num1 > num2 && num2 > num3) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let num1 = 2;
// let num2 = 1;
// let num3 = 4;
// if (num1 > num2 || num2 > num3) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// for (let i = 0; i <= 99; i++) {
//   console.log("i is:" + i);
// }
// let name = "Humble";
// let backwardspell = " ";

// for (let i = name.length - 1; i >= 0; i--) {
//   backwardspell += name[i];
//   // console.log(name[i]);
//   console.log(backwardspell);
// }

// let multipliedNum = 2;
// for (let i = 1; i <= 12; i++) {
//   console.log(multipliedNum * i);
// }
