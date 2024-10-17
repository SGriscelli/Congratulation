const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
console.log("step 0 : ", mysteriousString);


const step1 = mysteriousString.split(""); 
console.log("step 1 : ", step1);


const step2 = step1.slice(15, 31); 
console.log("step 2 : ", step2);

const step3 = step2.slice();
step3.splice(4, 2, "t");

console.log("step 3 : ", step3);


const step4 = step3.reverse(); 
console.log("step 4 : ", step4);


const step5 = step4.join("");
console.log("step 5 : ", step5);