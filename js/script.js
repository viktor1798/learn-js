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