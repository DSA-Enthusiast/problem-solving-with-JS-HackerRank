// let str =
// 	"".split(
// 		new RegExp(/\s/, "g")
// 	);

let str = "a b a b a a a a b b b x".split(new RegExp(/\s/, "g"));
// Algorithm  Moore Voting  Majority Element
const countVote = (str) => {
	let winner = str[0];
	let count = 1;
	for (let i = 1; i < str.length; i++) {
		if (str[i] == winner) {
			count++;
		} else {
			count--;
		}

		console.log(count);
		if (count < 0) {
			winner = str[i];
			count = 1;
		}
	}

	return winner;
};

console.log(countVote(str));
