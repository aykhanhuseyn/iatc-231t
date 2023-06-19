# Function

## Syntax

```javascript
// named
function funcName() {
	console.log('hello');
}
// anonymous
function () {
	console.log('hello');
}

const funcName = function funcName() {
	console.log('hello');
}
const funcName = function () {
	console.log('hello');
}
```

### Function Declaration

```javascript
// function declaration
function funcName() {
	console.log('hello');
}
```

### Function Expression

```javascript
// function expression
const funcName = function () {
	console.log('hello');
};
```

### Arrow Function

```javascript
// arrow function
const funcName = (params) => {
	console.log(params);
};
```

## Paramenters

### Arguments

`arguments` is arraylike object

### Spread

`...` is spread operator, it gets parameters as array

## parameter vs argument

// parameter - variable in function declaration
// argument - value passed to function

## function calls

### currying

### recursion

### higher order functions

```javascript
function timeFunction(fn) {
	return function (...args) {
		console.time('Execution time');
		const result = fn(...args);
		console.timeEnd('Execution time');
		return result;
	};
}

// Original function
function multiply(a, b) {
	return a * b;
}

// HOC applied to the multiply function
const timedMultiply = timeFunction(multiply);

// Using the HOC function
const result = timedMultiply(5, 7); // Output: Execution time: 0.080ms
console.log(result); // Output: 35
```

## function methods

### call

### apply

### bind
