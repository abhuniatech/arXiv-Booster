// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('injectButton').addEventListener('click', injectButtonGroup);
//   });
  
//   function injectButtonGroup() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.executeScript(tabs[0].id, { code: '(' + injectContentScript + ')();' });
//     });
//   }
  
//   function injectContentScript() {
    // // Create a container for the button group
    // var container = document.createElement("div");
    // container.setAttribute("id", "button-group-container");
  
    // // Create the buttons
    // var button1 = document.createElement("button");
    // button1.innerHTML = "Open in Overleaf";
  
    // var button2 = document.createElement("button");
    // button2.innerHTML = "Download as .zip";
  
    // var button3 = document.createElement("button");
    // button3.innerHTML = "Donate";
  
    // Append buttons to the container
    // container.appendChild(button1);
    // container.appendChild(button2);
    // container.appendChild(button3);
  
    // // Find the h1 element with class="title mathjax"
    // var h1Element = document.querySelector("h1.title.mathjax");
  
    // if (h1Element) {
    //   // Insert the container after the h1 element
    //   h1Element.insertAdjacentElement("afterend", container);
    // }
//   }
  