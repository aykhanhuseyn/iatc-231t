const tooltip = document.createElement('div');

tooltip.style = `
  max-width: 200px;
  background-color: #bf1f1f;
  padding-block: 4px;
  padding-inline: 6px;
  border-radius: 5px;
  color: #fff;
  border: 1px solid #b9b9b9;
  box-shadow: 0 0 5px #b9b9b9;
  font-size: 11px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;

document.querySelectorAll('[data-tooltip]').forEach(function (element) {
	element.addEventListener('mouseover', function (event) {
		tooltip.innerHTML = `<span>${element.dataset.tooltip}</span>`;
		tooltip.style.display = 'block';
		tooltip.style.top = event.pageY + 10 + 'px';
		tooltip.style.left = event.pageX + 10 + 'px';
		document.body.appendChild(tooltip);
	});

	element.addEventListener('mouseout', function () {
		tooltip.style.display = 'none';
		tooltip.remove();
	});
});
