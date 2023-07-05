const div = document.createElement('div');

div.style.cssText = `
  width: 100px;
  height: 100px;
  background-color: #ee1111d3;
  border-radius: 12px;
  cursor: pointer;
`;

div.classList.add('wrapper');

div.classList.add('wrapper');

// div.classList.remove('wrapper');

div.classList.toggle('wrapper');

// div.addEventListener('click', () => {
// 	document.body.classList.toggle('dark');
// });

div.onclick = () => {
	document.body.classList.toggle('dark');
};

root.append(div);

const p = document.createElement('p');
p.textContent = 'Hello world!';

const p2 = document.createElement('p');
p2.textContent = 'Bye world!';

// div.before(p);

div.append(p);
div.prepend(p2);
div.prepend('salam');
div.append('sagol');

// div.remove();
