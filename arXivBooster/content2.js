// if (window.location.href.startsWith("https://arxiv.org/pdf/")) {
// // Extract the arXiv ID from the URL
// var arxivId3 = window.location.href.replace("https://arxiv.org/pdf/", "").replace(".pdf", "");
// document.title = "[" + arxivId3 + "]" + "ackt";  
// };
// Listen for page load event

// Create a button element

// Create a button element
// var button = document.createElement("button");
// button.innerHTML = "Click me";

// // Apply CSS styles to position the button
// button.style.position = "fixed";
// button.style.top = "10px";
// button.style.left = "10px";
// button.style.zIndex = "9999";

// // Add a click event listener to the button
// button.addEventListener("click", function() {
//   // Code to execute when the button is clicked
//   alert("Button clicked!");
// });

// // Append the button to the body of the webpage
// document.body.appendChild(button);

// var button = document.createElement("button");
// button.innerHTML = "Click me";

// // Add a click event listener to the button
// button.addEventListener("click", function() {
//   // Code to execute when the button is clicked
//   alert("Button clicked!");
// });

// // Append the button to the body of the webpage
// document.body.appendChild(button);




// function changeTitle() {
//     document.title = "Your Custom Title";
//   }
  
//   // Create a mutation observer to monitor changes in the title
//   const observer = new MutationObserver(function(mutationsList) {
//     for (let mutation of mutationsList) {
//       if (mutation.type === "childList" && document.title !== "Your Custom Title") {
//         changeTitle();
//       }
//     }
//   });
  
//   // Start observing changes to the title
//   observer.observe(document.querySelector("title"), { childList: true });
//   changeTitle(); // Initial title change on page load
  
// window.addEventListener("load", function() {
//     // Check if the current page is a PDF
//     if (window.location.pathname.endsWith(".pdf")) {
//       // Modify the title of the tab
//       document.title = "Your Custom Title";
//     }
//   });
// The PDF viewer in Chrome has a bug that will overwrite the title of the page after loading the PDF.