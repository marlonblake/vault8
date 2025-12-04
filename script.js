let currentNode = path;
let key = false;

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

      if (key === false) {
            path.left.right.left.right.left.left.right.leftText = null
      } else {
            path.left.right.left.right.left.left.right.leftText = "Yes";
      }

      // Back button visibility
      backBtn.style.display = currentNode.parent ? "inline-block" : "none";
}

document.getElementById("leftBtn").addEventListener("click", () => {
      const audio = new Audio('audio/Beep.mp3');
      audio.play();

      if (currentNode.leftText === "City Road") {
            currentNode = path.left;
            updateUI();
            return;
      }

      if (currentNode.leftText === "Take the key") {
            key = true;
            currentNode = currentNode.left;
            updateUI();
            return;
      }

      if (currentNode.leftText === "Check it out") {
            currentNode = path.left.right.left.right.left;
            updateUI();
            return;
      }

      if (currentNode.left) {
            currentNode = currentNode.left;
            updateUI();
      }
});

document.getElementById("rightBtn").addEventListener("click", () => {
      const audio = new Audio('audio/Beep.mp3');
      audio.play();

      if (currentNode.rightText === "Turn around") {
            currentNode = path.right;
            updateUI();
            return;
      }

      if (currentNode.rightText === "Go opposite way") {
            currentNode = path.left.right.left.right.right;
            updateUI();
            return;
      }

      if (currentNode.rightText === "Try Again") {
            currentNode = path;
            key = false;
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
