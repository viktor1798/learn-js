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
