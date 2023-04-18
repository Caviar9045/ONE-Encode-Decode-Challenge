/* Special JavaScript file for JQuery code*/
/* © Created by Caviar9045 */


/* Variables and color constants */
const colormain = '#b3ffd9';
const colormainbutton = '#9ddfbe';
const colormainbuttonhover = '#89c3a6';
const colormaincomplement = '#ffb3d9';
const colormaincomplementbutton = '#df9dbe';
const colormaincomplementbuttonhover = '#c389a6';
const colormaincomplement2 = '#ffffb3';
const colormaincomplement2button = '#dfdf9d';
const colormaincomplement2buttonhover = '#c3c389';
var colorTo;
var colorToButton;

/* Function to change background color for body */
function changeBackgroundColor(buttonClicked) {
  var backgroundColor = $("body").css("background-color");
  if (rgbToHex(backgroundColor) == colormain && buttonClicked == 0) {
    var colorTo = colormaincomplement;
    var colorToButton = colormaincomplementbutton;
  }
  else if (rgbToHex(backgroundColor) == colormain && buttonClicked == 1) {
    var colorTo = colormaincomplement2;
    var colorToButton = colormaincomplement2button;
  }
  else if (rgbToHex(backgroundColor) == colormaincomplement && buttonClicked != 0) {
    var colorTo = colormaincomplement2;
    var colorToButton = colormaincomplement2button;
  }
  else if (rgbToHex(backgroundColor) == colormaincomplement2 && buttonClicked != 1) {
    var colorTo = colormain;
    var colorToButton = colormainbutton;
  }

  $("body").animate({
    backgroundColor: colorTo,
  }, 1000);
  $("button").animate({
    backgroundColor: colorToButton,
  }, 300);
}
/* Convert from rgb(x,x,x) to Hex (#XXXXXX)*/

function rgbToHex(rgb) {
  // Extract RGB values from input string
  var rgbValues = rgb.match(/\d+/g);

  // Convert RGB values to hexadecimal
  var r = parseInt(rgbValues[0]);
  var g = parseInt(rgbValues[1]);
  var b = parseInt(rgbValues[2]);

  // Convert each RGB value to hexadecimal and pad with zeros if necessary
  var hexR = ("0" + r.toString(16)).slice(-2);
  var hexG = ("0" + g.toString(16)).slice(-2);
  var hexB = ("0" + b.toString(16)).slice(-2);

  // Concatenate hexadecimal values to form final hex color code
  var hexColor = "#" + hexR + hexG + hexB;

  // Return the hexadecimal color code
  return hexColor;
}