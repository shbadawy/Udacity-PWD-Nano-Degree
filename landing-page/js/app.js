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

 // Getting all sections
let sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function editClass(item, remove, className){

    const itemDisplay = item.style.display;
    item.style.display = "none";
    if ( remove == "true") {

      item.classList.remove(className);


    }
    else {item.classList.add(className);}
    item.style.display= itemDisplay;

}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Build the navigation bar items depending on the sections in the page
function buildNavBar() {

  let fragment = document.createDocumentFragment();

  // Adding list items
  for (section of sections) {

    const sID = section.attributes[0].value;
    const newItemID = `${sID}_li`
    const newListItem = document.createElement('li');

    newListItem.addEventListener("click", function(){ scroll(this); });
    newListItem.innerHTML = sID;
    newListItem.style.color = "black";
    newListItem.classList.add("menu__link");
    newListItem.setAttribute("id",newItemID )
    fragment.appendChild(newListItem);

  }

  // Adding the fregmant to the page
  document.querySelector('#navbar__list').appendChild(fragment);

}

// Add class 'active' to section when near top of viewport
function isScrolling() {

  let selectedSection = sections[0];
  let minimumDistance = 1000000000;

  for (section of sections) {

    // Getting the distance from the top of the page
    const offSet = Math.abs(section.getBoundingClientRect().top);
    if (offSet < minimumDistance) {

      // Updating the minimal distance
      selectedSection = section;
      minimumDistance = offSet;

    }

    // Clearing the class active from all sections
    editClass(section, "true", "active-section")

    // Clearing all styles from all list items
    const selectedSectionID = section.attributes[0].value;
    listItem = document.querySelector(`#${selectedSectionID}_li`);
    listItem.style.display = "none";
    listItem.style.background = 'white';
    listItem.style.display = "block";

  }

  // Setting the class of the active section to active
  editClass(selectedSection, "false", "active-section")

  // Updating the style of the active section's item list
  const selectedSectionID = selectedSection.attributes[0].value;
  listItem = document.querySelector(`#${selectedSectionID}_li`);
  listItem.style.display = "none";
  listItem.style.background = "#333";
  listItem.style.display = "block";
}


// Scroll to anchor ID using scrollTO event
 function scroll (element_called_the_handler){

   const sectionID = `#${element_called_the_handler.innerText}`;
   const selected_section = document.querySelector(sectionID);

   // Removing the class active from all sections
   for (section of sections){

     editClass(section, "true", "active-section")

   }
   // Add it to the active section and scroll to it

   editClass(selected_section, "false", "active-section")
   selected_section.scrollIntoView();

 }

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.onload = buildNavBar();

// Set sections as active
document.addEventListener("scroll", isScrolling);
