//document.querySelector("#red").addEventListener('click', () => {
//    alert('Image clicked');
//})

function display(input) {
    var color = input.id;
    var final = document.querySelector(".printing-results");
    final.innerHTML = "Hello World!";
    final.style.color = color;
}