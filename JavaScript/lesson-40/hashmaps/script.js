const obj = {
	name: 'John',
	age: 30,
};

obj[0] = 4;
obj[1] = 5;

obj['0'] = 444;
// obj[true] = 555;

let obj2 = {
	name: 'John',
};
obj[obj2] = 6;

const arr2 = [1, 2, 3];
obj[arr2] = 7;

if ('name' in obj) {
	console.log('name in obj');
}

if (true in obj) {
	console.log('true in obj');
} else {
	console.log('true not in obj');
}

obj['surname'] = undefined;

if ('surname' in obj) {
	console.log('surname in obj');
}

if (obj['surname']) {
	console.log('surname in obj');
}

console.log(Object.keys(obj), obj);

const map = new Map();

map.set('name', 'John');
map.set('age', 30);

map.set(0, 4);
map.set(1, 5);

map.set('0', 444);
map.set(true, 555);

console.log(map.get('name'));
console.log(map.get(0));
console.log(map.get('0'));
console.log(map.get(true));

if (map.has('name')) {
	console.log('name in map');
}

if (map.has(true)) {
	console.log('true in map');
}

map.set(obj2, 6);

const arr3 = [1, 2, 3];
map.set(arr3, 7);

console.log(map.get(obj2), map.get(arr3));

[1, 2, 3].forEach((value, index, itself) => {});

map.forEach((value, key, itself) => {});

console.log(map);

const weakMap = new WeakMap();

const set = new Set();

const arr = [1, 2, 3, 4, 5, 4, 3, 6, 34, 4, 7, 4, 3, 5];
arr.forEach((value) => {
	set.add(value);
});

const uniqueArr = Array.from(new Set(arr));

console.log(set, arr, uniqueArr, set.size, arr.length);

set.forEach((value, valueAgain, itself) => {});

const weakSet = new WeakSet();

const obj3 = {
	name: 'John',
	age: 30,
};

const obj4 = {
	name: 'John',
	age: 30,
};

weakSet.add(obj3);
weakSet.add(obj4);

console.log(weakSet);

console.log(weakSet.has(obj3), weakSet.has(obj4));
