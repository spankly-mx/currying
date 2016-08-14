let data = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
];

let flattenData = data.reduce((acc, value) => {
	return acc.concat(value);
},[]);

console.log(flattenData);

