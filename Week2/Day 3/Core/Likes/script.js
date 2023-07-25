
var span = [
    document.querySelector("#user1"),
    document.querySelector("#user2"),
    document.querySelector("#user3"),
]
var likes = [9, 12, 9]

function hello(num) {
    likes[num]++;
    span[num].innerHTML = likes[num];
}