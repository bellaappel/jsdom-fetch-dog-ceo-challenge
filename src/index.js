// urls for an api
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"; 
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
// selectors
const container = document.getElementById("dog-image-container");
const breedList = document.getElementById('dog-breeds');
const dropDown = document.getElementById('breed-dropdown')
 
// invoking functions -- function hoisiting makes this work. Why i can call these functions here
getImages()
getBreeds()


// iterating over each element in the array at results.message
function getImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => showDogs(image));
});
}

// at 24 creating the element but at 27 adding it to the DOM
function showDogs(picUrl) {
    const img = document.createElement('img');
    img.src = picUrl
    img.style = 'max-width: 25%'
    container.appendChild(img);
}


// Object.keys is creating an array which contains all of the keys of the object that we give it as an argument 
function getBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results =>{
        Object.keys(results.message).forEach(breed => showBreed(breed));
    });
}

function showBreed(dogURL) {
    const li = document.createElement('li');
    li.innerHTML = dogURL;
    breedList.appendChild(li);
    li.addEventListener('click', changeColor);
}

function changeColor(event) {
    event.target.style.color = 'magenta';
}
dropDown.addEventListener('change', filterByLetter)


function filterByLetter() {
    let letter = dropDown.value
    Array.from(breedList.children).forEach(element => {
    if (element.innerHTML[0] != letter) {
        element.style = 'display: none'
    } else 
        element.style = 'display: list-item'
    } )
    
}