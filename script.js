let currentNode = path;

function updateUI() {
      console.log(currentNode);
      console.log("Left text:", currentNode.leftText);
      console.log("Right text:", currentNode.rightText);

      const q = document.getElementById("question");
      const leftBtn = document.getElementById("leftBtn");
      const rightBtn = document.getElementById("rightBtn");

      q.innerHTML = currentNode.question;

      // Show button labels when the text exists, even if the node has no child.
      // Disable the button when there's no child to navigate to.
      if (typeof currentNode.leftText !== "undefined" && currentNode.leftText !== null) {
            leftBtn.innerHTML = currentNode.leftText;
            leftBtn.style.display = "inline-block";
            // leftBtn.disabled = !currentNode.left;
      } else {
            leftBtn.style.display = "none";
      }

      if (typeof currentNode.rightText !== "undefined" && currentNode.rightText !== null) {
            rightBtn.innerHTML = currentNode.rightText;
            rightBtn.style.display = "inline-block";
            // rightBtn.disabled = !currentNode.right;
      } else {
            rightBtn.style.display = "none";
      }
}

document.getElementById("leftBtn").addEventListener("click", () => {
      if (currentNode.leftText === "City Road") {
            currentNode = path.left;
            updateUI();
            return;
      }

      if (currentNode.left) {
            currentNode = currentNode.left;
            updateUI();
      }
});

document.getElementById("rightBtn").addEventListener("click", () => {
      if (currentNode.rightText === "Try Again") {
            currentNode = path;
            updateUI();
            return;
      }

      if (currentNode.right) {
            currentNode = currentNode.right;
            updateUI();
      }
});

updateUI();