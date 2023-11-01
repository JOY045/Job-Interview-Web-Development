const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener, {
    capture : true
});

form.addEventListener("click", listener, {
    capture : true
});

button.addEventListener("click", listener, {
    capture : true
});

function listener(event) {
    //console.log("Do Something"); // If we click on Click Here Button, it will show Do Something message 3 times. Because all listeners are same.

    //console.log(event.target); //If we click on Click Here Button, it will show button 3 times, because it targets the button.

    //console.log(event.currentTarget.tagName); //If we click on Click Here Button, it will maintain an order like this : div > form > button (From Parent to Child)
    
    // console.log(this.tagName); //this & event.currentTarget are same working process.
}

// So, For Capturing we can use, event.currentTarget || this, But in listener we must use capture : true