'use strict';

let doctors = [
    { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
    { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
    { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
    { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
    { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
    { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
    { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
    { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
    { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
    { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
    { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
    { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
];

let results = doctors.filter((item) => item.begin >= 2000)
	             .map((item) => {
			     return {
				 doctorNumber:`${item.number}`,
			         playedBy: item.actor,
			         yearsPlayed: (item.end - item.begin) + 1
			     }
		     });
			
console.log(JSON.stringify(results, null, 4));

results = doctors.reduce((acc, item) => {
	if(item.begin >= 2000) {
		acc.push({
			doctorNumber: `${item.number}`,
			playedBy: item.actor,
			yearsPlayed: (item.end - item.begin) + 1
		});
	}
	return acc;
},[]);


console.log(JSON.stringify(results, null, 4));




