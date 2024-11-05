/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll("section");
let ul = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function buildingNavFunction() {


// build the nav
    const myFragment = document.createDocumentFragment();
    for (let i = 0; i < sections.length; i++) {
        const listItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.innerHTML = `Section ${i+1}`;
        listItem.appendChild(navLink);
        myFragment.appendChild(listItem);
    }
    ul.appendChild(myFragment);
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("DOMContentLoaded", (event) => {
    buildingNavFunction();
  });
// Scroll to section on link click

// Set sections as active


// mainFunction();