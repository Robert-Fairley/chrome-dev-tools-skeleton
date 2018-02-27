const script = `
function DevTools(opts = {}) {
	// Check to see if things are working right. Being that this is recursive it's a little redundant.
	// You can probably do better.
	window.testFunc = function() {
		if (!window.DevTools) {
			console.error("Dev Tools is not working properly. Check your installation.");
			return 1;
		}
		console.log("Dev Tools loaded correctly.");
	};

	// Sample Functions. You might want to modify these.
	window.checkClicks = function() {
		monitorEvents(document.body, "click");
	};

	window.stopCheck = function() {
		unmonitorEvents(document.body);
	}
}

DevTools();

`;

let sElement = document.createElement('script');
sElement.innerHTML = script;
document.querySelector('head').appendChild(sElement);



