console.log('DOM => Document Object Model');

const root = document.getElementById('root'); // HTMLDivElement

console.log(root);

const links = document.getElementsByTagName('a'); // HTMLCollection

const linksWithClass = document.getElementsByClassName('link'); // HTMLCollection

const email = document.getElementsByName('aTag'); // NodeList

const aaa = document.querySelector('a.link[name="aTag"]'); // HTMLAnchorElement
const aaaaaa = document.querySelectorAll('a.link[name="aTag"]'); // NodeList

console.log(
	links,
	Object.prototype.toString.call(links),
	Object.prototype.toString.call(links[0]),
);

console.log(
	linksWithClass,
	Object.prototype.toString.call(linksWithClass),
	Object.prototype.toString.call(linksWithClass[0]),
);

console.log(
	email,
	Object.prototype.toString.call(email),
	Object.prototype.toString.call(email[0]),
);

console.log(aaa);
console.log(aaaaaa);

console.log('-------------------');
// HTMLCollection - no forEach
for (let i = 0; i < links.length; i++) {
	console.log(links[i]);
}

console.log('-------------------');

for (let i = 0; i < email.length; i++) {
	console.log(email[i]);
}

console.log('-------------------');

// NodeList
email.forEach((item) => {
	console.log(item);
});
