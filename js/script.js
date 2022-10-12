// CTRL+/=comment
//2.6

/*let name = prompt("whats your name?");
alert(`your name is ${name}`);*/

//2.8 (4)

/*let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

//Правильная запись
alert(Number(a)+Number(b));
//Запись приобразования через унарный +
alert(+a + +b);*/

//2.10(2)
/*
let answer = prompt("Какое официальное название JS?", '');

if(answer=="ECMAScript"){
    alert("Да верно!")
}else{alert("Неверно!")}
*/
//2.10(3)


// let answer = prompt("Введите число!!!", '')

// if(answer>0){
//     alert(1);
// }else if(answer<0){
//     alert(-1);
// }else if(answer== 0){
//     alert(0);
// }

//2.10(4)

// let result;

// //оригинал
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// //переписано через условный оператор
// result = (a + b < 4)?'Мало': 'Много';

//2.10(5)

// let message;
// //оригинал
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// //переписано через условный оператор
// message = (login =='Сотрудник')? message = 'Привет':
//     login == 'Директор'? message = 'Здравствуйте':
//         login=''?message = 'Нет логина': message='';

//2.11 (6)

//let age = prompt("Number?", '')

// if(age >= 14 && age <=90){
//     alert("Yes")
// } else{
//     alert("No")
// }

//2.11(7)

// if(age < 14 || age >90 ){
//    alert("yes") 
// }else{
//     alert("no")
// }

// if(!(age >= 14 && age <=90)){

//     alert("yes") 
//     }else{
//         alert("no")
//     }


//2.11(9)
/*
let user = prompt("Кто там?", '')
let password;

if(user==''||user == null){
    alert('Отмена');
}else if( user !=="Админ"){
    alert("Я тебя не знаю")
}else if(user == "Админ") password=prompt("Пароль",'');

if(password==''||password == null){
    alert('Отмена');
}else if( password !=="Я главный"){
    alert("Я тебя не знаю");
}else if(password =="Я главный"){
    
}

//Более правильный и улучшеный скрипт 
if(user=="Админ"){
    password=prompt("Пароль",'');
    if (password =="Я главный"){
        alert("welcome");
    }else if(password==''||password == null){
        alert('Отмена');
    }else if(password !=="Я главный"){
        alert("Я тебя не знаю");
    } 
}else if(user==''||user == null){
    alert('Отмена');
}else if( user !=="Админ"){
    alert("Я тебя не знаю")
}
*/

//2.13(4)

//Мой код
// for (let i = 1; i <= 10; ++i) { // выведет 0, затем 1, затем 2
    
//    if(i % 2 !==0) continue; 

//     alert(i);
// }
// //Код с сайта
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }


//2.13(5)


// let i=0;
// while(i<3){
//     alert(`number ${i++}!`);
// }


//2.13(6)
//мой код
// let num;

// while(true){
//     num = +prompt("Введите число","")

//     if(num>100) break;
// }
// alert(num);

// //код с сайта

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

//2.13(7)

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime;
//   }

//   alert( i ); 
// }


//2.14(1)

// if(browser=='Edge'){
//     alert( "You've got the Edge!" );
// }else if(browser=='Opera'|| browser=='Safari'||browser=='Firefox'||browser=='Chrome'){
//     alert( 'Okay we support these browsers too' );
// }else if(browser==''||browser==null){
//     alert( 'We hope that this page looks ok!' );   
// }


//2.14(2)

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//     break;

//     case 1:
//         alert('Вы ввели число 1');
//     break;

//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//     break;
// }


//2.15(2)

// function checkAge(age){
//     return (age>18)?true:confirm('Родители разрешили?');
// }
// function checkAge(age){return true|| confirm('Родители разрешили?');}


//2.15(3)

// function min(a,b){
//     if(a<b){
//         return alert(a)
//     }else return alert(b)
// }

// min(2, 5) 
// min(3, -1)
// min(1, 1) 

//2.15(4)

// function pow(x,n){
//     let result = x;
//     for(let i=1; i<n; i++){
//         result *=x;
//     }

//     return alert(result);
// }
// pow(3, 2) 
// pow(3, 3) 
// pow(1, 100)

// function pow(x,n){
//     let result = x;
//     for(let i=1; i<n; i++){
//         result *=x;
//     }

//     return alert(result);
// }

// let x = +prompt('Введите число','');
// let n = +prompt('Введите степень','');



// if (n<1){
//     alert(`Степень ${n} не поддерживается`)
// }


//2.17(1)

// let ask = (question, yes, no)=>{
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы согласны?",
//     ()=>{ alert("Вы согласились."); },
//     ()=>{ alert("Вы отменили выполнение."); }
// );



//4.1(1)

// let user = {
// }

// user.name = "Josh";
// user.surname="Smith";
// alert(user.name);
// alert(user.surname);
// user.name="Pete"
// alert(user.name);
// alert(user.surname);
// delete user.name;
// alert(user.name);
// alert(user.surname);

//4.1(2)

// let schedule = {

// }

// function isEmpty (obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// alert(isEmpty(schedule));
// schedule["8:30"]="get up";
// alert(isEmpty(schedule));

//4.1 (4)

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum=0;
// for(let key in salaries){
//     if(salaries === undefined){
//         sum=0;
//     }else{
//         sum += salaries[key];
//     }
// }
// alert(sum);


//4.1(5)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// let double = 0;
// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key] =='number'){
//             obj[key]*=2;
//             return obj[key];
//         }
        
//     }
// }
// alert(multiplyNumeric(menu))


//4.4 (2)

// let calculator = {
//     read(){
//         this.a=+prompt('Pervoe chislo','0')
//         this.b=+prompt('Vtoroe chislo','0')
//     },
//     sum(){
//         return this.a+this.b;
//     },
//     min(){
//         return this.a-this.b
//     }
// }

// calculator.read();

// alert(calculator.sum());
// alert(calculator.min());


// 4.4(3)

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // ladder.down();
// // ladder.showStep();
// ladder.up().up().down().showStep().down().showStep();