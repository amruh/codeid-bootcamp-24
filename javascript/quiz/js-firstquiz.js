// 1
function getAreaCircle(r) {
    if(r<=0) return `radius ${r} <= 0, try higher`;
    if(typeof(r) === 'string') return 'Inputan harus dalam angka';
    const result = Math.PI * r * r;
    return parseFloat(result.toFixed(5));
}

// 2
function calculateDistance(a, t){
    if(isNaN(a)) return 'input must an number';
    if(a < 0 || t < 0) return 'Accelaration or time must be >= 0';

    const s = 0.5 * a * (t ** 2);
    return `Jarak yang ditempuh adalah ${s} meter/s`;
}

// 3
function fareinheitToKelvin(fahrenheit){
	if(isNaN(fahrenheit)) return 'Fahrenheit must an number';
    const kelvin = (fahrenheit + 459.67) / 1.8;
    return Math.round(kelvin);  
}

//  4
function getSalesTax(price, tax) {
	if(isNaN(price) && isNaN(tax)) {
        return 'Price & Pajak harus dalam angka';
    } else if (isNaN(price)) {
        return 'Price harus dalam angka';
    } else if (isNaN(tax)) {
        return 'Pajak harus dalam angka';
    }
    const total = price + tax;
    return total;
}

// 5
function getSalesDiscount(price,tax,discount){
	if(isNaN(price) && isNaN(tax)) {
        return 'Price, Tax & Discount harus dalam angka';
    } else if (isNaN(price)) {
        return 'Price harus dalam angka';
    } else if (isNaN(tax)) {
        return 'Pajak harus dalam angka';
    }
	const d = discount / 100 * price;
  const priceAfterDiscount = price - d; 
  const t = tax / 100 * priceAfterDiscount;
  return priceAfterDiscount + t;
}

// 6
function getCordinat(x1,y1,x2,y2) {
	for (let x of arguments) {
  	if(isNaN(x)) return 'input kordinat dalam angka';
  }
  const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return d;
}

// 7
function sumDigit(n){
    if(isNaN(parseInt(n))) return `${n} is not number, try again...`;
    if(parseInt(n) > 10000) return `${n} harus lebih kecil dari 10000`;
    let temp = n.toString();
    let result = 0;
    for (let i = 0; i<temp.length; i++){
        result+=Math.abs(temp[i]);
    }
    return result;
}

// 8
function getPeriodTimes(seconds) {
    if(isNaN(Number(seconds))) return `${seconds} is not number`;
    const hari = Math.floor(seconds / (3600 * 24));
    const jam = Math.floor(seconds % (3600 * 24) / 3600);
    const menit = Math.floor(seconds % 3600 / 60);
    const detik = Math.floor(seconds % 60);

    return `${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
}

// 9
function convertToRupiah(money,type){
	if(type){
  	if(type === 'yen'){
    	const convert = Intl.NumberFormat('id-ID').format(money * 130.12); 
    	return `1000 yen = Rp.${convert}`;
    } else if(type === 'usd'){
    	const convert = Intl.NumberFormat('id-ID').format(money * 14382.50); 
    	return `100 usd = Rp.${convert}`;
    }else if(type === 'euro'){
    	const convert = Intl.NumberFormat('id-ID').format(money * 16000); 
    	return `100 euro = Rp.${convert}`;
    }
  }
  return 'no match type currency';
}

// 10
function getHeavier(wg1,wg2,wg3){
    return Math.max(wg1, wg2, wg3);
}

// 11
function getDays(month,year){
    if(isNaN(month) && isNaN(year)) {
        return 'inputan bulan & tahun harus dalam integer';
    } else if(isNaN(month)) {
        return 'inputan bulan harus dalam integer';
    } else if (isNaN(year)) {
        return 'inputan tahun harus dalam integer';
    }
    
    let hari = '';
    let kabisat = false;
        switch (month) {
          case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            hari = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            hari = 30
          break;
        case 2:
            if(year % 4 == 0 && (year % 100 != 0) || (year % 400 == 0)){
                hari = 29;
                kabisat = true; 
            } else {
                hari = 28;
            }
        }
    if(kabisat) {
        return `This month has ${hari} days, ${year} adalah tahun kabisat`;
    }
      
    return `This month has ${hari} hari`;  
}

// 12
function isPalindrome(angka){
	const intAngka = parseInt(angka);
	if(isNaN(angka)) return `${angka} is not number`;
    if(intAngka.toString().length !== angka.toString().length) return `${angka} is not number`;
  
    let stringAngka = angka.toString();
    let result = ''
 
    for (let i=stringAngka.length - 1; i>=0; i--){
        result+=stringAngka[i];
    }
  
    if(result != stringAngka) return `${stringAngka} is not palindrome`;
    
    return `${stringAngka} is palindrome`;
}

// 13
function getProsentase(start,end){
	if(isNaN(start) || isNaN(end)) return `${start} or ${end} is not number`;
  if(start < end) {
    const selisih = end - start;
    const persen = selisih / start * 100; 
    return `total kenaikan income ${persen}%`;
  } else {
  	const selisih = start - end;
    const persen = selisih / start * 100; 
    return `total penurunan income -${Math.ceil(persen)}%`;
  }
}

// 14
function totalGaji(gaji1, gaji2, gaji3) {
    const taxEmp1 = gaji1 * Math.abs(taxGaji(gaji1));
    const taxEmp2 = gaji2 * Math.abs(taxGaji(gaji2));
    const taxEmp3 = gaji3 * Math.abs(taxGaji(gaji3));
    const emp1 = taxEmp1 + gaji1;
    const emp2 = taxEmp2 + gaji2;
    const emp3 = taxEmp3 + gaji3;
    return `Total yang harus dibayar: Rp. ${emp1 + emp2 + emp3}`;
}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}
