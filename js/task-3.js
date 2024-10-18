"use strict";
// function checkForSpam(message) {
//   let string = message.toLowerCase();
//   if (string.includes(`spam`) || string.includes(`sale`)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function checkForSpam(message) {
//   let result;
//   result = message.toLowerCase().includes(`spam`) || message.toLowerCase().includes(`sale`)
//   return result;
// }

function checkForSpam(message) {
  return (
    message.toLowerCase().includes(`spam`) ||
    message.toLowerCase().includes(`sale`)
  );
}
checkForSpam('Latest technology news');



console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
