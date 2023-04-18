/* JavaScript file for encryption/decryption methods & some extra functions
    such as -copyToClipboard- functionality */
/* © Created by Caviar9045 */

toggle_visibility("copybutton");
var visibility = 0;


/* Dictionaries for encryption.*/
const encodingMap = {
    'e' : 'enter', 'i' : 'imes', 'a' : 'ai',
    'o': 'ober', 'u' : 'ufat'
};
/* Here starts the functions used to encode the input*/

/* Entry function called when user clicks on "Encode" button */
function encodeText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    //const inputText = document.getElementById('inputText').value;
    const encodedText = encode(inputText);
    if (inputText == '') {
    }
    else {
        document.getElementById('encodedDecodedText').innerText = 'Encoded Text: ';
        document.getElementById('encodedResult').innerText = encodedText;
        document.getElementById('inputText').value = '';
        changeBackgroundColor(0);
        if (visibility == 1) { }
        else {
            toggle_visibility("copybutton");
        }
        visibility = 1;
    }
}

/* We call the code() function based on the length of the input to select the dictionary 
    and it returns the values returned from the next functions.*/
function encode(input) {
    var coded = code(input);
    return (coded);
}

/* This is our main code function that takes as argument the input text.
    First, it converts the input text to an array to separete each character and then calls 
    searchAndReplace function to encode. */
function code(toCode) {
    let codedArray = toCode.split('');
    let result = toStringConvert(searchAndReplace(codedArray, encodingMap));
    return result;
}

/* We use this function as our iteration through argument #2 (dictionary) comparing each element
    of argument #1 (array from code() function) and replaces it with the value of each key 
    found on the dictionary (encodingMap). 
    
    The encoding process finishes here.*/
function searchAndReplace(arr, dictionary) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in dictionary) {
            arr[i] = dictionary[arr[i]];
        }
    }
    return arr;
}



/* Here starts the functions used to decode the input*/


/* Entry function called when user clicks on "Decode" button */
function decodeText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const decodedText = decode(inputText);
    if (inputText == '') {
    }
    else {
        document.getElementById('encodedDecodedText').innerText = 'Decoded Text: ';
        document.getElementById('encodedResult').innerText = decodedText;
        document.getElementById('inputText').value = '';
        changeBackgroundColor(1);
        if (visibility == 1) { }
        else {
            toggle_visibility("copybutton");
        }
        visibility = 1;
        state = 2;
    }
};

/* We call the decode() function to get the opposide method as encode() to get the original value
    of each group of encoded characters and, then, the original text.*/
function decode(input) {
    let decodedinput = input;
    decodedinput = decodedinput.replace(/enter/g, "e");
    decodedinput = decodedinput.replace(/imes/g, "i");
    decodedinput = decodedinput.replace(/ai/g, "a");
    decodedinput = decodedinput.replace(/ober/g, "o");
    decodedinput = decodedinput.replace(/ufat/g, "u");
    return (decodedinput);
}

/* Extra functions */

/* Toggles the visibility of the button to Copy To Clipboard*/
function toggle_visibility(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}

/* Method to copyToClipboard the <p> tag with the id="#encodedResult"*/
function copyToClipboard() {
    var range = document.createRange();
    var popUpelement = document.getElementById("popUp");
    range.selectNode(document.getElementById("encodedResult"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    popUpelement.innerHTML = "Copied!";
    popUpelement.style.opacity = "1";
    popUpelement.style.pointerEvents = "auto";
    setTimeout(function() {
        popUpEvent();
    }, 2000);
}
  function popUpEvent() {
    var popUpelement = document.getElementById("popUp");
    popUpelement.style.opacity = "0";
    popUpelement.style.pointerEvents = "none";
  }

/*Converts from an array to a string*/
function toStringConvert(array) {
    let arrayToString = array;
    let resultString = ""; // Initialize an empty string to store the result

    for (let i = 0; i < arrayToString.length; i++) {
        resultString += arrayToString[i]; // Concatenate each array element to the result string
        if (i < arrayToString.length - 1) {
            resultString += ""; // Add a separator except for the last element
        }
    }
    return resultString;
}