var divs = document.querySelectorAll(".tab");
var texts = document.querySelectorAll("h4");

// Initialize the first text element
texts[0].style.display = "block";
texts[0].style.width = "50%";

// Add click event listeners to all div elements
divs.forEach(function(div, index) {
    div.addEventListener("click", function() {
        hideAllText();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    });
});

// Function to hide all text elements
function hideAllText() {
    texts.forEach(function(text) {
        text.style.display = "none";
    });
}
