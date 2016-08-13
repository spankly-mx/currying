let numbers = [1,2,3,4,5,6,7,8,9];

let sum = numbers.reduce((acumulator, number)=> {
	acumulator = acumulator + number;
	return acumulator;
},0);

console.log('The sum is:', sum);

sum = numbers.reduce((acumulator, num) => {
	if(num % 2 == 0) {
		acumulator = acumulator + num;
	}
	return acumulator;
},0);

console.log('The sum of even numbers is:', sum);
