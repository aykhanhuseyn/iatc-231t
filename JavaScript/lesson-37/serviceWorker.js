console.log('Hello from serviceWorker.js');

console.log(self);

const CACHE_KEY = 'FoodMenu_V4';

const cacheableUrls = [
	// '/JavaScript/lesson-37/',
	// '/JavaScript/lesson-37/index.html',
	'/JavaScript/lesson-37/main.js',
	'/JavaScript/lesson-37/style.css',
	'/JavaScript/lesson-37/assets/plt.jpeg',
];

// Progressive Web Apps (PWA) - Service Worker
self.addEventListener('install', (event) => {
	console.log('install', event);
	event.waitUntil(
		caches.open(CACHE_KEY).then((cache) => {
			cache.addAll(cacheableUrls);
		}),
	);
});

self.addEventListener('fetch', (event) => {
	console.log('fetch', event.request.url);
	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			if (cachedResponse) {
				return cachedResponse;
			}
			return fetch(event.request);

			// return fetch(event.request).then((response) => {
			// 	if (!response || response.status !== 200 || response.type !== 'basic') {
			// 		return response;
			// 	}
			// 	const responseToCache = response.clone();
			// 	caches.open(CACHE_KEY).then((cache) => {
			// 		cache.put(event.request, responseToCache);
			// 	});
			// 	return response;
			// });
		}),
	);
});
