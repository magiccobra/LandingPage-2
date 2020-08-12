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
 * Define Global Variables
 * 
*/

let nav = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function stop(event) {
    event.preventDefault()
}

function position() {
    if (window.scrollY >= 300 && window.scrollY < 950) {
        sections[0].className = 'your-active-class'
        sections[1].classList.remove('your-active-class')
        sections[2].classList.remove('your-active-class')
    } else if (window.scrollY >= 950 &&window.scrollY < 1500 ) {
        sections[0].classList.remove('your-active-class')
        sections[1].className = 'your-active-class'
        sections[2].classList.remove('your-active-class')
    } else {
        sections[0].classList.remove('your-active-class')
        sections[1].classList.remove('your-active-class')
        sections[2].className = 'your-active-class'
    }
}
function moveToS1(){
    window.scrollTo(0,300)
}
function moveToS2(){
    window.scrollTo(0,950)
}

function moveToS3(){
    window.scrollTo(0,1800)
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
for(let i = 0 ; i <= sections.length; i++) {
    if (sections[i] === undefined) {
        continue;
    }

    let list = document.createElement('li')
    let anc = document.createElement('a')
    list.addEventListener('click',stop)    
    anc.textContent = `section ${i+1}`
        anc.href = `#${sections[i].id}`
    anc.className = 'menu__link'
    list.appendChild(anc)
    nav.appendChild(list)
}
let lists = document.querySelectorAll('li')


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 

// Scroll to section on link click
lists[0].addEventListener('click',moveToS1)
lists[1].addEventListener('click',moveToS2)
lists[2].addEventListener('click',moveToS3)

// Set sections as active
document.addEventListener('scroll', position)





