let cars = [
   {brand: 'toyota', model:'yaris', year:2010, color:'gray',price: 1000},
   {brand: 'toyota', model:'hilux', year:2014, color:'blue', price: 500},
   {brand: 'nissan', model:'sentra', year:2011, color:'green', price: 1200},
   {brand: 'nissan', model:'tsuru', year:2011, color:'blue', price: 200},
   {brand: 'chevrolet', model:'spark', year:2008, color:'withe', price: 300},
];

let sold = cars.reduce((accumulator, car) => {
	accumulator[car.brand] = accumulator[car.brand] || {total:0}; 
	accumulator[car.brand].total += car.price;
	return accumulator;
},{});

console.log(sold);

/*
 * {
 * 	'toyota': { total: 1500},
 * 	'nissan': { total: 1400},
 * 	......
 * }
 * */



