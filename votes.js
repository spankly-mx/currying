'use strict';

let votes = [
   {party:'pri', city:'poza rica', suburb: 'gaviotas'},
   {party:'pri',city:'poza rica',suburb:'lazaro'},
   {party:'prd',city:'poza rica',suburb:'lazaro'},
   {party:'prd',city:'tihuatlan',suburb:'5 de mayo'},
   {party:'pan',city:'papantla',suburb:'agustin melgar'},
   {party:'pri',city:'papantla',suburb:'agusting melgar'}
]


let filterByPartyCity = (party, city) => votes.filter((item) => item.party == party && item.city == city);
let getVotesByCity = (city) => (party) => filterByPartyCity(party, city); ;


let votesPozaRica = getVotesByCity('poza rica');
console.log(votesPozaRica('pri'));
console.log(votesPozaRica('prd'));

let votesPapantla = getVotesByCity('papantla');
console.log(votesPapantla('papantla'));


