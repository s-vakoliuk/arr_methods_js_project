//1) Створити масив з 20 чисел та:
// a) відсортувати його від меншого до більшого.
console.log("відсортувати його від меншого до більшого");
let Chysla=[6,7,8,9,10,1,2,16,17,18,19,20,3,4,5,11,12,13,14,15];
Chysla.sort(function(a, b){return a - b})
console.log(Chysla);


// b) відсортувати його від більшого до меншого.
console.log("відсортувати його від більшого до меншого");
Chysla.sort(function(a, b){return b-a})
console.log(Chysla);


console.log("Відфільтрувати числа які є кратними 3");
// c) Відфільтрувати числа які є кратними 3.
let filt3Chysla=Chysla.filter((value)=>{
    return value%3===0;
});
console.log(filt3Chysla);

console.log("Відфільтрувати числа які є більшими за 10");
// d) Відфільтрувати числа які є більшими за 10.
let filt10Chysla=Chysla.filter((value)=>{
    return value>10;
});
console.log(filt10Chysla);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
console.log("Проітерувати його forEach та вивести кожеш елмент за допомогою document.write");
Chysla.forEach(element => {
    document.write(element);
    document.write("<br>");
});

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
console.log("За допомогою map збільшити кожен елемент в масиві в три рази");
let newNumbers=Chysla.map(function(num) {
    return num * 3;
});
console.log(newNumbers);


// g) Порахувати загальну суму всіх елментів у масиві (reduce)
console.log("Порахувати загальну суму всіх елментів у масиві (reduce)");
let result = Chysla.reduce((sum, current) => sum + current)
console.log(result);
