function facebookPatch()
{
	// Try to remove the stylesheet in the html code that blocks the page

	var elemRemoved = false;
	var attempts = 0;

	var interval = setInterval(function()
	{
		if (document.body !== null && document.body.querySelector('style') !== null)
		{
			document.body.querySelector('style').remove();
			elemRemoved = true;
		}
		if (++attempts >= 20 || elemRemoved)
			clearInterval(interval);
	}, 500);
}

facebookPatch();
