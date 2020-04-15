// From Chrome Extension "Ignore X-Frame headers";
chrome.webRequest.onHeadersReceived.addListener(
	function (details) {
		details.responseHeaders.push({ name: 'SameSite', value: 'None' });
	  for (var i = 0; i < details.responseHeaders.length; ++i) {
		if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
		  details.responseHeaders.splice(i, 1);
		  return {
			responseHeaders: details.responseHeaders
		  };
		}
	  }
	}, {
	  urls: ["<all_urls>"]
	}, ["blocking", "responseHeaders"]);
