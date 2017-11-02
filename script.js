// task 1
for (var i = 1; i <= 100; i++) {
	console.log(i);
	}



// task 2
 var n = prompt('Факториал числа');
 var a=1, b;

 	for (var i = 1; i <= n; i++) {
 		a = a * i;
	}

	alert(a);


// task 3
 var a = prompt('Последовательность Хэеса');
 var x = a;
 var b;
	for ( b = 0;  x > 1; b++) {
		if ( x % 2 == 0) {
			x= x / 2;
		}
		else{
			x = (x * 3) +1;
		}
	};
alert("Шагов = " + b);








