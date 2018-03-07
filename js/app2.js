// Make h1 in header have different text
var h1 = document.querySelector('h1')
h1.innerText = 'Something else'


// Make nav ul li elements get larger when you hover over them
var listItems = document.querySelectorAll('nav ul li')
listItems.forEach(function(listItem) {
	listItem.addEventListener('mouseover', function() {
		this.style.fontSize = '200%'
	})
	listItem.addEventListener('mouseout', function() {
		this.style.fontSize = '100%'
	})
})

// Add another element to the main element
var main = document.querySelector('main'),
	newParagraph = document.createElement('p')

newParagraph.innerText = 'This a new thing'
newParagraph.style.fontSize = '200%'
newParagraph.style.color = 'red'

main.appendChild(newParagraph)

// Dynamically change the color of the background on the footer when the user hovers over it
var footer = document.querySelector('footer')

footer.addEventListener('mouseover', function() {
	this.style.backgroundColor = 'limegreen'
})
footer.addEventListener('mouseout', function() {
	this.style.backgroundColor = '#39add1'
})

// Change the font size of the paragraphs in the main element when the user clicks them
var paragraphs = document.querySelectorAll('main p')

paragraphs.forEach(function(paragraph) {
	paragraph.addEventListener('click', function() {
		this.style.fontSize = '200%'
	})
})

// Change the text in the footer when the user clicks it
footer.addEventListener('click', function() {
	footer.innerHTML = 'This a <em> new </em> thing'
})

// Remove the h1 element in the header
var logo = document.querySelector('h1')
logo.remove()


// Put something in the place of the h1 in the header
var header = document.querySelector('header'),
	newLogo = document.createElement('h2')

	newLogo.innerText = 'New Logo'
header.prepend(newLogo)

// Change the text in one of the paragraph tags in the main element
paragraphs[1].innerText = 'I make dis a different something!'
paragraphs[1].style.backgroundColor = 'blanchedalmond'


// Change the size of the header element to 200px using grid syntax
var container = document.querySelector('.container');
container.style.gridTemplateRows = '200px auto 125px';