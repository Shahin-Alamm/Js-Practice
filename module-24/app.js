
// 1st cls exercise git hub niya 

// 2st class exercise
// 1... 
// let age = 7 ;
//  if(age || age == 0){
//     console.log('it is true ')
// }
// else{
//     console.log( 'it is false');
// }


// 3rd cld exercise
//1 no...
// let a;
// console.log(a); //undefined

//2no...
// function add ( num1, num2=10){ //num2=10 mane pore value na dile jate prbm na hoi 
//     console.log(num1,num2);  
//     return num1 + num2;//return na likhle undefine
// }
// const result = add(13) //parameter 2 ta nadile undefine
// console.log(result);

// //3no...
// const person = { name: 'shahin', age:25, gf:'gf nai'}
// console.log(person.name, person.gf);

// //4 no...
// let fun = undefined;
// console.log(fun); //ai keyword deya jabe na .. 

// //5no...
// let ages = [2, 3, 4, 5 , 6,7,77]
// console.log(ages[33]); //undefine
// //kno num er position ber kortre avabe likhte hoi...


//4th cls..
// //1 no
// const first = 4;
// const second = "4";

// if(first === second){//double equal holo  true hobe === hole soman hobe na 
//     console.log('condition is true');
// }
// else{
//     console.log('condition is false');
// }

// const third = 1;;  //1 ar true 2tai same value 
// const fourth = true;
// if(third == fourth){
//     console.log('condition true');
// }
// else{
//     console.log('condition false');
// }
// const fifth = 0;  //0 ar false 2tai same value 
// const sixth = false;
// if(third == fourth){
//     console.log('condition true');
// }
// else{
//     console.log('condition false');
// }
//== holo value cheak kore 
//=== holo value and type cheak kore.


// 5th class
//1 no exercise
const numbers = [ 2, 3, 4, 5,6 , 7, 8];
const output = [];

for(let i=0; i<numbers.length; i++){
    const element = numbers[i]
    const result = element * element;
    output.push(result)
}

console.log(output);

const age2 = [ 22, 33, 4, 55, 66]
const ageTotal = []
for(let i = 0; i<age2.length; i++){
    const element = age2[i]
    ageResult = element * element;
    ageTotal.push(ageResult);
}
console.log(ageTotal);

//2 no exercise
const number2 = [ 2, 3, 4, 5,6 , 7, 8];

function square(element){
    return element*element
}

number2.map(function(element,index,array){
    console.log(element,index,array );
})//map  function 3 ta parameter nite pare.



const number3 = [6,5,4,3,2,1,0]
const result = number3.map(function(element){
    return element * element//map er maddhome array theke output array pawa jay 
})
  console.log(result);// map diye kno array  modde giye analysis kore return e jog biyog gun vag kore seta output pawa jay ... output array dibe.


  //array function
    
  const multi = element => element * element;
  const multi2 = x => x * x; //map function e avabe shortcut e lekha jay 

  const a = [3, 4, 5 ,6 ,7]
  const square2 = a.map(element => element * element)
  console.log(square2);  //square man 

  const square3 = [7, 4,4 ,5,6 ,7]
  const raf =square3.map(x=> x * x)
  console.log(raf); //square man 



  //ekta arry modde 5 er boro songa ber korar upay 
  const big = [1, 2, 3 ,4 ,5,6,7,8,9,]
  const bigger = big.filter(x=> x>5)
  console.log(bigger);// er jonno filter use krote hobe...

  // array modde choto songkha ber kroar jono
  const smal = [ 2,3,4,5,5,6,7,8,9,33,445]
  const smallest = smal.filter(x => x<9)
  console.log(smallest); //9 theke choto songkha ber hobe

  //nirdisto kno songkha ke ber korar jonno (find) use korte hobe 
  const foundNum = [ 4, 6, 7, 7, 8, 9,3,6, 8]
  const findResult = foundNum.find(x=> x>6)
  console.log( findResult); //6 er pore first 7 no value paise tai nice 



  //array theke sudhu nam gulo ber korar upay 
const student =[
    {id: 33 , name: 'mahfuj'},
    {id: 34 , name: 'mosiur'},
    {id: 37 , name: 'mijan'},
    {id: 39 , name: 'mahin'}
  ];
  const stuName = []
for(let i= 0; i<student.length; i++){
    const element = student[i];
    const result = element.name
    stuName.push(result);
}
console.log(stuName);



// array looping addition
const addNumber = [ 22, 44, 555, 6,77,7]
let sum = 0
for( i= 0; i<addNumber.length; i++){
    sum = sum + addNumber[i]
}
console.log(sum);


const classOneStudent = [
    { name: 'robi', age: 12},
    { name: 'habi', age: 14},
    { name: 'mobi', age: 15},
    { name: 'jobi', age: 16},
    { name: 'juin', age: 17},
    { name: 'eubi', age: 18},
    { name: 'wubi', age: 19},
    { name: 'tubi', age: 21}
]
//ai array theke only student name gulo ber korte
const nameOne = classOneStudent.map(n => n.name)
console.log(nameOne);

//abar array teke sudu id gulo ber korte 
const stuAge= classOneStudent.map(id => id.age)
console.log(stuAge);

//a5 er boro boyosi student ber kroo
const bigStu = classOneStudent.filter(b=> b.age>15)
console.log(bigStu);

//20 er boro ber koro
const bigOne = classOneStudent.find(o=>o.age>20)
console.log(bigOne);


//class 6 
let bonous = 20; // global scope 
function summ (first , second){
    let result = first + second + bonous
    if(result > 10 ){
       const mood = 'happy';
       console.log(mood);
    }
    return result;
}
const view = summ ( 5, 5)
// console.log(result); // don,t allow 
console.log(view); 

//class-8
function stopwatch (){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopwatch()
console.log(clock1());
console.log(clock1());
console.log(clock1()); // 1--4 porjonto man barte barte jabe
console.log(clock1());

const clock2 = stopwatch()
console.log(clock2()); //akhane ase abr new function gonona suru hobe 
console.log(clock2());
console.log(clock2());

console.log(clock1()); // 1st value 4 er por theke barbe 
console.log(clock1());



//class-9 
const nums = [1,2,3,4,5,6,7,8,9]
const part = nums.slice(2,6)
//slice holo aray modde index num diye nirdisto element ber kore ana 
const remove = nums.splice(2,6)
//splice er kaj holo index num er modde je element gulo thakbe segulo dekhaeb 
console.log( remove);
console.log(part);
// console.log(nums);


const joinNumber = [ 2, 3,4, 5, 6, 6, 7, 7]
const together = joinNumber.join(' and ')
//join er maddhome arrray elemenet er majhe kno kisu add kora jabe 
console.log( together);


//class- 10 
 const breaks = [1,2,3,4 ,5,6,7,8,9]
 for(let i=0; i<breaks.length; i++){
    console.log(breaks[i]);
    if(breaks[i]>6){
        break; //break holo js er keyword
    }
 }


 const con = [1,-2,3,4 ,-5,6,7,-8,9]
 for(let i = 0; i<con.length; i++){
    if(con[i]<0){
        continue; // negetive num skip korbe 
    }
    console.log(con[i]);
 }
