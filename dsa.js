// function superReducedString(s) {
//     // Write your code here  aaabccddd
//     const output = []

   
//    for(let i = 0; i < s.length; i++){
//        if(output.length > 0 && output[output.length-1] === s[i]){
//         output.pop()
//        }else{output.push(s[i])}
//    }

//    if(output.length > 0){
//     return output.join('')
//    }
//    else{return 'Empty String'}

// }

// console.log(superReducedString('aaabccddd')) // 


//  ==== HACKERANK BASIC JAVASCRIPT CERTIFICATION  ====///

// const https = require('https');

// function fetchPage(year, page) {
//   const url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`;
//   return new Promise((resolve, reject) => {
//     https.get(url, (res) => {
//       let data = '';
//       res.on('data', (chunk) => data += chunk);
//       res.on('end', () => resolve(JSON.parse(data)));
//     }).on('error', (err) => reject(err));
//   });
// }

// async function getTeams(year, k) {
//   const matchCount = {};
//   let currentPage = 1;

//   // Get the first page to find total number of pages
//   const firstPage = await fetchPage(year, currentPage);
//   const totalPages = firstPage.total_pages;

//   // Count appearances for each team
//   for (; currentPage <= totalPages; currentPage++) {
//     const pageData = await fetchPage(year, currentPage);
//     for (const match of pageData.data) {
//       matchCount[match.team1] = (matchCount[match.team1] || 0) + 1;
//       matchCount[match.team2] = (matchCount[match.team2] || 0) + 1;
//     }
//   }

//   // Filter teams by count >= k and sort them
//   return Object.entries(matchCount)
//     .filter(([_, count]) => count >= k)
//     .map(([team]) => team)
//     .sort();
// }



// class NotesStore {
//   constructor() {
//     this.notes = {
//       active: [],
//       completed: [],
//       others: []
//     };
//   }

//   addNote(state, name) {
//     if (!name) {
//       throw new Error("Name cannot be empty");
//     }

//     if (!["active", "completed", "others"].includes(state)) {
//       throw new Error(`Invalid state ${state}`);
//     }

//     this.notes[state].push(name);
//   }

//   getNotes(state) {
//     if (!["active", "completed", "others"].includes(state)) {
//       throw new Error(`Invalid state ${state}`);
//     }

//     return this.notes[state];
//   }
// }



// function bonAppetit(bill, k, b) {
//     // Write your code here

//  const actualBill = bill.filter((_,index) => index != k).reduce((num, acc)=> num+ acc, 0)

//  const actualBillDiv = actualBill / 2

//  if (b > actualBillDiv){
//     //const totalBill = (actualBill + k)/2
//     console.log(b - actualBillDiv )
//  }
//  else{console.log('bon appetit')}
    
// }


// console.log(bonAppetit([2,4,6],2,6))



// function sockMerchant(n, ar) {
//     // Write your code here
//    let count= 0
//    const makePairs = {}
   
//    for (let i = 0; i < n; i++) {
//      makePairs[ar[i]] = (makePairs[ar[i]] || 0) + 1

//      if(makePairs[ar[i]] % 2 === 0){
//       count++
//    }

//    }
   
//    return count
// }

// console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3


function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0
    // for (let index = i; index <= j; index++) {
    //     const reverse = parseInt(index.toString().split('').reverse().join(''))
    
    
    // }

    let index = i

    while( index <= j){
        
        const reverse = parseInt(index.toString().split('').reverse().join(''))
            if(Math.abs(index - reverse) % k === 0){
            count++
        }

        index++
    }
    
    return count

}

console.log(beautifulDays(20,23,6))