window.onload = function () {
    
  // get reference to paragraph
  const paragraph = document.getElementById("textSpace");

  // get reference to the button
  const button = document.getElementById("btn");

  // add click event handler to the button
  // so that after clicking the button
  // the copied text will be displayed in the paragraph tag

  button.addEventListener("click", () => {
    // copy the text from clipboard
    navigator.clipboard.readText().then((copiedText) => {
      paragraph.innerText = copiedText;
    });
  });
    
}



