// Variables for the key name and array of values for localStorage
var myKey = "listValues";
var myItems = [];

function setupLocal() {

  // check if any values have already been saved
  if(localStorage.getItem(myKey) !== null) {

    // First, we pull the string value using the key
    let myItemsString = localStorage.getItem(myKey);

    // Then we convert the string into our array
    myItems = JSON.parse(myItemsString);

    // now we can use jQuery's "each" function to add
    $(myItems).each(function() {
      createItem(this);
    });
  }
  else {
    createItem("List One Item");
  }

  // We're going to use a streamlined listener for item creation
  $("#button").on("click", function() {
    // first we grab the value for the new item
    let curVal = $("#input").val()

    // first call our DOM create function, passing it our value
    createItem(curVal);
    // then add the item value to the array
    myItems.push(curVal);
    // finally, save our array to local storage
    saveItems();
  });
}

// Making our element creation a separate function
function createItem(itemValue) {
  // create the list item
  $newElem = $("<li></li>").text(itemValue);
  $newbutton = $("<button></button>").text("X");
  $newElem.append($newbutton);
  // add a listener to the list item
  $newbutton.on("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
      removeItem(this.parentNode);
    // we'll use our own function to complete removal this time
    // removeItem($newElem.val());
    // this.parentNode.parentNode.removeChild(this.parentNode);
    // $newElem.remove();

  });


  // attach the list item to the list
  $("#list").append($newElem);
}

// Our more robust removal process is now its own function
function removeItem(item) {
console.log("Deleting");
  // first we need to get the index of our item in the list
  let index = $(item).index();

  // now we can remove the item from the array
  myItems.splice(index, 1);
console.log(index);
console.log(item);
  // then save the array to localStorage
  saveItems();

  // finally, we can remove it from the DOM
  $(item).remove();
}

/*
  Since we need to convert our array to a JSON string every
  time we save, we'll create a new function to do this for us
*/
function saveItems() {
  let myItemsString = JSON.stringify(myItems);
  localStorage.setItem(myKey, myItemsString);
}

// we'll run our setup function once the document is fully loaded
$(function() {
  setupLocal();
});
