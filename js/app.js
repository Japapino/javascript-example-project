
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
header.remove('h1'); 

// Put something in the place of the h1 in the header
// Change the text in one of the paragraph tags in the main element
// Change the size of the header element to 200px using grid syntax

