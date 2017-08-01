var result = 0;
var currentNum = 0;
var operatorClicked = '';
var firstNum = true;

function number (num) {
	var total = document.getElementById('total_text');
	var op = document.getElementById('op_text');

	if (firstNum) op.firstChild.data = '';

	currentNum = currentNum * 10 + num;
	total.firstChild.data = currentNum;
}

function operator (op) {
	var total = document.getElementById('total_text');
	var opText = document.getElementById('op_text');
	if (!firstNum) {
		switch (operatorClicked) {
			case '+': 	result += currentNum;
						break;
			case '-': 	result -= currentNum; 
						break;
			case '*': 	result *= currentNum;
						break;
			case '/': 	result /= currentNum;
						break;
		}
		if (((+result).toFixed(20)).replace(/^-?\d*\.?|0+$/g, '').length > 2)
			total.firstChild.data = result.toFixed(2);
		else
			total.firstChild.data = result;
	} else {
		if (operatorClicked != '=') {
			result = currentNum;
		}
	}
	currentNum = 0;
	if (op != '=') {
		firstNum = false;
		operatorClicked = op;
		opText.firstChild.data = op;
	}
	else {
		firstNum = true;
		operatorClicked = op;
		opText.firstChild.data = op;
	}
}

function clears (c) {
	var total = document.getElementById('total_text');
	var op = document.getElementById('op_text');
	if (c === "CA" || operatorClicked === "=") {
		result = 0;
		firstNum = true;
		operatorClicked = '';
		total.firstChild.data = 0;
		op.firstChild.data = '';
	} else {
		total.firstChild.data = '_';
	}
	currentNum = 0;
}

var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equals = document.getElementById('equals');

var clear = document.getElementById('clear');
var clearAll = document.getElementById('clear_all')

zero.onclick = function() {
	number(0);
}
one.onclick = function() {
	number(1);
}
two.onclick = function() {
	number(2);
}
three.onclick = function() {
	number(3);
}
four.onclick = function() {
	number(4);
}
five.onclick = function() {
	number(5);
}
six.onclick = function() {
	number(6);
}
seven.onclick = function() {
	number(7);
}
eight.onclick = function() {
	number(8);
}
nine.onclick = function() {
	number(9);
}

add.onclick = function() {
	operator('+');
}
subtract.onclick = function() {
	operator('-');
}
multiply.onclick = function() {
	operator('*');
}
divide.onclick = function() {
	operator('/');
}
equals.onclick = function() {
	operator('=');
}

clear.onclick = function() {
	clears('C');
}
clearAll.onclick = function() {
	clears('CA');
}

