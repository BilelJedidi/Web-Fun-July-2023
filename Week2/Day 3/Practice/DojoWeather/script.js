
var cookie = document.querySelector(".cookies");
var low = document.querySelector(".degrees span")
var high = document.querySelector(".degrees p")

function hide() {
    cookie.remove();
}


function change(element) {
    for(var i=1; i<9; i++) {
        var temp = document.querySelector(".temp" + i);
        var tempvalue = parseInt(temp.innerText)
        if(element.value == "°F") {
            temp.innerText = Math.round(9 / 5 * tempvalue + 32) ;
        } 
        else {
            console.log(tempvalue)
            temp.innerText = Math.round(5 / 9 * (tempvalue - 32));
        }
    }

}
tempSpan = document.querySelector("#temp" + i);
(temp * 9/5) + 32

for(var i=1; i<9; i++) {
    var temp = document.querySelector(".temp" + i);
}