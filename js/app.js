
// Make h1 in header have different text
header = document.querySelector('h1'); 
header.innerText= "new text!"; 

// Make nav ul li elements get larger when you hover over them
list = document.querySelector('ul');
list.addEventListener('mouseenter', function() {
list.style.fontSize = '25px';
})

list.addEventListener('mouseleave', function() {
list.style.fontSize = '15px';
});

//below is a different version but should work the same
// var navLinks = document.quereySelectorAll('nav ul li'); 
// navLinks.forEach(function(element) {
// 	increaseTextSize(element, 'mouseover', '50px')
// })

// function increaseTextSieze(element, eventType. newSize) {
// 	element.addEventListener(eventType, funciton() {
// 		element.style.fontSize = newSize;
// 	})};
//or this
// var navLinks = document.quereySelectorAll('nav ul li');
// navLinks.forEach(function(link) {
// 	link.addEventListener('mouseover', function(){
// 		//this.style.fontSize = '30px';
// 		link.style.fontSize = '30px'; 
// 	})
// })	

// Add another element to the main element
maintext = document.querySelector('main');
txt3 = document.createElement("p");  // Create with DOM
txt3.innerHTML = "Text.";
maintext.append(txt3);      // Append the new elements

// Dynamically change the color of the background on the footer when the user hovers over it
bottom = document.querySelector('footer');
bottom.addEventListener('mouseenter', function() {
	bottom.style.backgroundColor = 'red';
})

bottom.addEventListener('mouseleave', function() {
	bottom.style.backgroundColor = 'green'; 
});
// Change the font size of the paragraphs in the main element when the user clicks them
pfont = document.querySelector('main'); 
pfont.addEventListener('mouseenter', function(){
	pfont.style.fontSize = '30px'; 
})
pfont.addEventListener('mouseleave', function(){
	pfont.style.fontSize = '20px'; 
})
// Change the text in the footer when the user clicks it
// Remove the h1 element in the header
header.remove('h1'); //since 'header' was declared earlier
//also
var h1 = document.querySelector('h1'); 
h1.remove(); 
main.appendChild(h1); 

// Put something in the place of the h1 in the header
var newHeader = document.quereySelector('header'),
h2 = document.createElement('h2'); 

h2.innerText = 'something else'; 
newHeader.prepend(h2); 
// Change the text in one of the paragraph tags in the main element
// Change the size of the header element to 200px using grid syntax
var container = document.querySelector('.container');
container.style.gridTemplateRows = '200px auto 125px';
//or
// root.style.setProperty('--header-height', '200px');