function getCacheName(e) {
	var t = e.match("v[0-9.]+w") || e.match("resversion[0-9.]+w");
	return t && t.length > 0 ? t[0] : null
}

self.addEventListener("install", function () {
	self.skipWaiting()
}),
	self.addEventListener("fetch", function (e) {
		console.log(e.request);
		console.log(caches.match(e.request));
	// e.respondWith(caches.match(e.request).then(function (t) {
	// 	return t || fetch(e.request).then(function (t) {
	// 		if (200 == t.status) {
	// 			var n = getCacheName(t.url);
	// 			if (n) return caches.open(n).then(function (n) {
	// 				return n.put(e.request, t.clone()), t
	// 			})
	// 		}
	// 		return t
	// 	})
	// }))
});