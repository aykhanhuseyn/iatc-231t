let und: undefined;
let nil: null = null;
let num: number = 5;
let bool: boolean = true;
let str: string = 'string';
let sym: symbol = Symbol.for('ts');
let obj: object = {};
let arr: number[] = [];
arr.push(1);
// arr.push('1');

// num = 'salam';

let a: number;
a = 5;
// a = true;

let b: any;
b = 5;
b = true;
b = {};

let c;
c = 5;
c = '5';

// any
let d;
let e: any;
let g: any = {
	name: 'John',
};
g.name;

// unknown
let f: unknown;
f = 5;
f = '5';
let h: unknown = {
	name: 'John',
};
// h.name

// never
function i(): never {
	throw new Error('it will never return');
}
let j = i();

export type Usercik = {
	name: string;
};
