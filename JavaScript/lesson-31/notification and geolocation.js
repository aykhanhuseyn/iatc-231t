console.log('Lesson 31');

// geolocation api

// const successCallback = (geolocationPosition) => {
// 	const latitude = geolocationPosition.coords.latitude;
// 	const longitude = geolocationPosition.coords.longitude;
// 	const altitude = geolocationPosition.coords.altitude;
// 	const timestamp = geolocationPosition.timestamp;

// 	const geolocationData = {
// 		latitude,
// 		longitude,
// 		altitude,
// 		timestamp,
// 	};

// 	console.log(geolocationData);
// };

// const errorCallback = (geolocatioError) => {
// 	if (geolocatioError.code === geolocatioError.PERMISSION_DENIED) {
// 		alert(
// 			'You denied access to your location. Please, allow access to your location to use this feature.',
// 		);
// 	} else if (geolocatioError.code === geolocatioError.POSITION_UNAVAILABLE) {
// 		alert(
// 			'Your location information is unavailable. Please, check your internet connection.',
// 		);
// 	} else if (geolocatioError.code === geolocatioError.TIMEOUT) {
// 		alert('The request to get your location timed out. Please, try again later.');
// 	} else {
// 		alert('An unknown error occurred.');
// 	}
// };

// const options = {
// 	enableHighAccuracy: true,
// 	timeout: 5000,
// 	maximumAge: 0,
// };

// navigator.geolocation.getCurrentPosition(
// 	successCallback,
// 	errorCallback,
// 	options,
// );

// notification api

// const notification = new Notification('Hello, world!');

// new Notification({
// 	title: 'Hello, world!',
// 	body:
// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
// });

// request permission

Notification.requestPermission().then((permission) => {
	if (permission === 'granted') {
		console.log('Permission granted');

		const notification = new Notification('Hello, world!', {
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			icon: 'https://picsum.photos/200/300',
			image: 'https://picsum.photos/200/300',
			badge: 'https://picsum.photos/200/300',
			tag: 'tag',
		});

		setTimeout(() => {
			const notification2 = new Notification('Hello, world! 2', {
				body:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
				icon: 'https://picsum.photos/200/300',
				image: 'https://picsum.photos/200/300',
				badge: 'https://picsum.photos/200/300',
				tag: 'tag',
			});
		}, 1500);

		notification.addEventListener('click', () => {
			console.log('click');
		});

		notification.addEventListener('close', () => {
			console.log('close');
		});

		notification.addEventListener('show', console.log);

		notification.addEventListener('error', console.log);
	}
});

// Notification.requestPermission()
// 	.then((permission) => {
// 		console.log(permission);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
