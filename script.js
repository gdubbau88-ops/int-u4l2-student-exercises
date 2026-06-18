let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");
let word1 = "butter";
let word2 = "fly";
buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".
let spidyCaptionHTMLElement=document.querySelector(".comment-one");
    let spidyCaption= spidyCaptionHTMLElement.value;

    // 2. Display the variable spidyCaption to captionOne.
captionOne.innerHTML = spidyCaption;
console.log(word1 + word2);
});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.