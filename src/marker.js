import { useSettings } from './helpers/useSettings';

useSettings(createMarker);

function createMarker(settings) {
	// Find marker settings for current url
	const marker = JSON.parse(settings).find((item) =>
		// True if some url is included in the current url
		item.urls.some((url) => window.location.href.includes(url))
	);

	if (!marker) return;

	// Create marker element
	const el = document.createElement('span');

	// Add element properties
	el.id = 'urlMarker';
	el.innerHTML = marker.name;
	el.style = marker.style;

	// Add marker to page
	document.body.appendChild(el);

	// Add marker name to title displayed in browser tab
	document.title = marker.name + ' — ' + document.title;
}
