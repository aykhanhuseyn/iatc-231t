const emailRegexp = /\w{3,18}@[a-z]{3,5}\.((com)|(com\.az)|(edu\.az))/; // username@domain.com

console.log(emailRegexp.test('username@domain.com'));

const phoneRegexp =
	/(994)?.{0,2}(0?(10)|(50)|(51)|(55)|(70)|(77)|(99)).{0,2}\d{3}.{0,2}\d{2}.{0,2}\d{2}/g; // +994555134323

const str =
	'salam menim nomrem 055 222 55 11, bu biri nomreme de zeng eliye bilersiz: +994555134323. bu da papamin nomresidir (055) 333-23-44.';

const phoneNumbers = str.match(phoneRegexp);

// phoneNumbers.forEach((_, index, itself) => {
// 	itself[index] = itself[index].replace(/\D/g, '');
// });

// phoneNumbers.forEach((_, index, itself) => {
// 	itself[index] = itself[index].replace(/^(994)|0/, '+994');
// });

console.log(phoneNumbers);

// caret ^ - start of the string
// dollar $ - end of the string

// \b - word boundary
// \B - not word boundary

// \d - digit
// \D - not digit

// \s - space
// \S - not space

// \w - word
// \W - not word

// \n - new line
// \t - tab

// \0 - null character
// \xhh - character with code hh
// \u{hhhh} - unicode character with code hhhh
// \cX - control character X

// . - any character except new line
// \. - dot

// \ - escape character

// ? - zero or one
// * - zero or more
// + - one or more
// {n} - exactly n times
// {n,} - at least n times
// {n,m} - at least n times but no more than m times
// {,m} - no more than m times
