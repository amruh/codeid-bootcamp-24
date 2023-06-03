// 1
function totalLompat(x,y,k) {
	let count = 0;
	for(let i = x; i <= y; i+=k ){
  	count++;
  }
  return count;
}

console.log(totalLompat(10,85,30))

// 2
function rotateArray(arr, x){
    let arrTemp = [...arr]; 
    for(let i=0; i<x; i++){
        let end = arrTemp.pop();
        arrTemp.unshift(end);
        console.log(`[${arr}] => [${arrTemp}]`);
        arr = [...arrTemp];
    }
}
  
const arr = [3,8,9,7,6];
  
rotateArray(arr, 3);

// 3
function sameDifferentArray(arr1, arr2){
    const arrUnion = [...arr1, ...arr2];
    const same = [];
    const diff = [];
    const obj = {};
    for(let i of arrUnion){
        obj.hasOwnProperty(i) ? obj[i]++ : obj[i] = 1;
    }
    for(let j in obj){
        obj[j] > 1 ? same.push(j) : diff.push(j);
    }
    console.log(`Same = [${same}]`);
    console.log(`Different = [${diff}]`);
}

const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol", "Nangka","Timun"];

sameDifferentArray(array1, array2);

// 4
function segitiga(x){
	let count = 1;
    for(let i=x; i<=x+6; i++){
        let line = '';
        for(let j=i; j<=count+i-1; j++){
            line+=`${j} `;
        }
        console.log(line);
        count++;
    }
}

segitiga(1);
