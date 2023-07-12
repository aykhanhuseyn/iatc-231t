const input = document.createElement('input');
input.type = 'file';
input.accept = 'image/*';
input.style.display = 'none';
document.body.prepend(input);

const fileUpload = document.createElement('div');
fileUpload.style.width = '300px';
fileUpload.style.height = '300px';
fileUpload.style.border = '1px solid #000';
fileUpload.style.margin = '0 auto';
document.body.prepend(fileUpload);

fileUpload.addEventListener('click', () => {
	input.dispatchEvent(new MouseEvent('click'));
});

input.addEventListener(
	'change',
	({
		target: {
			files: { 0: file },
		},
	}) => {
		const image = new Image();
		image.src = URL.createObjectURL(file);

		fileUpload.style.backgroundImage = `url(${image.src})`;
		fileUpload.style.backgroundSize = 'cover';

		// const canvas = document.createElement('canvas');
		// canvas.width = image.width;
		// canvas.height = image.height;
		// const context = canvas.getContext('2d');

		// image.addEventListener('load', () => {
		// 	context.drawImage(image, 0, 0);
		// 	const data = context.getImageData(0, 0, image.width, image.height);
		// 	console.log(data);
		// 	console.log(canvas.toDataURL('image/png'));

		// 	fileUpload.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
		// });
	},
);
