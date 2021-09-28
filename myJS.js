/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
let my_box = document.getElementById("color-block"); 

function changeColor(){
    //Write a condition determine what color it should be changed to

    if(my_box.classList.contains("selected")){
        //change the background color using JS
        my_box.classList.remove("selected");
        //Change the text of the color using the span id color-name
    }
    else{
        //change the background color using JS
        my_box.classList.add("selected")
        //Change the text of the color using the span id color-name
    }
}
my_box.addEventListener("click", changeColor);

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
let btn = document.getElementById('convertbtn');
/*const faren_input = document.getElementsByName('f-input')[0].value;*/
let cel_space = document.getElementById('c-output');

function convertTemp(){
    //Calculate the temperature here
    const faren_input = document.getElementsByName('f-input')[0].value;

    let celsius = (faren_input - 32) * (5/9)
    //Send the calculated temperature to HTML
    cel_space.textContent = celsius
}
btn.addEventListener("click", convertTemp);
