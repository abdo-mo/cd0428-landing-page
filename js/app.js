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
const convertToArray = (nodeList) => {
    const convertedArray = [...nodeList];
    return convertedArray
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const buildingNavFunction = () => {
// build the nav
    const myFragment = document.createDocumentFragment();
    for (let i = 0; i < sections.length; i++) {
        let sec = `section${i+1}`;
        const listItem = document.createElement('li');
        listItem.setAttribute("to", sec)
        const navLink = document.createElement('a');
        navLink.innerHTML = `Section ${i+1}`;
        navLink.setAttribute("href", "#")
        listItem.appendChild(navLink);
        myFragment.appendChild(listItem);
    }
    ul.appendChild(myFragment);
}
// Add class 'active' to section when near top of viewport
const makeActive = () => {
    const sectionsArray = convertToArray(sections);
    let navIndex = 0;
    for (const section of sectionsArray) {
        const box = section.getBoundingClientRect();
        navItem = document.querySelectorAll('li');
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add("active")
            navItem[navIndex].classList.add("active")
        } else {
            section.classList.remove("active");
            navItem[navIndex].classList.remove("active")
            
        }
        navIndex += 1;
    }
}
// Scroll to anchor ID using scrollTO event
const scrolling = () => {
    target = event.target.parentElement;
    let id = target.getAttribute("to");
    const element = document.getElementById(id);
    if (element) {
        let y = element.getBoundingClientRect().top + window.scrollY;        
        window.scrollTo({
            top: y,
            left: 0,
            behavior: "smooth",
        });
    }      
}
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
ul.addEventListener("click", (event) => {
    event.preventDefault()
    scrolling();
});
// Set sections as active
document.addEventListener("scroll", makeActive);