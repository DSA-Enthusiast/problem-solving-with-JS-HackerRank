const factorial = (n) => {
	if (n == 1) {
		return 1;
	}
	return factorial(n - 1) * n; // 1*2 = 3|| 2*3 = 6|| 6*4 = 24 || 24*5 = 120
};

// 5! = factorial(4) * 5 = 24*5= 120
// 4! = factorial(3) * 4 = 6*4 = 24
// 3! = factorial(2) * 3 = 2*3 = 6
// 2! = factorial(1) * 2 = 1*2 = 2
// 1! = 1

// 4! = 4*3!
//10! = 10*9!

console.log(factorial(5)); // using recursion

// n=5; n!= 1*2*3*4*5
// n=10; n!= 1*2*3*4*5*6...*10
// n=100; n!= 1*2*3*4*5*6........*100
// const fatro = (n)=> n === 1 ? n : n * fatro(n-1);
let c = 5;
let a = 5 + c;
let b = 7;
let sum = (a + b) * 4;
