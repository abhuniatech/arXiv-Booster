// Find the h1 element with class="title mathjax"
var h1Element = document.querySelector("h1.title.mathjax");
var h1Content = h1Element.textContent;
var Title = h1Content.substring(6);

// arxivId extraction

if (h1Element) {
  // Create a container for the button group
  var container = document.createElement("div");
  container.setAttribute("id", "button-group-container");

  // Create the buttons

  var button0 = document.createElement("button");
  button0.innerHTML = "Preview PDF";
  button0.classList.add("button");

  var button1 = document.createElement("button");
  button1.innerHTML = "Download PDF";
  button1.classList.add("button");

  var button2 = document.createElement("button");
  button2.innerHTML = "Download Source Code";
  button2.classList.add("button");

  var button3 = document.createElement("button");
  button3.innerHTML = "Add to Reading List";
  button3.classList.add("button");
  button3.classList.add("tooltip"); // Add tooltip class to button

  // Append buttons to the container
  container.appendChild(button0);
  container.appendChild(button1);
  container.appendChild(button2);
  container.appendChild(button3);

  // Insert the container after the h1 element
  h1Element.insertAdjacentElement("afterend", container);
}

// Add event listener to button0
button0.addEventListener("click", function() {
  // Check if the URL matches the specified pattern
  if (window.location.href.startsWith("https://arxiv.org/abs/")) {
    // Extract the arXiv ID from the URL
    var arxivId = window.location.href.replace("https://arxiv.org/abs/", "");

    // Open the PDF link in a new tab
    window.open("https://arxiv.org/pdf/" + arxivId + ".pdf", "_blank");
  }
});

// Add event listener to button2
button2.addEventListener("click", function() {
  // Check if the URL matches the specified pattern
  if (window.location.href.startsWith("https://arxiv.org/abs/")) {
    // Extract the arXiv ID from the URL
    var arxivId = window.location.href.replace("https://arxiv.org/abs/", "");

    // Create a link element to initiate the download
    var link = document.createElement("a");
    link.href = "https://arxiv.org/e-print/" + arxivId;
    link.download = "[" + arxivId + "] " + Title + ".zip";
    link.click();
  }
});

// Add event listener to button1
button1.addEventListener("click", function() {
  // Check if the URL matches the specified pattern
  if (window.location.href.startsWith("https://arxiv.org/abs/")) {
    // Extract the arXiv ID from the URL
    var arxivId = window.location.href.replace("https://arxiv.org/abs/", "");

    // Create a link element to initiate the download
    var link = document.createElement("a");
    link.href = "https://arxiv.org/pdf/" + arxivId + ".pdf";
    link.download = "[" + arxivId + "] " + Title + ".pdf";
    link.click();
  }
});

// Add tooltip message when hovering over button3
button3.addEventListener("mouseover", function() {
  var tooltip = document.createElement("div");
  tooltip.classList.add("tooltip-text");
  tooltip.innerText = "This feature is coming shortly!";
  button3.appendChild(tooltip);
});

button3.addEventListener("mouseout", function() {
  var tooltip = button3.querySelector(".tooltip-text");
  if (tooltip) {
    button3.removeChild(tooltip);
  }
});


