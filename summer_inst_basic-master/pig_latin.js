/*
Pig Latin
*/

function igpayAtinlay(str) {
    var returnArray = [];
    var wordArray = document.getElementById("num").value;
    let contenedor = document.getElementsByClassName("respuesta");
    wordArray = wordArray.split(' ');
      

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);
        

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word += 'way');
            continue;
        }

        for (var ii = 1; ii < word.length; ii++) {
            if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                break;
            } else {
                beginning += word.charAt(ii);
            }
        }

        returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    let div = document.createElement('div');  //creating element
    div.textContent = returnArray.join(" ");         //adding text on the element
    document.body.appendChild(div);  
}

console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"