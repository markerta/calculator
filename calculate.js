var result = 0;
var currentNum = 0;
var operatorClicked = '';
var operatorClickedLast = false;
var firstNum = true;
var isDecimal = false;

function setTotal (text) {
	if (text.toString().length > 8) {
		document.getElementById('total_text').firstChild.data = text.toPrecision(4);
	} else {
		document.getElementById('total_text').firstChild.data = text;
	}
}
function setTotalFixed (text) {
	if (text.toString().replace(/^-?\d*\.?|0+$/g, '').length > 3) {
		if (text.toFixed(2).toString().length > 8) {
			document.getElementById('total_text').firstChild.data = text.toFixed(2).toPrecision(4);
		} else {
			document.getElementById('total_text').firstChild.data = text.toFixed(3);
		}
	} else {
		if (text.toFixed(2).toString().length > 8) {
			document.getElementById('total_text').firstChild.data = text.toPrecision(4);
		} else {
			document.getElementById('total_text').firstChild.data = text;
		}
	}
}
function setOp (op) {
	document.getElementById('op_text').firstChild.data = op;
}

function number (num) {
	var numDecimals;

	if (operatorClicked === "=") {
		firstNum = true;
		result = 0;
	}
	if (firstNum) setOp('');
	if (!isDecimal) {
		currentNum = currentNum * 10 + num;
		setTotal(currentNum);
		
	} else {
		numDecimals = currentNum.toString().replace(/^-?\d*\.?|0+$/g, '').length + 1;
		currentNum = currentNum + num / Math.pow(10, numDecimals);
		setTotal(currentNum);
		
	}
	operatorClickedLast = false;
}

function operator (op) {
	if (!firstNum && !(operatorClicked === "=")) {
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
		setTotalFixed(result);
	} else if (firstNum) {
		result = currentNum;
	}
	currentNum = 0;
	isDecimal = false;
	operatorClickedLast = true;
	if (op != '=') {
		firstNum = false;
		operatorClicked = op;
		setOp(op);
	}
	else {
		operatorClicked = op;
		setOp(op);
	}
}

function decimal () {
	setTotal(currentNum + ".");
	isDecimal = true;
}

function negate() {
	if (!operatorClickedLast) {
		if (Math.sign(currentNum) == 1) {
			currentNum = -Math.abs(currentNum);
		}
		else {
			currentNum = Math.abs(currentNum);
		}
		setTotalFixed(currentNum);
	}
	else {
		if (Math.sign(result) == 1) {
			result = -Math.abs(result);
		}
		else {
			result = Math.abs(result);
		}
		setTotalFixed(result);
	}
	
}

function clears (c) {
	if (c === "CA" || operatorClicked === "=" || firstNum) {
		result = 0;
		firstNum = true;
		operatorClicked = '';
		setTotal(0);
		setOp('');
	} else {
		setTotal('_');
	}
	isDecimal = false;
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

var dot = document.getElementById('dot');
var neg = document.getElementById('neg');

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

dot.onclick = function() {
	decimal();
}

neg.onclick = function() {
	negate();
}

clear.onclick = function() {
	clears('C');
}
clearAll.onclick = function() {
	clears('CA');
}

