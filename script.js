let currentNode = path;

// Assign parent to every node
function assignParents(node, parent = null) {
      node.parent = parent;

      if (node.left) assignParents(node.left, node);
      if (node.right) assignParents(node.right, node);
}

assignParents(path);

function closeWindow() {
      window.open(window.location, '_self').close();
}

function updateUI() {
      console.log(currentNode);
      console.log("Left text:", currentNode.leftText);
      console.log("Right text:", currentNode.rightText);

      const q = document.getElementById("question");
      const leftBtn = document.getElementById("leftBtn");
      const rightBtn = document.getElementById("rightBtn");
      const backBtn = document.getElementById("backBtn");

      q.innerHTML = currentNode.question;

      if (currentNode.leftText !== undefined && currentNode.leftText !== null) {
            leftBtn.innerHTML = currentNode.leftText;
            leftBtn.style.display = "inline-block";
      } else {
            leftBtn.style.display = "none";
      }

      if (currentNode.rightText !== undefined && currentNode.rightText !== null) {
            rightBtn.innerHTML = currentNode.rightText;
            rightBtn.style.display = "inline-block";
      } else {
            rightBtn.style.display = "none";
      }

      // Back button visibility
      backBtn.style.display = currentNode.parent ? "inline-block" : "none";
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

      if (currentNode.rightText === "Quit") {
            closeWindow();
            return;
      }

      if (currentNode.right) {
            currentNode = currentNode.right;
            updateUI();
      }
});

document.getElementById("backBtn").addEventListener("click", () => {
      if (currentNode.parent) {
            currentNode = currentNode.parent;
            updateUI();
      }
});

updateUI();
