var h1 = document.querySelector(".info h1")
var close = document.querySelector(".hide1")
var close2 = document.querySelector(".hide2")
var req = document.querySelector(".span0")
var con = document.querySelector(".span1")



var numbers = [2, 418]


function change() {
    h1.innerHTML = "Bilel Jedidi"
}


function accept(num) {
    if (num == 0) {
        close.remove();
    }
    if (num == 1) {
        close2.remove();
    }
    numbers[0]--
    req.innerHTML = numbers[0]
    numbers[1]++
    con.innerHTML = numbers[1]
}

function decline(num) {
    if (num == 0) {
        close.remove();
    }
    if (num == 1) {
        close2.remove();
    }
    numbers[0]--
    req.innerHTML = numbers[0]
}