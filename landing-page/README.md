# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [JavaScript code] (#JavaScript)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## JavaScript

### buildNavBar()
This function dynamically builds the items of the navigation bar based on the available sections.

### editClass(item, remove, className)
This function edits the class of a given element (add/remove).
Inputs:
* item: The item to be edited.
* remove: True if remove the class for the item, and False if add a class to the item.
* className: The class name to be added or removed.

### scroll (element_called_the_handler)
This function is triggered when any of the navigation bar's items is clicked.
Inputs:
* element_called_the_handler: The element that calling this function.

### isScrolling ()
This function updates the classes of the sections and the list items while scrolling.
