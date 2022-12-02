// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let reversedStr=''
	for(let i=str.length-1; i>-1; i--){
		reversedStr += str[i]
	}

	return reversedStr
}

module.exports = reverse;

// My solution
/*
function reverse(str) {
	let reversedStr=''
	for(let i=str.length-1; i>-1; i--){
		reversedStr += str[i]
	}

	return reversedStr
}
*/

//Alternative Solution #1
/* 
function reverse(str) {
 	return str.split('').reverse().join('')
}
*/

//Alternative Solution #2 (My preferred method)
/*
function reverse(str) {
	let reversed = ''
	for (let character of str){
		reversed = character + reversed
	}
	return reversed
}
*/

//Alternative Solution #3
/*
function reverse(str) {
	//split str into an array
	//reduce array: set initialValue to '', assign total to reversed, assign currentValue to character
	//array.reduce( (total, currentValue, currentIndex, arr) => {}, initialValue )
	return str.split('').reduce((reversed, character) => character + reversed, '')
}
*/

