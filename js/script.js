//2.6

/*let name = prompt("whats your name?");
alert(`your name is ${name}`);*/

//2.8 (4)

/**/let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

//Правильная запись
alert(Number(a)+Number(b));
//Запись приобразования через унарный +
alert(+a + +b);