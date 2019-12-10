///     Small exercises
//      Extract names of categories
function getCategories(menu) {
    return Object.keys(menu);
}
const categories = getCategories(menu);

// Wrap names in <li> elements

function nameToListItem(category) {
    let li = document.createElement('li');
    li.textContent = category;
    return li;
}
// console.log(nameToListItem(categories[0]))

//      Write a function that transforms an array of category names to an array of `<li>` elements.

function categoriesToListItem(array) {
    return array.map(nameToListItem);
}
// console.log(categoriesToListItem(categories))

//      Use getCategories() in combinatio with categoriesToListItem()

const menuAsliItems = categoriesToListItem(categories)
// console.log(menuAsliItems);

//      Render the list items to .js-menu
// give it a target of .js-menu
const jsMenu = document.querySelector(".js-menu");

// function that appends single item
function appendMenuItem(item) {
    jsMenu.appendChild(item);
}

// function that appends all items 
function appendAllMenuItems(array) {
    array.map(appendMenuItem)
}
// appendAllMenuItems(menuAsliItems);

///     Medium Exercises
//      Add a click handler to each of the <li> elements
function addClickHandler(array) {
    for(let item of array) {
        // console.log(item)
        // placeholder function because JavaScript just NEEDS another arg
        item.addEventListener("click", function() {
           console.log('yay')
        });
    } return array;
}
// now add the clickHandler and append
let menuLiWithClicks = addClickHandler(menuAsliItems);
appendAllMenuItems(menuLiWithClicks);

//      Retrieve value for a category name
function categoryRetriever(category) {
    let section = menu[category];

    return section;
}
// console.log(categoryRetriever("breakfast"));

///     Large Exercises
//      create an `itemToCard` function
