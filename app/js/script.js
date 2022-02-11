// get all requirements for type of pet - determine if the pet is a dog or a cat

const catType = document.querySelector("#catType"),
  dogType = document.querySelector("#dogType");


// all requirements for breed radio buttons
const radioBtn = document.querySelector(".breed-input"),
  mixedBreedInput = document.querySelector("#mixedBreedRadioBtn"),
  mixBreedTextbox = document.querySelector("#mixedBreedTextbox"),
  noBreedInput = document.querySelector("#noBreedRadioBtn");


/* ----- Breed selection with radio buttons -----

    1. Add an event listen for the mixed breed input
    2. if the radio button selected is "it's a mixed breed" -> show the textbox to write the type of breeds that the pet is mixed with.
    3. hide the input box on change if "I don't know" is selected

*/

mixedBreedInput.addEventListener("click", () => {

// if mixed breed is selected, show the input for mixed breed
  if (mixedBreedInput) {
    mixBreedTextbox.style.display = "block";
  }

//   listen for onchange and hide the textbox if "I don't know is selected"
  noBreedInput.addEventListener("change", () => {
    mixBreedTextbox.style.display = "none";
  });
});


/* ----- Determine which type of pet was chosen -----

    1. Add an event listen for selected pet type
    2. if the radio button selected is "cat", value will be passed to the breeds filter
    3. breeds filter will only show the list for the selected type of pet ex. only cat breed types will be shown

*/

/* ----- Add breeds dynamically to datalist for search -----

    1. Add event listener to track users input into input text field
    2. 
    2. if the radio button selected is "cat", value will be passed to the breeds filter
    3. breeds filter will only show the list for the selected type of pet ex. only cat breed types will be shown

*/