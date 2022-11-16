function setColor(color) {
	let currentColor = document.getElementById('color-changer')
	let currentFav = document.getElementById('Favicon')
	switch (color) {
		case 'blue':
			currentColor.setAttribute('href', '/css/colors/blue.css')
			currentFav.setAttribute('href', '/images/favicons/BlueF')
			break;
		case 'green':
			currentColor.setAttribute('href', '/css/colors/green.css')
			currentFav.setAttribute('href', '/images/favicons/GreenF')
			break;
		case 'yellow':
			currentColor.setAttribute('href', '/css/colors/yellow.css')
			currentFav.setAttribute('href', '/images/favicons/YellowF')
			break;
		case 'red':
			currentColor.setAttribute('href', '/css/colors/red.css')
			currentFav.setAttribute('href', '/images/favicons/RedF')
			break;
	}
	localStorage.setItem('jsColor', color)
	
}
if (localStorage.getItem('jsColor') != null) {
	setColor(localStorage.getItem('jsColor'))
}
