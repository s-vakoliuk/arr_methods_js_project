//1) Створити масив з 20 чисел та:
// a) відсортувати його від меншого до більшого.
console.log("відсортувати його від меншого до більшого");
let Chysla=[6,7,8,9,10,1,2,16,17,18,19,20,3,4,5,11,12,13,14,15];
Chysla.sort(function(a, b){return a - b});
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

//2) Створити масив з 20 стрічок та:
// a) Відсортувати його в алфавітному порядку
console.log("Відсортувати його в алфавітному порядку");
let ArrStrings=["Liam", "Jackson", "Aiden", "Sophia", "Olivia", "Riley", "Emma", "Grayson", "Lucas", "Oliver", "Ava", "Isabella", "Aria", "Amelia", "Mia", "Layla", "Zoe", "Caden", "Mateo", "Mason"];
ArrStrings.sort();
console.log(ArrStrings);

// b) Відсортувати в зворотньому порядку
console.log("Відсортувати в зворотньому порядку")
let SortArrStrings=ArrStrings.sort((a,b) => {
    if (a < b) {
        return 1
    }
    return -1
});
console.log(SortArrStrings);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
console.log("Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)");
let NewArrStrings=ArrStrings.filter(name=>name.length>4);
console.log(NewArrStrings);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
console.log("Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'");
let ArrСhangeStrings=ArrStrings.map((value, index) =>{
    return "Sam says you good boy";
} );
console.log(ArrСhangeStrings);

//3) Все робити тільки за допомогою методів масивів!
//Дано масив :
const ArrUsers = [
   {name: 'vasya', age: 31, isMarried: false},
   {name: 'petya', age: 30, isMarried: true},
   {name: 'kolya', age: 29, isMarried: true},
   {name: 'olya', age: 28, isMarried: false},
   {name: 'max', age: 30, isMarried: true},
   {name: 'anya', age: 31, isMarried: false},
   {name: 'oleg', age: 28, isMarried: false},
   {name: 'andrey', age: 29, isMarried: true},
   {name: 'masha', age: 30, isMarried: true},
   {name: 'olya', age: 31, isMarried: false},
   {name: 'max', age: 31, isMarried: true}
];
//a) відсортувати його за  віком (зростання)

console.log("відсортувати його за  віком (зростання)");
ArrUsers.sort(function(a,b){return a.age - b.age});
// ArrUsers.sort((ByAge));
// function ByAge(a,b){
//     if(a.age>b.age){
//         return 1;
//     }
//     return -1;
// };
console.log(ArrUsers);

// відсортувати його за  віком (спадання)
console.log("відсортувати його за  віком (спадання)");
ArrUsers.sort(function(a,b){return b.age - a.age});
// ArrUsers.sort((ByAge));
// function ByAge(a,b){
//     if(a.age<b.age){
//         return 1;
//     }
//     return -1;
// };
console.log(ArrUsers);

/*b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
   та зберегти це в новий масив (первинний масив залишиться без змін)
d) відсортувати його за індентифікатором
e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

Додатково
______________________________________________________________________________________________________________________________________________________
Створити обєкт автомобіля з полями:
Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
Власник автомобіля теж має бути обєкт, у якого є поля
Імя, вік, стаж водіння.
Створити не менше 7 та не більше 20 машинок.
Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
Для початку вкладіть всі наші створені автомобілі в масив cars.
Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
*/

const cars = [
    {carbrand:"fiat", enginepower: 75, name: 'Andriy', price:4500, year: 2007},
    {carbrand:"subaru", enginepower: 130, name: 'Vasyl', price:6000, year: 2009},
    {carbrand:"toyota", enginepower: 100, name: 'Vitalii', price:5000, year: 2012},
    {carbrand:"opel", enginepower: 90, name: 'Natalia', price:4000, year: 2005},
    {carbrand:"audi", enginepower: 110, name: 'Mykhas', price:6000, year: 2010},
    {carbrand:"bmw", enginepower: 115, name: 'Anna', price:8000, year: 2011},
    {carbrand:"citroen", enginepower: 95, name: 'Denys', price:5000, year: 2009},
    {carbrand:"mercedes", enginepower: 90, name: 'Arsen', price:4000, year: 2005},    
 ];

//console.log(cars);
const lodd = cars.map((value, index) => {
    if (index % 2 === 0) {
        value.enginepower = value.enginepower * 1.1;        
    }
    return value
} )
console.log(lodd);

function carsGo (cars) {
}
carsGo(cars);