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
