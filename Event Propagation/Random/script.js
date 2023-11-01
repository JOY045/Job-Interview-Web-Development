const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener, {
    capture : true
});

button.addEventListener("click", listener);

function listener(event) {
    //console.log("Do Something"); // If we click on Click Here Button, it will show Do Something message 3 times. Because all listeners are same.

    //console.log(event.target); //If we click on Click Here Button, it will show button 3 times, because it targets the button.

    //console.log(event.currentTarget.tagName); //If we click on Click Here Button, it will maintain an order like this : form > button > div (I just want show the order like this randomly)
    
    //console.log(this.tagName); //this & event.currentTarget are same working process.
}