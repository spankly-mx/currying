'use strict';
let list = [1,2,3,4,5,6,7,8,9,10];

let filter = (list, fn) => {
	return list.filter(fn);
}

let filterWith = (fn) => {
	return (list) => {
		return list.filter(fn);
	}
}

let getEvens = (n) => n % 2 == 0;
let getOdds  = (n) => n % 2 !== 0;

let justEvens = filterWith(getEvens);
let justOdds = filterWith(getOdds);
console.log("Evens:",justEvens(list));
console.log("Odds:",justOdds(list));

//--------------------------------------------------------------------------------

let isGreatherThanOrEqual = (a,b) => a >= b;
let isGreatherThanOrEqualTo = (compare)=>  (n)=> isGreatherThanOrEqual(n,compare);

let isGreatherOrEqualTo5 = isGreatherThanOrEqualTo(5);
let justGreatherEqual5 = filterWith((n) => isGreatherOrEqualTo5(n));
console.log(justGreatherEqual5(list));










