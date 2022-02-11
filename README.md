# pet-registry-form
This pet registry form is for DocuPet and was tasked to create a Pet Owner registration inspired by the mock ups provided.
 
 ## Technologies Used
- HTML/CSS
- JavaScript
- Bootstrap Framework

## Legend

- Description
- Installation / Execution
- Overview
- Screenshots
- Demo


## Description
Taking the mock ups as inspiration, I wanted to build on the current form and utilize Bootstrap to modernize the look. Keep with the current colors, I wanted to put emphasis on the accent color for selections and cta actions. For the layout of this application, working with a two column layout was decided to utilize more of the whitespace and also add an image to incorporate more visuals to the form. Users can walk through the process of filling out the form. The form includes textboxes, radio buttons and a searchable datalist that can filter based on the user's choice. With using Bootstrap, responsive design has been implemented with some of the components, however, I have also included a few small media queries for the text and form container.

## Installation / Execution
All dependencies are included within the folder once downloaded from the GitHub repository. Bootstrap cdn is used within the html file for the single page application instead of downloading bootstrap folder for simplicity. Once downloaded, you can open the file in your preferred code editor. Index.html file can be opened a browser or if you are using VS code, the live server extension can also be used. 

File Structure:
- css
    - styles.css : contains custom styling for Bootstrap components, resets and css variables.
- images
    - contains two images used for the application as svgs.
- js
    -   breeds.js : contains two arrays with string values for cat breeds and dog breeds. This will be dynamically added once the user chooses a pet type and filtered within the script.js file.
    -   script.js : contains main functionality for form. 
        - Once the user has selected a pet type, the eventlistener will choose the corresponding breed list and filter for the useres input. 
        - The second eventlistener will track the user's input when they are searching for a breed and find the closest match in the breeds list.
        - If the user can not find the breed they are looking for, they can choose "I don't know" or "It's a mix", if "It's a mix" is chosen, an additional textbox will be displayed for the user to manually input the mixed breed.
- index.html
    - main page for the application. All custom css and framework styling is added in this folder where the user use to demo.

## GitHub & Live Demo
<a href="https://github.com/LindseyGunderson/pet-registry-form/"> GitHub Repository </a> | <a href="https://lindseygunderson.github.io/pet-registry-form/" target="_blank"> Live Demo </a> 


## Overview Images

