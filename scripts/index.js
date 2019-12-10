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
appendAllMenuItems(menuAsliItems);

///     Medium Exercises
//      Add a click handler to each of the <li> elements
function addClickHandler(array) {
    for(let item of array) {
        // console.log(item)
        item.addEventListener("click", clickToShowMenu);
    } return array;
}
// now add the clickHandler and append
let menuLiWithClicks = addClickHandler(menuAsliItems);
// appendAllMenuItems(menuLiWithClicks);

//      Retrieve value for a category name
function categoryRetriever(category) {
    let section = menu[category];

    return section;
}
// console.log(categoryRetriever("breakfast"));

///     Large Exercises
//      create an `itemToCard` function


function itemToCard(item) {
    //  Looks like we only need name, price, and a div to put them in
    // make div
    const cardDiv = document.createElement("div");
    // give it classname
    cardDiv.className = "card";
    // set name
    const name = item.name;
    // create element
    const nameh2 = document.createElement("h2");
    // change element textContext
    nameh2.textContent = `${name}`;
    // set price
    const price = item.price;
    // create element
    const priceh3 = document.createElement("h3");
    // change element textContext
    priceh3.textContent = `${price}`;


    // append
    cardDiv.appendChild(nameh2);
    cardDiv.appendChild(priceh3);
    return cardDiv;
}
// console.log(itemToCard(menu.breakfast[0]));
const sampleCard = itemToCard(menu.breakfast[0]);

///     appendCardToMainContent
//  Give it somewhere to append
const jsMainContent = document.querySelector(".js-main-content");
function appendCardToMainContent(card) {
    jsMainContent.appendChild(card);
}
// appendCardToMainContent(sampleCard);

///     Update click handler for each of the <li> elements
function clickToShowMenu(liItem) {
    jsMainContent.textContent = "";
    // get the text content, go to menu.textContent

    // console.log(this.textContent);
    // console.log(categoryRetriever(this.textContent))

    let itemsArr = categoryRetriever(this.textContent);
    // console.log(itemsArr);
    
    // for each item of that menu, run the item to card, append to main content
    
    for (let item of itemsArr) {
        item = itemToCard(item);
        appendCardToMainContent(item);
    }
}
