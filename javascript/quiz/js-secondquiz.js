// 1
function strToDate(s){
    const dArray = s.split('/');
    const dformat = `${dArray[2]}-${dArray[0]}-${dArray[1]}`;
    return new Date(dformat);
}

// 2
function citiesSlice(arrays, cityBetween) {
    const city = cities.indexOf(cityBetween)
    const citiesSliced = [...arrays.slice(0, city), ...cities.slice(city + 1)]
    return citiesSliced;
}

// 3
const dates = [new Date(2021, 10, 20), new Date(2020, 3, 12), new Date(2020, 5, 23), new Date(2022, 3, 18)];

function matchingDate(dates, year){
    const sortedDates = dates.sort((a, b) =>  a.getTime() - b.getTime());
    return sortedDates.find(d => d.getFullYear() === year);
}

// 4
for (let i = 4; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += j + ' ';
    }
    console.log(line);
}

for (let i = 5; i >= 1; i--) {
    let line = '';
    for (let j = i; j >= 1; j--) {
      line += j + ' ';
    }
    console.log(line);
}

// 5
function showPrimeNumber(n){
    let m = 1;
    let x = 2;
    for(let i = 0; i < 5; i++) {
        let line = '';
        for (let j = x; j < n; j++) {
            let prime = isPrime(j);
            if(prime) {
                line+= `${prime}	`
                m++;
            }
            x+=1;
            if (m % 6 == 0) {
                m++;
                break;
            }
        }
        console.log(line);
    }
}
  
function isPrime(n){
    let countD = 0;
    for(let i=1; i<=n; i++){
        if(n%i == 0){
            countD++;
        }
    }
    if(countD == 2) {
        return n;
    }
    return false;
}

// 6
function isCharsUnique(string){
    const obj = {};
    for(let i of string){
        if(obj.hasOwnProperty(i)){
            obj[i]++;
        } else {
            obj[i] = 1;
        }
    }
    for (let j in obj) {
        if (obj[j] == 2) return false;
    }
    return true;
}

// 7
function isPalindrome(word){
	let reverse = ''
	for(let i=word.length-1; i>=0; i--){
  	    reverse+=word[i];
    }
    if(word.toLowerCase() == reverse.toLowerCase()) {
  	    return true;
    }
    return false;
}

// 8
function maxWordLength(params) {
    const paramsArray = params.split(' ');
    const paramsSortedArray = paramsArray.sort((a, b) => a.length - b.length);

    return paramsSortedArray[paramsSortedArray.length - 1];
}

// 9
const checkPermute = function(stringOne, stringTwo) {
	if(stringOne.length != stringTwo.length) return false;
    const obj1 = {};
    const obj2 = {};
    for(let i of stringOne) {
        obj1.hasOwnProperty(i) ? obj1[i]++ : obj1[i] = 1;
    }
    for(let j of stringTwo) {
        obj2.hasOwnProperty(j) ? obj2[j]++ : obj2[j] = 1;
    }
    for(let i in obj1) {
        if(obj1[i] != obj2[i]) return false;
    }
    return true;
};

// 10
function isArraysEqual(arrayA, arrayB) {
    if (arrayA.length != arrayB.length) return false;
    let count = 0;
    for(let i = 0; i < arrayA.length; i++){
  	    if(arrayA[i] == arrayB[i]) count++;
    }
    if(count == arrayA.length){
  	    return true;
    }
    return false;
}


// 11
function howManyKabisat(year1,year2){
	let count = 0;
	for(let i=year1; i<=year2; i++){
  	if(isKabisat(i)){
    	count+=1;
    }
  }
  return count;
}

function isKabisat(year){
	if(year % 4 == 0 && (year % 100 != 0) || (year % 400 == 0)){
  	return true;
  }
  return false;
}


// 12
function strToDate(s){
    const dArray = s.split('/');
    const dformat = `${dArray[2]}-${dArray[0]}-${dArray[1]}`;
    return new Date(dformat);
}

// 13
const numbers = [44, 131, 335, 223, 21, 66, 87];

function maxNumber(arrays){
	const sortedNum = arrays.sort((a,b) => a - b);
    return sortedNum[sortedNum.length - 1]
}