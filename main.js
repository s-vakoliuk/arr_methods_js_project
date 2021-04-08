//1) Створити масив з 20 чисел та:
// a) відсортувати його від меншого до більшого.

let Chysla=[6,7,8,9,10,1,2,16,17,18,19,20,3,4,5,11,12,13,14,15];
Chysla.sort(function(a, b){return a - b})
console.log(Chysla);

// b) відсортувати його від більшого до меншого.

Chysla.sort(function(a, b){return b-a})
console.log(Chysla);


// c) Відфільтрувати числа які є кратними 3.

for (let item = 0; item < Chysla.length; item = item + 1){
    if (Chysla[item]%3===0){
    console.log(Chysla[item]);
    }
}
// d) Відфільтрувати числа які є більшими за 10.
for (let item = 0; item < Chysla.length; item = item + 1){
    if (Chysla[item]>10){
    console.log(Chysla[item]);
    }
}

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
Chysla.forEach(element => {
    document.write(element);
    document.write("<br>");
});

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
let newNumbers=Chysla.map(function(num) {
    return num * 3;
});
 
console.log(newNumbers);
// g) Порахувати загальну суму всіх елментів у масиві (reduce)



