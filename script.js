function display(input) {
    var color = input.id;
    var final = document.querySelector(".printing-results");
    final.innerHTML = "Hello World!";
    final.style.color = color;

    var memory_text = document.querySelector("#memory");
    memory_text.innerHTML += color + "<br>";
}