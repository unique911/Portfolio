document
  .getElementById("recommendForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value || "Anonymous";
    const message = document.getElementById("message").value;
    
    if (!message.trim()) {
      alert("Please enter a message before submitting.");
      return;
    }

    const blockquote = document.createElement("blockquote");
    blockquote.textContent = `"${message}" — ${name}`;
    document.querySelector(".recommendations").appendChild(blockquote);

    alert("Thank you for your feedback!");
    this.reset();
  });
