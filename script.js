const submit = document.getElementById("addStory");
const allStories = document.getElementById("stories");
const userTitle = document.getElementById("userStoryTitle");
const userStory = document.getElementById("userStory");

console.log("hello");

function addStory(){
    var newStory = document.createElement("div");    
    var title = document.createElement("h2");
    console.log(userTitle.value);
    title.innerText = userTitle.value;
    var theStory = document.createElement("p");
    theStory.innerText = userStory.value;

    newStory.appendChild(title);
    newStory.appendChild(theStory);

    allStories.appendChild(newStory);
}

submit.addEventListener("click", addStory);