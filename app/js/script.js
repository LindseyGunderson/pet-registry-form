// get all requirements for type of pet - determine if the pet is a dog or a cat

const catType = document.querySelector("#catType"),
  dogType = document.querySelector("#dogType");


// all requirements for breed radio buttons
const radioBtn = document.querySelector(".breed-input"),
  mixedBreedInput = document.querySelector("#mixedBreedRadioBtn"),
  mixBreedTextbox = document.querySelector("#mixedBreedTextbox"),
  noBreedInput = document.querySelector("#noBreedRadioBtn");

//  get all required elements for searching for a breed
const searchWrapper = document.querySelector(".search-wrapper"),
searchInput = searchWrapper.querySelector("#searchInput"),
searchResults = searchWrapper.querySelector("#breedOptions");





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

    1. Determine which pet type was chosen
    2. if the radio button selected is "cat", value will be passed to the breeds filter
    3. breeds filter will only show the list for the selected type of pet ex. only cat breed types will be shown if "cat" is selected

*/

/* ----- Add breeds dynamically to datalist for search -----

    1. Add event listener to track users input into input text field
    2. Note*: if the radio button selected is "cat", value will be passed to the breeds filter
    3. breeds filter will only show the list for the selected type of pet ex. only cat breed types will be shown
    4. User's input will auto complete closest match from filtered list
    5. Option for Can't find breed added to list.
*/

searchInput.addEventListener("keyup", () => {
    // emtpy array to store results
    let userResults = [];
  
    // gather the users input into the search box
    let userInput = searchInput.value;
  
    // if there are results
    if (userInput.length) {

        // check to see which pet type was selected
        if (dogType.checked) {
            // filter the results that match the user's input
            userResults = dogBreeds.filter((breeds) => {
            return breeds.toLowerCase().includes(userInput.toLowerCase());
            });
        } else {
            userResults = catBreeds.filter((breeds) => {
            return breeds.toLowerCase().includes(userInput.toLowerCase());
            });
      }
    }
  
    console.log(userResults);

    // Show the results
    showResults(userResults);
  });
  
  function showResults(results) {
    if (!results.length) {
      // searchResults.classList.remove('show');
      console.log(results);
      console.log("no results");
      return (searchResults.innerHTML = `<option value="Can't Find it?">`);
    }
  
    // take the breed list results
    const breedList = results

        // map through the results
      .map((breed) => {

        // return the breeds.js file and add them to the datalist as options
        return `<option value="${breed}">`;
      })
      .join("");

    // add the list and show the results
    searchResults.innerHTML = `${breedList}`;
  }